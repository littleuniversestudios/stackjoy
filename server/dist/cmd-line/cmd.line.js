"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCMDLineArgs = void 0;
const args_1 = require("./args");
const globals_1 = require("../globals");
const stack_service_1 = require("../api/app/stack/stack.service");
const chalk = require("chalk");
const stackService = new stack_service_1.StackService();
async function handleCMDLineArgs(cmdLineArgs) {
    const agentCommands = args_1.getAgentCommands(cmdLineArgs);
    if (agentCommands['install']) {
        await installStacks(agentCommands['install']);
    }
}
exports.handleCMDLineArgs = handleCMDLineArgs;
async function installStacks(stacks) {
    const stackList = await getStackList(stacks);
    stacks.forEach(stack => {
        if (!stackList.find(s => s.name === stack)) {
            console.log('... installing ', stack, chalk.red('- not found'));
        }
    });
    const tree = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().tree();
    for (const stack of stackList) {
        if (hasStackInstalled(tree, stack.id)) {
            console.log('... installed: ', stack.name, chalk.yellow(' - generators already present from previous install'));
        }
        else {
            const version = stack.version; // stack.version
            const metadata = stackService.getNewStackMetadata({ name: stack.name, stackId: stack.id, remoteId: stack.id, version }, 'remote');
            console.log('... installing ', stack.name);
            const resp = await stackService.installRemoteStack(stack.id, version, metadata);
            resp.error ? console.log('... error installing ', stack.name) : console.log(chalk.green(`... installed   ${stack.name}`));
        }
    }
}
async function getStackList(stackNames) {
    let uniqueStacks = [...new Set(stackNames)];
    const queries = uniqueStacks.map(s => {
        const splitStack = s.split('/');
        return splitStack.length > 1 ? { name: splitStack[1], prefix: splitStack[0] } : { name: s };
    });
    const result = await globals_1.SJ_SERVER.findIdsByName(queries);
    return result.data.envs;
}
function hasStackInstalled(tree, stackId, hasStack = false) {
    if (!hasStack) {
        tree.stacks.forEach(stack => {
            var _a;
            hasStack = ((_a = stack.item.metadata.remote) === null || _a === void 0 ? void 0 : _a.id) === stackId;
            stack.stacks.forEach(childStack => hasStack = this.hasStackInstalled(childStack, stackId, hasStack));
        });
    }
    return hasStack;
}
//# sourceMappingURL=cmd.line.js.map