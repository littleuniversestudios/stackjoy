"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beforeServerStart = void 0;
const args_1 = require("./args");
const globals_1 = require("../globals");
const stack_service_1 = require("../api/app/stack/stack.service");
const chalk = require("chalk");
const blu_utils_model_1 = require("../models/blueprints/engine/models/blu.utils.model");
const path_1 = require("path");
const enquirer_1 = require("enquirer");
const ora = require('ora');
const stackService = new stack_service_1.StackService();
async function beforeServerStart(cmdLineArgs) {
    // 1) get command line arguments for installing
    const cmdLineStacks = getCMDLineStacks(cmdLineArgs);
    // 2) check the .stackjoy.json file
    const fileStacks = getStackjoyFileStacks();
    // const fileStacks: Stack.FromFile[] = [];
    // 3) combine stacks to install from command line and .stackjoy.json file
    let uniqueStacks = [...new Map([...cmdLineStacks, ...fileStacks].map((item) => [item["name"], item])).values()];
    // 3) install stacks
    await installStacks(uniqueStacks);
}
exports.beforeServerStart = beforeServerStart;
function getCMDLineStacks(cmdLineArgs) {
    var _a;
    const agentCommands = (0, args_1.getAgentCommands)(cmdLineArgs);
    // todo: remove - this is for testing
    // agentCommands['install'] = ['ng13-material']
    agentCommands['install'] = ['aaa', '@stackjoy/angular-starter'];
    // agentCommands['install'] = ['test-file'];
    // agentCommands['install'] = ['@stackjoy/test-file-namespace',];
    const stacksToInstall = (_a = agentCommands['install']) !== null && _a !== void 0 ? _a : [];
    return stacksToInstall.map(stack => ({ name: stack }));
}
function getStackjoyFileStacks() {
    var _a, _b;
    const path = (0, path_1.join)(globals_1.APP_SERVICE.INITIAL_CODEBASE_PATH, ".stackjoy.json");
    const jsonFile = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(path)) !== null && _a !== void 0 ? _a : {};
    const stacksToInstall = (_b = jsonFile.install) !== null && _b !== void 0 ? _b : [];
    const installStacks = [];
    stacksToInstall.forEach(stack => {
        if (typeof stack === "string") {
            installStacks.push({ name: stack });
        }
        else if (typeof stack === "object") {
            installStacks.push({ name: stack === null || stack === void 0 ? void 0 : stack.name, installStarterCode: stack === null || stack === void 0 ? void 0 : stack.installStarterCode });
        }
    });
    return installStacks;
}
async function installStacks(stacks) {
    var _a;
    const stackList = await getStackList(stacks.map(s => s.name));
    stacks.forEach(stack => {
        const decomposedStack = decomposeStackName(stack.name);
        if (!stackList.find(s => (s.name === decomposedStack.name))) {
            ora().fail(chalk.red(`Could not find stack '${stack.name}'`));
        }
    });
    const tree = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().tree();
    for (let stack of stackList) {
        if (hasStackInstalled(tree, stack.id)) {
            ora().warn(chalk.yellow(`Installing '${stack.name}' - generators already present from previous install`));
        }
        else {
            console.log(chalk.green('>'), `Installing '${stack.name}' ...`);
            if ((_a = stack.seed) === null || _a === void 0 ? void 0 : _a.url) {
                await installSeed(stack.seed);
            }
            const version = stack.version;
            const metadata = stackService.getNewStackMetadata({ name: stack.name, stackId: stack.id, remoteId: stack.id, version }, 'remote');
            // install the generators from the stack:
            const stackSpinner = ora();
            stackSpinner.start(`Installing generators from '${stack.name}'`);
            const resp = await stackService.installRemoteStack(stack.id, version, metadata);
            if (resp.error) {
                console.log('', resp.error);
                switch (resp.error.code) {
                    case "repo-not-found":
                        stackSpinner.fail(chalk.red(`Could not find '${stack.name}'`));
                        break;
                    default:
                        stackSpinner.fail(chalk.red(`Could not install '${stack.name}'`));
                        break;
                }
            }
            else {
                stackSpinner.succeed(chalk.green(`Installed generators from '${stack.name}'`));
            }
        }
    }
}
async function installSeed(seed) {
    const response = await (0, enquirer_1.prompt)({
        type: 'confirm',
        name: 'installSeed',
        message: `This stack comes with starter code. Place starter code from: ${seed.url} into this directory?`
    });
    if (response.installSeed) {
        const spinner = ora();
        spinner.start('Installing Starter Code');
        let installResult = await stackService.installSeedIntoCurrentEnvironment({ url: seed.url, overwrite: false });
        if (installResult.error) {
            spinner.warn();
            if (installResult.error.code === 'overwrite-error') {
                const overwriteResponse = await (0, enquirer_1.prompt)({
                    type: 'confirm',
                    name: 'overwriteFiles',
                    message: `Some files already exist in this directory and will be overwritten. Overwrite files and continue?`
                });
                if (overwriteResponse.overwriteFiles) {
                    spinner.start('Installing Starter Code');
                    installResult = await stackService.installSeedIntoCurrentEnvironment({ url: seed.url, overwrite: true });
                }
            }
        }
        if (!installResult.error) {
            spinner === null || spinner === void 0 ? void 0 : spinner.succeed("Installed Starter Code");
        }
        else {
            spinner === null || spinner === void 0 ? void 0 : spinner.stop();
            console.log(chalk.yellow(`Could not copy files from ${seed.url}`));
        }
    }
}
async function getStackList(stackNames) {
    let uniqueStacks = [...new Set(stackNames)];
    const queries = uniqueStacks.map(stackName => decomposeStackName(stackName));
    const result = await globals_1.SJ_SERVER.findIdsByName(queries);
    return result.data.envs;
}
function decomposeStackName(stackName) {
    const splitStack = stackName.split('/');
    if (splitStack.length > 1) {
        const name = splitStack[1];
        let prefix = splitStack[0];
        if (prefix.charAt(0) === '@') {
            prefix = splitStack[0].substring(1);
        }
        return { name, prefix };
    }
    else {
        return { name: stackName };
    }
}
function hasStackInstalled(tree, stackId, hasStack = false) {
    if (!hasStack) {
        tree.stacks.forEach(stack => {
            var _a;
            hasStack = hasStack || ((_a = stack.item.metadata.remote) === null || _a === void 0 ? void 0 : _a.id) === stackId;
            if (!hasStack) {
                stack.stacks.forEach(childStack => hasStack = this.hasStackInstalled(childStack, stackId, hasStack));
            }
        });
    }
    return hasStack;
}
//# sourceMappingURL=cmd.line.js.map