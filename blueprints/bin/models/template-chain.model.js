"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateChain = void 0;
const blu_interface_1 = require("../interfaces/blu.interface");
const text_transform_1 = require("../lib/text-transform");
const input_prompts_1 = require("../lib/input-prompts");
const handler_1 = require("../lib/handler");
const template_link_model_1 = require("./template-link.model");
const global_context_1 = require("../context/global-context");
class TemplateChain {
    constructor(collectionName, chainConfig, collectionConfig) {
        this.collectionName = collectionName;
        this.collectionConfig = collectionConfig;
        this.links = [];
        this.templateVariables = [];
        this.chainConfig = Object.assign({}, this.getDefaultConfig(), chainConfig);
        this.name = this.chainConfig.name;
        this.description = this.chainConfig.description;
    }
    hasAlias(alias) {
        return this.chainConfig.alias.includes(alias);
    }
    async getCommands(runContext) {
        var _a;
        this.setConfigFileArgs();
        this.setTemplateVariables(runContext.templateVariables);
        if (this.chainConfig.args && this.chainConfig.args.length > 0) {
            await handler_1.Handle.asyncResponse(this.validateArgs(runContext));
        }
        this.prepareChainLinks();
        const commands = (_a = this.chainConfig.commands) !== null && _a !== void 0 ? _a : [];
        return commands.map(command => this._replaceText(command));
    }
    getContextParameters(runContext) {
        const templateVariables = this.chainConfig.args.map(arg => this.templateVariables.find(t => t.name === arg.name));
        const commandLineVariables = runContext.commandArgs.templateVariables.filter(t => !(`${t.value}` === 'true'));
        const allTemplateVariables = [...templateVariables, ...commandLineVariables];
        const uniqueTemplateVariables = [...new Map(allTemplateVariables.map(item => [item['name'], item])).values()];
        const contextOptions = Object.assign({}, runContext.commandArgs.options);
        uniqueTemplateVariables.forEach(v => delete contextOptions[v.name]);
        return {
            variables: uniqueTemplateVariables,
            options: runContext.commandArgs.commandOptionsString.trim(),
            repeaters: []
        };
    }
    ;
    onSuccess() {
        //todo wire this up
        return [];
    }
    setConfigFileArgs() {
        var _a;
        const configFileArgs = (_a = this.chainConfig.args) !== null && _a !== void 0 ? _a : [];
        this.setArgVariables(configFileArgs.filter(arg => arg.value !== undefined)); // set args with default values as template variables
    }
    async validateArgs(runContext) {
        const missingArgs = this.chainConfig.args.filter(arg => !this.templateVariables.find(t => t.name === arg.name));
        if (missingArgs.length > 0) {
            if (global_context_1.GlobalContext.isRunByAPI()) {
                handler_1.Handle.apiError(`Chain is missing required argument values. Missing args: ${missingArgs.map(a => a.name).join(', ')}`, blu_interface_1.BLU.API.ErrorCode.ArgMissing, { missingArgs });
            }
            else {
                const responseArgs = await handler_1.Handle.asyncResponse(input_prompts_1.InputPrompts.formPrompt(missingArgs));
                responseArgs.forEach(inputArg => {
                    this.setTemplateVariable(inputArg.name, inputArg.value);
                    runContext.storeVariable(inputArg.name, inputArg.value);
                });
            }
        }
    }
    setArgVariables(inputArgs) {
        inputArgs.forEach(inputArg => this.setTemplateVariable(inputArg.name, `${inputArg.value}`));
    }
    setTemplateVariable(name, value) {
        const currentVariable = this.templateVariables.find(v => v.name === name);
        currentVariable ? currentVariable.value = value : this.templateVariables.push({ name, value });
    }
    setTemplateVariables(variables) {
        variables.forEach(v => this.setTemplateVariable(v.name, v.value));
    }
    prepareChainLinks() {
        this.chainConfig.links.forEach(link => {
            const newLink = new template_link_model_1.TemplateLink(link, this.templateVariables, this.collectionConfig.delimiter);
            this.links.push(newLink);
        });
    }
    storeLinks(runContext) {
        let links = [];
        if (runContext.isEnabled('links')) {
            links = this.links;
            this.links.forEach(link => link.storeToDisk());
        }
        return links;
    }
    previewLinks(runContext) {
        let links = [];
        if (runContext.isEnabled('links')) {
            links = this.links;
        }
        return links;
    }
    _replaceText(textToReplace) {
        const delimiter = this.collectionConfig.delimiter || { start: '%', end: '%' };
        return text_transform_1.TextTransform.replaceText(textToReplace, this.templateVariables, delimiter);
    }
    getDefaultConfig() {
        return {
            name: '',
            description: '',
            alias: [],
            commands: [],
            args: [],
            links: []
        };
    }
}
exports.TemplateChain = TemplateChain;
//# sourceMappingURL=template-chain.model.js.map