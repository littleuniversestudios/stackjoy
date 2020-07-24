"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainContext = void 0;
const globals_1 = require("./globals");
const global_context_1 = require("./global-context");
const template_repeater_model_1 = require("../models/template-repeater.model");
class ChainContext {
    constructor(runContext) {
        this.runContext = runContext;
        this.subCommands = [];
    }
    get chainId() {
        return `chain:${this.chain.collectionName}.${this.chain.name}`;
    }
    get commandArgs() {
        const commandArgs = [];
        const contextParams = this.contextParameters;
        commandArgs.push(contextParams.options);
        commandArgs.push(contextParams.variables.map(t => `--${t.name}=${t.value}`).join(' ').trim());
        commandArgs.push(contextParams.repeaters.map(r => template_repeater_model_1.TemplateRepeater.toArg(r)).join(' ').trim());
        return commandArgs.join(' ');
    }
    get contextParameters() {
        return this.chain.getContextParameters(this.runContext);
    }
    get chainCommand() {
        return `${this.command.alias[0]} ${this.chainId} ${this.commandArgs}`;
    }
    get executedCommand() {
        return {
            command: `${this.command.alias[0]} ${this.chainId}`,
            commandArgs: this.commandArgs,
            runSource: global_context_1.GlobalContext.getRunSource(),
            parameters: this.contextParameters,
            workingDir: {
                relative: globals_1.RELATIVE_WORKING_DIR,
                absolute: globals_1.CURRENT_WORKING_DIR,
            }
        };
    }
    get conflictFiles() {
        return [];
    }
    storeFiles() {
        // no files to store for a chain
        return [];
    }
    previewFiles() {
        // no files to preview for a chain
        return [];
    }
    onSuccess() {
        return this.chain.onSuccess();
    }
    storeLinks() {
        return this.chain.storeLinks(this.runContext);
    }
    previewLinks() {
        return this.chain.previewLinks(this.runContext);
    }
    forAPI() {
        return [];
    }
}
exports.ChainContext = ChainContext;
//# sourceMappingURL=chain-context.js.map