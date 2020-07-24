"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateContext = void 0;
const globals_1 = require("./globals");
const global_context_1 = require("./global-context");
const template_repeater_model_1 = require("../models/template-repeater.model");
class TemplateContext {
    constructor() {
        this.subCommands = [];
    }
    get sourceTemplateName() {
        return `${this.template.collectionName}.${this.template.templateName}`;
    }
    get generatedCommand() {
        return `${this.command.alias[0]} '${this.sourceTemplateName}' ${this.renderedTemplateName} ${this.templateCommandArgs}`;
    }
    get templateCommandArgs() {
        const commandArgs = [];
        const contextParams = this.contextParameters;
        commandArgs.push(contextParams.options);
        commandArgs.push(contextParams.variables.map(t => `--${t.name}=${t.value}`).join(' ').trim());
        commandArgs.push(contextParams.repeaters.map(r => template_repeater_model_1.TemplateRepeater.toArg(r)).join(' ').trim());
        return commandArgs.join(' ');
    }
    get renderedTemplateName() {
        return this.newTemplateName;
    }
    get contextParameters() {
        return this.template.getContextParameters();
    }
    get executedCommand() {
        return {
            command: `${this.command.alias[0]} '${this.sourceTemplateName}' ${this.renderedTemplateName}`,
            commandArgs: this.templateCommandArgs,
            runSource: global_context_1.GlobalContext.getRunSource(),
            parameters: this.contextParameters,
            workingDir: {
                relative: globals_1.RELATIVE_WORKING_DIR,
                absolute: globals_1.CURRENT_WORKING_DIR,
            }
        };
    }
    get conflictFiles() {
        return this.template.conflictFiles;
    }
    storeFiles() {
        return this.template.storeTemplate();
    }
    previewFiles() {
        return this.template.previewTemplate();
    }
    onSuccess() {
        return this.template.onSuccess();
    }
    storeLinks() {
        return this.template.storeLinks();
    }
    previewLinks() {
        return this.template.previewLinks();
    }
    forAPI() {
        /**
         * Since runContext is injected into (nearly) everything [not my best work] circular references occur
         * when trying to stringify the global context to send back thru the API. This deletes the run context
         * from the actual template model stopping that error from occurring.
         * TODO: there may be a case when the run context is actually needed as it stores all of state when this
         * template was generated so maybe it is best to either decouple it or extract and send the data from it
         * (things like template variables...) back thru the API in a way that does not create circular references
         */
        delete this.template.runContext;
        return [Object.assign({}, this.template)];
    }
}
exports.TemplateContext = TemplateContext;
//# sourceMappingURL=template-context.js.map