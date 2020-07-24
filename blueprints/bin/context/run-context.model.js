"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunContext = void 0;
const command_args_model_1 = require("../models/command-args.model");
const globals_1 = require("./globals");
class RunContext {
    constructor(parentContext, command) {
        this.parentContext = parentContext;
        this.childContexts = [];
        this.rawCommand = '';
        this.rawCommand = Array.isArray(command) ? command.join(' ') : command;
        this.commandMessage = `Executing Command: ${globals_1.BLUEPRINTS_EXECUTABLE_NAME} ${this.rawCommand}`;
        this.commandArgs = new command_args_model_1.CommandArgs(command);
    }
    getOption(name, recursive = true) {
        let option = this.commandArgs.getOption(name);
        if (recursive && option === undefined && !!this.parentContext) {
            option = this.parentContext.getOption(name);
        }
        return option;
    }
    get templateVariables() {
        const variableMap = {};
        const allVariables = [].concat(this.commandArgs.templateVariables, this.parentContext ? this.parentContext.templateVariables : []);
        const mappedVariables = [];
        allVariables.reverse();
        allVariables.forEach(v => variableMap[v.name] = v.value);
        for (let name in variableMap) {
            mappedVariables.push({ name, value: variableMap[name] });
        }
        return mappedVariables;
    }
    getRepeaterValues(repeaterName) {
        const repeaterInput = this.getTemplateVariable(repeaterName);
        return repeaterInput ? `${repeaterInput.value}`.split('|').map(value => value.split(',')) : [];
    }
    ;
    getTemplateVariable(name, recursive = true) {
        return recursive ? this.templateVariables.find(v => v.name === name) : this.commandArgs.getTemplateVariable(name);
    }
    getTemplateVariableValue(name, recursive = true) {
        const templateVariable = recursive ? this.templateVariables.find(v => v.name === name) : this.commandArgs.getTemplateVariable(name);
        return templateVariable ? templateVariable.value : undefined;
    }
    storeVariable(name, value) {
        this.commandArgs.storeVariable(name, value);
    }
    storeOption(name, value) {
        this.commandArgs.storeOption(name, value);
    }
    get forceOverwrite() {
        return this.getOption('f') === true || this.getOption('force') === true;
    }
    isEnabled(option) {
        const capitalizedOption = option.replace(/^\w/, c => c.toUpperCase());
        return this.getOption(option) === true || !(this.getOption(`no${capitalizedOption}`) === true || this.getOption(option) === false);
    }
    get conflictFiles() {
        const conflictFiles = this.itemContext.conflictFiles;
        this.childContexts.forEach(childCtx => conflictFiles.push(...childCtx.conflictFiles));
        return conflictFiles;
    }
    storeFiles() {
        const files = this.itemContext.storeFiles();
        this.childContexts.forEach(childCtx => files.push(...childCtx.storeFiles()));
        return files;
    }
    previewFiles() {
        const files = this.itemContext.previewFiles();
        this.childContexts.forEach(childCtx => files.push(childCtx.previewFiles()));
        return files;
    }
    onSuccess() {
        const onSuccess = this.itemContext.onSuccess();
        this.childContexts.forEach(childCtx => onSuccess.push(...childCtx.onSuccess()));
        return onSuccess;
    }
    storeLinks() {
        const links = this.itemContext.storeLinks();
        this.childContexts.forEach(childCtx => links.push(...childCtx.storeLinks()));
        return links;
    }
    previewLinks() {
        const links = this.itemContext.previewLinks();
        this.childContexts.forEach(childCtx => links.push(...childCtx.previewLinks()));
        return links;
    }
    get executedCommand() {
        return this.itemContext.executedCommand;
    }
    forAPI() {
        const templates = [...this.itemContext.forAPI()];
        this.childContexts.forEach(childCtx => templates.push(...childCtx.forAPI()));
        return templates;
    }
}
exports.RunContext = RunContext;
//# sourceMappingURL=run-context.model.js.map