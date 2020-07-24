"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintTemplate = void 0;
const chalk_1 = require("chalk");
const path_1 = require("path");
const globals_1 = require("../context/globals");
const blu_interface_1 = require("../interfaces/blu.interface");
const template_variable_formats_1 = require("../lib/template-variable-formats");
const template_file_model_1 = require("./template-file.model");
const template_repeater_model_1 = require("./template-repeater.model");
const global_context_1 = require("../context/global-context");
const file_system_1 = require("../lib/file-system");
const text_transform_1 = require("../lib/text-transform");
const input_prompts_1 = require("../lib/input-prompts");
const handler_1 = require("../lib/handler");
const template_link_model_1 = require("./template-link.model");
const command_args_model_1 = require("./command-args.model");
class BlueprintTemplate {
    constructor(templateMetadata) {
        this.templateMetadata = templateMetadata;
        this.templateFiles = [];
        this.links = [];
        this.templateVariables = [];
        this.inputRepeaters = [];
        this.templateName = this.templateMetadata.templateName;
        this.collectionName = this.templateMetadata.collectionName;
        this.templatePath = `${this.templateMetadata.collectionPath}/${this.templateMetadata.templateName}`;
        this.templateConfig = this.templateMetadata.templateConfig;
        this.collectionConfig = this.templateMetadata.collectionConfig;
    }
    async render(runContext) {
        this.runContext = runContext;
        this.setCLIDestination();
        this.getUserDefinedVariableFormats();
        this.newTemplateName = runContext.itemContext.newTemplateName;
        this.setConfigFileArgs();
        this.setTemplateVariable('name', this.newTemplateName);
        this.setTemplateVariables(this.getPathVariables());
        this.setTemplateVariables(this.runContext.templateVariables);
        if (this.templateConfig.args.length > 0) {
            await handler_1.Handle.asyncResponse(this.validateArgs());
        }
        if (this.templateConfig.repeaters.length > 0) {
            await handler_1.Handle.asyncResponse(this.handleTemplateRepeaters());
        }
        this.setUserGlobals();
        await handler_1.Handle.asyncResponse(this.prepareTemplate());
        this.prepareTemplateLinks();
    }
    getContextParameters() {
        const templateVariables = this.templateConfig.args.map(arg => this.templateVariables.find(t => t.name === arg.name));
        const templateFileVariables = [].concat(...this.templateFiles.map(tFile => tFile.getCommandArgs()));
        const commandLineVariables = this.runContext.templateVariables.filter(t => !(`${t.value}` === 'true'));
        const allTemplateVariables = [...templateVariables, ...templateFileVariables, ...commandLineVariables].filter(t => this.inputRepeaters.findIndex(ir => ir.name === t.name) === -1);
        const uniqueTemplateVariables = [...new Map(allTemplateVariables.map(item => [item['name'], item])).values()];
        const contextOptions = Object.assign({}, this.runContext.commandArgs.options);
        uniqueTemplateVariables.forEach(v => delete contextOptions[v.name]);
        return {
            variables: uniqueTemplateVariables,
            options: command_args_model_1.CommandArgs.getOptionsString(contextOptions).trim(),
            repeaters: this.inputRepeaters
        };
    }
    ;
    async handleTemplateRepeaters() {
        const templateRepeaters = [];
        for (let repeater of this.templateConfig.repeaters) {
            if (repeater.use) {
                repeater = this.collectionConfig.repeaters.find(r => r.name === repeater.use);
            }
            if (repeater) {
                const repeaterValues = this.runContext.getRepeaterValues(repeater.name);
                if (repeaterValues.length > 0) {
                    // todo: validate repeater values against the repeater args from the config file. For now, responsibility falls on the user to provide the correct format
                    repeater.values = repeaterValues.map(values => repeater.args.map((arg, index) => ({ name: arg.name, value: values[index] })));
                }
                else {
                    if (repeater.canBeBlank !== true) {
                        if (global_context_1.GlobalContext.isRunByAPI()) {
                            handler_1.Handle.apiError(`Template is missing required repeater values for repeater ${repeater.name}.`, blu_interface_1.BLU.API.ErrorCode.RepeaterMissing, { repeater });
                        }
                        else {
                            await handler_1.Handle.asyncResponse(input_prompts_1.InputPrompts.getRepeaterArguments(repeater));
                            this.runContext.storeVariable(repeater.name, template_repeater_model_1.TemplateRepeater.printValue(repeater));
                            this.setTemplateVariable(repeater.name, template_repeater_model_1.TemplateRepeater.printValue(repeater));
                        }
                    }
                    else {
                        repeater.values = [];
                    }
                }
                templateRepeaters.push(repeater);
            }
        }
        this.inputRepeaters = templateRepeaters;
    }
    getUserDefinedVariableFormats() {
        const templateFormats = file_system_1.FileSystem.getFormatsFileSync(`${this.templatePath}/${globals_1.FORMATS_FILE_NAME}`);
        if (templateFormats) {
            template_variable_formats_1.setFormatters(templateFormats);
        }
    }
    setConfigFileArgs() {
        var _a;
        const configFileArgs = (_a = this.templateConfig.args) !== null && _a !== void 0 ? _a : [];
        this.setArgVariables(configFileArgs.filter(arg => arg.value !== undefined)); // set args with default values as template variables
    }
    async validateArgs() {
        const missingArgs = this.templateConfig.args.filter(arg => !this.templateVariables.find(t => t.name === arg.name));
        if (missingArgs.length > 0) {
            if (global_context_1.GlobalContext.isRunByAPI()) {
                handler_1.Handle.apiError(`Template is missing required argument values. Missing args: ${missingArgs.map(a => a.name).join(', ')}`, blu_interface_1.BLU.API.ErrorCode.ArgMissing, { missingArgs });
            }
            else {
                const responseArgs = await handler_1.Handle.asyncResponse(input_prompts_1.InputPrompts.formPrompt(missingArgs));
                this.setArgVariables(responseArgs);
            }
        }
    }
    setArgVariables(inputArgs) {
        inputArgs.forEach(inputArg => this.setTemplateVariable(inputArg.name, `${inputArg.value}`));
    }
    setCLIDestination() {
        this.templateConfig.destination = this.runContext.getTemplateVariableValue('destination', false) || this.templateConfig.destination;
    }
    async prepareTemplate() {
        const allTemplateFiles = this.readTemplateFiles(this.templatePath).filter(file => ![globals_1.CONFIG_FILE_NAME, globals_1.FORMATS_FILE_NAME].includes(file.filename));
        const wrapInFolder = this.wrapTemplateInFolder(allTemplateFiles.length);
        for (const rawTemplateFile of allTemplateFiles) {
            const fileConfig = this.getFileConfig(path_1.join(rawTemplateFile.relativePath, rawTemplateFile.filename));
            const templateFileModel = new template_file_model_1.BlueprintTemplateFile(rawTemplateFile, this.templateVariables, this.templateConfig, this.inputRepeaters, fileConfig, wrapInFolder);
            await handler_1.Handle.asyncResponse(templateFileModel.init());
            this.templateFiles.push(templateFileModel);
        }
        this.renderTemplate();
    }
    prepareTemplateLinks() {
        this.templateConfig.links.forEach(link => {
            const newLink = new template_link_model_1.TemplateLink(link, this.templateVariables, this.templateConfig.delimiter);
            this.links.push(newLink);
        });
    }
    storeLinks() {
        let links = [];
        if (this.runContext.isEnabled('links')) {
            links = this.links;
            this.links.forEach(link => link.storeToDisk());
        }
        return links;
    }
    previewLinks() {
        let links = [];
        if (this.runContext.isEnabled('links')) {
            links = this.links;
        }
        return links;
    }
    readTemplateFiles(rootPath) {
        return file_system_1.FileSystem.listAllFiles(rootPath);
    }
    get conflictFiles() {
        const filesToOverwrite = [];
        if (!(this.runContext.forceOverwrite || global_context_1.GlobalContext.isPreviewMode())) {
            this.templateFiles.forEach(templateFile => {
                if (file_system_1.FileSystem.fileExistsSync(templateFile.destinationPath)) {
                    filesToOverwrite.push(templateFile.destinationPath);
                }
            });
        }
        return filesToOverwrite;
    }
    storeTemplate() {
        let filesToOverwrite = this.conflictFiles;
        const storedFiles = [];
        /**
         * This is a safety measure in case this function is ever called before a check for conflict files. The check for
         * conflict files should be and is done outside of this function but leaving this here as redundancy check in case
         * something gets missed. Don't ever want to overwrite src/codebase files without the user specifically stating
         * their intention to do so.
         */
        if (filesToOverwrite.length > 0) {
            if (global_context_1.GlobalContext.isRunByAPI()) {
                handler_1.Handle.apiError(`Files in destination path already exist. Run with -f to overwrite them.`, blu_interface_1.BLU.API.ErrorCode.FileExists, filesToOverwrite);
            }
            else {
                console.log(chalk_1.default.red(`Files in destination path already exist. Run with -f to overwrite them.`));
                filesToOverwrite.forEach(filePath => console.log(chalk_1.default.red(`File exists: ${filePath}`)));
                console.log(chalk_1.default.red(`Template creation aborted`));
                handler_1.Handle.fatalError();
            }
        }
        else {
            this.templateFiles.forEach((templateFile) => storedFiles.push(templateFile.storeFileToDisk()));
        }
        return storedFiles;
    }
    previewTemplate() {
        const verbose = this.runContext.getOption('verbose');
        this.templateFiles.forEach((templateFile, index) => {
            templateFile.preview(index + 1, this.templateFiles.length, this.collectionConfig, this.templateConfig, verbose);
        });
        return this.templateFiles.map(f => f.destinationPath);
    }
    renderTemplate() {
        this.templateFiles.forEach((templateFile) => templateFile.render());
    }
    onSuccess() {
        let onSuccessMessages = [];
        if (this.templateConfig.onSuccess && this.runContext.isEnabled('onSuccess')) {
            const onSuccess = this.templateConfig.onSuccess;
            const onSuccessStrings = Array.isArray(onSuccess) ? onSuccess : [onSuccess];
            onSuccessMessages = onSuccessStrings.map(s => this._replaceText(s));
        }
        this.templateFiles.forEach(templateFile => onSuccessMessages.push(...templateFile.onSuccess()));
        return onSuccessMessages;
    }
    getCommands() {
        let commandList = [];
        if (this.templateConfig.commands) {
            const commands = this.templateConfig.commands.map(command => this._replaceText(command));
            commandList = commands.map(command => command.split(' '));
        }
        return commandList;
    }
    wrapTemplateInFolder(numTemplateFiles) {
        const wrapInFolder = this.runContext.getOption('wrapInFolder', false) || this.templateConfig.wrapInFolder;
        return wrapInFolder === undefined ? numTemplateFiles > 1 : wrapInFolder;
    }
    getPathVariables() {
        return [
            { name: 'ROOT_PATH', value: globals_1.ROOT_PATH },
            { name: 'ROOT_DIR', value: globals_1.ROOT_PATH },
            { name: 'PROJECT_ROOT', value: globals_1.ROOT_PATH },
            { name: 'CURRENT_WORKING_DIR', value: globals_1.CURRENT_WORKING_DIR },
            { name: 'RELATIVE_WORKING_DIR', value: globals_1.RELATIVE_WORKING_DIR },
            { name: 'CWD', value: globals_1.CURRENT_WORKING_DIR },
            { name: 'CWD_NAME', value: file_system_1.FileSystem.getLastDirectoryName(globals_1.CURRENT_WORKING_DIR) },
        ];
    }
    getFileConfig(filePath) {
        return this.templateConfig.files.find(f => [filePath, `./${filePath}`, `/${filePath}`].includes(f.for));
    }
    setUserGlobals() {
        const collectionVariables = this.collectionConfig.globals.map(g => ({ name: g.name, value: this._replaceText(g.value) }));
        const templateVariables = this.templateConfig.globals.map(g => ({ name: g.name, value: this._replaceText(g.value) }));
        this.setTemplateVariables([...templateVariables, ...collectionVariables]);
    }
    _replaceText(textToReplace, templateVariables = this.templateVariables, delimiter = this.templateConfig.delimiter) {
        return text_transform_1.TextTransform.replaceText(textToReplace, templateVariables, delimiter);
    }
    setTemplateVariable(name, value) {
        const currentVariable = this.templateVariables.find(v => v.name === name);
        currentVariable ? currentVariable.value = value : this.templateVariables.push({ name, value });
    }
    setTemplateVariables(variables) {
        variables.forEach(v => this.setTemplateVariable(v.name, v.value));
    }
}
exports.BlueprintTemplate = BlueprintTemplate;
//# sourceMappingURL=template.model.js.map