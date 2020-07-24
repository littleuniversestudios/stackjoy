"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCommand = exports.runCommand = exports.commandList = void 0;
const chalk_1 = require("chalk");
const enquirer_1 = require("enquirer");
const global_context_1 = require("../context/global-context");
const handler_1 = require("../lib/handler");
const api_commands_1 = require("./api.commands");
const cli_log_command_1 = require("./cli/cli.log.command");
const blu_interface_1 = require("../interfaces/blu.interface");
const cli_command_list_1 = require("./cli.command.list");
const cli_generate_command_1 = require("./cli/cli.generate.command");
const run_context_model_1 = require("../context/run-context.model");
exports.commandList = cli_command_list_1.CLICommandList;
async function runCommand(runContext) {
    var _a;
    const commandName = (_a = runContext.commandArgs.commandName) !== null && _a !== void 0 ? _a : '';
    let CLICommand = exports.commandList.find(cmd => cmd.alias.includes(commandName.toLowerCase()));
    if (!CLICommand && commandName !== '') {
        console.log(chalk_1.default.green(`Command '${commandName}' does not exist.`));
    }
    if (!CLICommand) {
        if (global_context_1.GlobalContext.isRunByAPI()) {
            handler_1.Handle.apiError(`No API command provided`, blu_interface_1.BLU.API.ErrorCode.CommandMissing, { command: runContext.commandMessage });
        }
        else {
            const response = await handler_1.Handle.asyncResponse(this.selectCommand());
            CLICommand = response.command;
        }
    }
    switch (CLICommand.name) {
        case 'API':
            runContext.CLICommand = CLICommand;
            global_context_1.GlobalContext.setRunSource('api');
            const apiResponse = await handler_1.Handle.asyncResponse(api_commands_1.API.run(runContext));
            global_context_1.GlobalContext.storeApiResponse(apiResponse);
            break;
        case 'Preview':
            global_context_1.GlobalContext.setPreviewMode(true);
        case 'Generate':
            runContext.CLICommand = CLICommand;
            printCommandMessage(runContext.commandMessage);
            await handler_1.Handle.asyncResponse(cli_generate_command_1.Generate.run(runContext));
            await executeSubCommands(runContext);
            break;
        case 'View Log':
            runContext.CLICommand = CLICommand;
            printCommandMessage(runContext.commandMessage);
            cli_log_command_1.Log.run(runContext.commandArgs.numLogEntries);
            break;
    }
}
exports.runCommand = runCommand;
/**
 * If there are any sub(child) commands (like a chain) run those and attach the
 * child runContext to its parenty
 * @param runContext
 */
async function executeSubCommands(runContext) {
    const itemContext = runContext.itemContext;
    for (let subCommandIndex in itemContext.subCommands) {
        const childRunContext = new run_context_model_1.RunContext(runContext, itemContext.subCommands[subCommandIndex]);
        runContext.childContexts.push(childRunContext);
        await runCommand(childRunContext);
    }
}
/**
 * If no command has been selected allow user to select a command
 */
async function selectCommand() {
    const question = {
        type: 'autocomplete',
        name: 'command',
        message: 'Which command to run?',
        limit: 5,
        suggest(input, choices) {
            return choices.filter(choice => choice.message.toLowerCase().startsWith(input.toLowerCase()));
        },
        choices: exports.commandList.filter(c => c.display !== false).map(c => ({ name: c.name, value: c })),
    };
    return enquirer_1.prompt(question);
}
exports.selectCommand = selectCommand;
/**
 * Print the command the CLI is running
 * @param commandMessage
 */
function printCommandMessage(commandMessage) {
    if (!global_context_1.GlobalContext.isRunByAPI()) {
        console.log(chalk_1.default.green(commandMessage));
    }
}
//# sourceMappingURL=cli.commands.js.map