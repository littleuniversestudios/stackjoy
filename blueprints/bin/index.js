#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const globals_1 = require("./context/globals");
const run_process_1 = require("./run-process");
const file_system_1 = require("./lib/file-system");
const cli_log_command_1 = require("./commands/cli/cli.log.command");
const handler_1 = require("./lib/handler");
const command_args_model_1 = require("./models/command-args.model");
const global_context_1 = require("./context/global-context");
const projectRootPath = file_system_1.FileSystem.findProjectRootDir();
const userCommand = process.argv.slice(2);
const commandArgs = new command_args_model_1.CommandArgs(userCommand);
if (projectRootPath) {
    global_context_1.GlobalContext.setPreviewMode(commandArgs.isPreviewMode);
    global_context_1.GlobalContext.setRunSource(commandArgs.isRunByAPI ? 'api' : 'cli');
    globals_1.initGlobals(projectRootPath);
    cli_log_command_1.Log.init();
    run_process_1.RunProcess.start(userCommand);
}
else {
    if (commandArgs.isRunByAPI) {
        handler_1.Handle.apiResponse(null, { bluPath: null, bluDir: globals_1.BLUEPRINTS_DIR_NAME, cwd: globals_1.CURRENT_WORKING_DIR });
        process.exit();
    }
    else {
        const folder = chalk_1.default.cyan(globals_1.BLUEPRINTS_DIR_NAME);
        console.log(chalk_1.default.green(`
        *******************************************************************
         Blueprints was not able to find the root directory of the project
         you are working on. Please add a folder named: ${folder}
         to the root directory of your project and run Blueprints again.
        *******************************************************************
        `));
    }
}
//# sourceMappingURL=index.js.map