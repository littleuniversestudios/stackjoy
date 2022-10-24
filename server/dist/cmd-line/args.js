"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgentCommands = exports.parseArgs = void 0;
const process = require("process");
function parseArgs() {
    const processedArgs = [];
    let args = process.argv.slice(2);
    while (args.length > 0) {
        const result = popArg(args);
        processedArgs.push(result.argument);
        args = result.args;
    }
    const parsedArgs = {};
    processedArgs.forEach(arg => parsedArgs[arg.name] = arg.value);
    return parsedArgs;
}
exports.parseArgs = parseArgs;
function popArg(args) {
    const argName = args[0];
    let argument;
    let nextArgs;
    if (argName) {
        switch (argName) {
            case "port":
                argument = { name: argName, value: [args[1]] };
                nextArgs = args.slice(2);
                break;
            case "i":
            case "install":
                argument = { name: "install", value: [args[1]] };
                nextArgs = args.slice(2);
                break;
            default:
                argument = { name: argName, value: [] };
                nextArgs = args.slice(1);
                break;
        }
    }
    else {
        nextArgs = [];
    }
    return { args: nextArgs, argument };
}
function getAgentCommands(args) {
    const agentCommandNames = ['install'];
    const agentCommands = {};
    Object.keys(args).forEach(commandName => {
        if (agentCommandNames.includes(commandName)) {
            agentCommands[commandName] = args[commandName];
        }
    });
    return agentCommands;
}
exports.getAgentCommands = getAgentCommands;
//# sourceMappingURL=args.js.map