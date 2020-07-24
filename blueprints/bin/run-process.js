"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunProcess = void 0;
const chalk_1 = require("chalk");
const cli_commands_1 = require("./commands/cli.commands");
const global_context_1 = require("./context/global-context");
const handler_1 = require("./lib/handler");
const blu_interface_1 = require("./interfaces/blu.interface");
const run_context_model_1 = require("./context/run-context.model");
const enquirer_1 = require("enquirer");
const cli_log_command_1 = require("./commands/cli/cli.log.command");
class RunProcess {
}
exports.RunProcess = RunProcess;
RunProcess.start = (command) => startProcess(command);
/**
 * Run the next command in the queue or finishes the
 * process once all the commands have been run.
 */
const startProcess = (command) => {
    global_context_1.GlobalContext.isRunByAPI() ? null : console.log('');
    const runContext = new run_context_model_1.RunContext(null, command);
    handler_1.Handle.asyncResponse(cli_commands_1.runCommand(runContext)).then(n => {
        global_context_1.GlobalContext.storeRunContext(runContext);
        const globalCtx = global_context_1.GlobalContext.get();
        switch (runContext.CLICommand.name) {
            case 'Generate':
            case 'Preview':
                finishProcess(globalCtx).then(() => null);
                break;
            case 'API':
                handler_1.Handle.apiResponse(null, globalCtx.apiResponse);
                break;
        }
    });
};
async function finishProcess(globalCtx) {
    if (global_context_1.GlobalContext.isPreviewMode()) {
        handlePreviewMode(globalCtx);
    }
    else {
        const conflictFiles = globalCtx.runContext.conflictFiles;
        if (conflictFiles.length > 0) {
            await resolveConflict(globalCtx, conflictFiles);
        }
        else {
            handleGenerateMode(globalCtx);
        }
    }
}
function handleGenerateMode(globalCtx) {
    globalCtx.files = globalCtx.runContext.storeFiles();
    globalCtx.links = globalCtx.runContext.storeLinks();
    globalCtx.onSuccess = globalCtx.runContext.onSuccess();
    cli_log_command_1.Log.storeCommands([globalCtx.runContext.executedCommand]);
    global_context_1.GlobalContext.isRunByAPI() ? finishAPIProcess(globalCtx) : finishCLIProcess(globalCtx);
}
function handlePreviewMode(globalCtx) {
    globalCtx.files = globalCtx.runContext.previewFiles();
    globalCtx.links = globalCtx.runContext.previewLinks();
    globalCtx.onSuccess = globalCtx.runContext.onSuccess();
    cli_log_command_1.Log.storeCommands([globalCtx.runContext.executedCommand]);
    global_context_1.GlobalContext.isRunByAPI() ? finishAPIProcess(globalCtx) : finishCLIProcess(globalCtx);
}
async function resolveConflict(globalCtx, conflictFiles) {
    if (global_context_1.GlobalContext.isRunByAPI()) {
        handler_1.Handle.apiError(`Files in destination path already exist. Run with -f to overwrite them.`, blu_interface_1.BLU.API.ErrorCode.FileExists, conflictFiles);
    }
    else {
        conflictFiles.forEach(filePath => console.log(chalk_1.default.red(`File exists: ${filePath}`)));
        const overwrite = await handler_1.Handle.asyncResponse(overwriteExistingFiles());
        if (overwrite) {
            globalCtx.runContext.storeOption('f', true);
            await finishProcess(globalCtx);
        }
        else {
            console.log(chalk_1.default.red(`Template creation aborted`));
        }
    }
}
async function overwriteExistingFiles() {
    const question = {
        type: 'confirm',
        name: 'confirm',
        message: 'Overwrite files?',
    };
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt(question));
    return response.confirm;
}
/**
 * Send the global context back to the source. It stores all
 * the information about the command that was executed
 */
function finishAPIProcess(globalCtx) {
    const apiContext = Object.assign({}, globalCtx);
    const templates = apiContext.runContext.forAPI();
    delete apiContext.runContext;
    apiContext['templates'] = templates;
    handler_1.Handle.apiResponse(null, apiContext);
}
/**
 * Print all necessary info to console after the command has executed/.
 */
function finishCLIProcess(globalCtx) {
    //show created files
    if (!global_context_1.GlobalContext.isPreviewMode()) {
        globalCtx.files.forEach(file => console.log(chalk_1.default.green(`Created: file://${file}`)));
    }
    // show onSuccess
    console.log('');
    globalCtx.onSuccess.forEach(onSuccess => console.log(chalk_1.default.green(onSuccess)));
}
//# sourceMappingURL=run-process.js.map