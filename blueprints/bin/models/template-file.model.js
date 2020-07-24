"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintTemplateFile = void 0;
const chalk_1 = require("chalk");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const template_variable_formats_1 = require("../lib/template-variable-formats");
const blu_interface_1 = require("../interfaces/blu.interface");
const global_context_1 = require("../context/global-context");
const template_repeater_model_1 = require("./template-repeater.model");
const template_doc_model_1 = require("../renderer/models/template-doc.model");
const file_system_1 = require("../lib/file-system");
const print_1 = require("../lib/print");
const text_transform_1 = require("../lib/text-transform");
const input_prompts_1 = require("../lib/input-prompts");
const handler_1 = require("../lib/handler");
class BlueprintTemplateFile {
    constructor(rawTemplateFile, templateVariables, templateConfig, inputRepeaters = [], fileConfig, wrapInFolder) {
        this.rawTemplateFile = rawTemplateFile;
        this.templateVariables = templateVariables;
        this.templateConfig = templateConfig;
        this.inputRepeaters = inputRepeaters;
        this.wrapInFolder = wrapInFolder;
        this.previewSettings = {
            columnOneWidth: 20,
            columnTwoWidth: 100,
        };
        this.setFileConfig(this.templateFilename, templateConfig, fileConfig);
        this.templateVariables = [...this.templateVariables, ...this.getFilenameVariables(this.templateFilename)];
        this.templateRepeaters = this.inputRepeaters.map(inputRepeater => new template_repeater_model_1.TemplateRepeater(inputRepeater, this.fileConfig.delimiter));
    }
    async init() {
        await handler_1.Handle.asyncResponse(this.validateArgs());
        this.newFilename = this._replaceText(this.fileConfig.filename);
        this.destinationDir = this.getDestinationPath();
        this.templateVariables.push({ name: 'DESTINATION_DIR', value: this.destinationDir });
        this.destinationPath = path_1.join(this.destinationDir, this.newFilename);
        this.templateVariables.push({ name: 'DESTINATION_PATH', value: this.destinationPath });
    }
    render() {
        this.renderTemplateFile();
    }
    storeFileToDisk() {
        fs_extra_1.mkdirpSync(this.destinationDir);
        fs_1.writeFileSync(this.destinationPath, this.renderedFileContents);
        return this.destinationPath;
    }
    preview(fileNumber, totalFiles, collectionConfig, templateConfig, verbose = false) {
        this.printPreview(fileNumber, totalFiles, collectionConfig, templateConfig, verbose);
    }
    onSuccess() {
        let onSuccessMessages = [];
        if (this.fileConfig.onSuccess) {
            const onSuccess = this.fileConfig.onSuccess;
            const onSuccessStrings = Array.isArray(onSuccess) ? onSuccess : [onSuccess];
            onSuccessMessages = onSuccessStrings.map(s => text_transform_1.TextTransform.replaceText(s, this.templateVariables, this.fileConfig.delimiter));
        }
        return onSuccessMessages;
    }
    getCommandArgs() {
        return this.fileConfig.args.map(arg => this.templateVariables.find(t => t.name === arg.name));
    }
    get templatePath() {
        return this.rawTemplateFile.absolutePath;
    }
    get templateFilename() {
        return this.rawTemplateFile.filename;
    }
    renderTemplateFile() {
        global_context_1.GlobalContext.setGlobalVariables(this.templateVariables);
        this.sourceFileContents = fs_1.readFileSync(this.templatePath, 'utf-8');
        const templateDoc = new template_doc_model_1.TemplateDoc(this.sourceFileContents, this.templateVariables, this.templateRepeaters, this.fileConfig, this.templatePath);
        this.renderedFileContents = templateDoc.render();
    }
    setFileConfig(templateFilename, templateConfig, fileConfig) {
        const fileDelimiter = (fileConfig && fileConfig.delimiter) || { start: null, end: null };
        const delimiterStart = fileDelimiter.start || templateConfig.delimiter.start || '%';
        const delimiterEnd = fileDelimiter.end || templateConfig.delimiter.end || '%';
        const filename = (fileConfig && fileConfig.filename) || templateConfig.filename || `${delimiterStart}filename${delimiterEnd}`;
        const destination = (fileConfig && fileConfig.destination) || null;
        const args = (fileConfig && fileConfig.args) || [];
        const onSuccess = (fileConfig && fileConfig.onSuccess) || null;
        this.fileConfig = {
            for: templateFilename,
            filename,
            delimiter: {
                start: delimiterStart,
                end: delimiterEnd,
            },
            destination,
            args,
            onSuccess,
        };
    }
    /**
     * Splits the template filename into parts that can be used within the blueprint ecosystem
     * Available parts that can be used in the template:
     *  - filename | fileName : full name of the template file          [file.ts]
     *  - basename | baseName : name of file before the last dot '.'    [file]
     *  - extension           : extension of file                       [ts]
     * @param templateFilename
     */
    getFilenameVariables(templateFilename) {
        const filename = templateFilename;
        const extension = templateFilename.split('.').reverse()[0];
        const basename = templateFilename.lastIndexOf('.') !== -1 ? templateFilename.substring(0, templateFilename.lastIndexOf('.')) : templateFilename;
        return [
            { name: 'filename', value: filename },
            { name: 'extension', value: extension },
            { name: 'basename', value: basename },
        ];
    }
    /**
     * A file has a relative path, absolute path, and a filename
     * filename is the name of the file 'component.html'
     * relativePath is the path to the filename within the template. Example:
     *   template-folder/folder1/folder2/component.html
     *   relative path = ./folder1/folder2
     * absolute path is the full path from root to the file:
     *   /User/Bob/.../.../.../collection/src/blueprint-templates/template-folder/folder1/folder2/
     *
     * If destination is in the file properties use that
     *   - [do NOT preserve file's relative path]
     *   - it's up to the user to guarantee the correct path
     * if destination in template config use that
     *   - [preserve file's relative path]
     * if file is part of a template that has more than one file
     *    - ie [wrapInFolder === true]
     *    - or templateConfig.wrapInFolder === true [set by user in the config
     *    1) put the file in %name% folder [preserve file's relative path]
     *    2) otherwise it's a single file so just put it in the current working directory
     */
    getDestinationPath() {
        let destination;
        const startDelimiter = this.fileConfig.delimiter.start;
        const endDelimiter = this.fileConfig.delimiter.end;
        if (this.fileConfig.destination) {
            destination = this.fileConfig.destination.trim();
        }
        else if (this.templateConfig.destination) {
            destination = path_1.join(this.templateConfig.destination, this.rawTemplateFile.relativePath);
        }
        else {
            destination = this.wrapInFolder ? path_1.join(`./${startDelimiter}name${endDelimiter}/`, this.rawTemplateFile.relativePath) : `./`;
        }
        if (!file_system_1.FileSystem.isAbsolutePath(destination)) {
            const trimChars = file_system_1.FileSystem.isRelativePath(destination) ? 2 : 0;
            destination = path_1.join(`${startDelimiter}CWD${endDelimiter}/`, `${destination.substring(trimChars)}`);
        }
        return this._replaceText(destination);
    }
    async validateArgs() {
        const missingArgs = this.fileConfig.args.filter(arg => !this.templateVariables.find(t => t.name === arg.name));
        if (missingArgs.length > 0) {
            if (global_context_1.GlobalContext.isRunByAPI()) {
                handler_1.Handle.apiError(`Template is missing required argument values. Missing args: ${missingArgs.map(a => a.name).join(', ')}`, blu_interface_1.BLU.API.ErrorCode.ArgMissing, { missingArgs });
            }
            else {
                const responseArgs = await handler_1.Handle.asyncResponse(input_prompts_1.InputPrompts.formPrompt(missingArgs, `Following arguments are required for file: ${this.rawTemplateFile.filename}.`));
                this.setArgVariables(responseArgs);
            }
        }
    }
    setArgVariables(inputArgs) {
        /**
         * In case there's a variable collision with variables from the template config, file input arg takes precedence
         * the variable that came from the template config is replaced by the variable from the file config
         */
        inputArgs.forEach(inputArg => {
            const variableIndex = this.templateVariables.findIndex(tv => tv.name === inputArg.name);
            if (variableIndex !== -1) {
                this.templateVariables.splice(variableIndex, 1);
            }
            this.templateVariables.push({ name: inputArg.name, value: inputArg.value });
        });
    }
    _replaceText(textToReplace) {
        return text_transform_1.TextTransform.replaceText(textToReplace, this.templateVariables, this.fileConfig.delimiter);
    }
    printPreview(fileNumber, totalFiles, collectionConfig, templateConfig, verbose = false) {
        const data = this.getPreviewData(collectionConfig, templateConfig, verbose);
        console.log('');
        this.printPreviewHeader(`FILE: ${fileNumber} of ${totalFiles}`);
        this.printPreviewHeader('METADATA', true);
        console.log(print_1.Print.printTable(data, [this.previewSettings.columnOneWidth, this.previewSettings.columnTwoWidth]));
        this.printRepeaters();
        this.printPreviewHeader('Source Template', true);
        console.log('');
        console.log(this.sourceFileContents);
        this.printPreviewHeader('Rendered Template', true);
        console.log('');
        console.log(this.renderedFileContents);
        console.log(chalk_1.default.gray('-'.repeat(this.previewSettings.columnOneWidth + this.previewSettings.columnTwoWidth + 7)));
    }
    getPreviewData(collectionConfig, templateConfig, verbose = false) {
        const configData = [];
        if (verbose) {
            configData.push(['Collection Config', JSON.stringify(collectionConfig, null, 4)], ['Template Config', JSON.stringify(templateConfig, null, 4)], ['File Config', JSON.stringify(this.fileConfig, null, 4)]);
        }
        const data = [];
        data.push(['Source Filename', this.templateFilename], ['Rendered Filename', this.newFilename], ['Source Path', this.templatePath], ['Destination Path', this.destinationPath], ...configData, ['Template Variables', text_transform_1.TextTransform.makeTable(this.templateVariables.map(t => [t.name, t.value]))], ['Variable Formats', this.printFormats()], this.getUsagePreview());
        return data;
    }
    getUsagePreview() {
        const usage = this.templateConfig.usage;
        return ['Usage', Array.isArray(usage) ? usage.join('\n') : usage];
    }
    printPreviewHeader(title = '', subHeader = false) {
        const combinedColWidth = this.previewSettings.columnOneWidth + this.previewSettings.columnTwoWidth + 7;
        print_1.Print.printHeader(title, subHeader, combinedColWidth);
    }
    printFormats() {
        const formats = template_variable_formats_1.variableFormatList.filter(f => f.name !== null);
        return text_transform_1.TextTransform.makeTable(formats.map(f => [f.name || '', f.description || '']));
    }
    printRepeaters() {
        if (this.templateRepeaters.length > 0) {
            this.printPreviewHeader('REPEATERS', true);
            const data = [];
            this.templateRepeaters.forEach(repeater => {
                data.push(['Repeater Name', repeater.name], ['Input Args', text_transform_1.TextTransform.makeTable(repeater.inputArgs.map(iArg => [iArg.name, iArg.description || '']))], ['Template Variables', text_transform_1.TextTransform.makeTable(repeater.templateVariables.map(t => [t.name, t.value]))], ['toString()', repeater.toString()], ['toArg()', repeater.toArg()]);
            });
            console.log(print_1.Print.printTable(data, [20, 100]));
        }
    }
}
exports.BlueprintTemplateFile = BlueprintTemplateFile;
//# sourceMappingURL=template-file.model.js.map