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
/**
 * Before the server starts check to see if there are any stacks to be installed either from the
 * cmd line or from the .stackjoy.json file within the codebase
 * @param cmdLineArgs
 */
async function beforeServerStart(cmdLineArgs) {
    // 1) get command line arguments for installing
    const cmdLineStacks = getCMDLineStacks(cmdLineArgs);
    // 2) check the .stackjoy.json file
    const fileStacks = getStackjoyFileStacks();
    // const fileStacks: Stack.FromFile[] = [];
    // 3) combine stacks to install from command line and .stackjoy.json file
    let uniqueStacks = [...new Map([...cmdLineStacks, ...fileStacks].map((item) => [item["name"], item])).values()];
    // 3) install stacks
    const postInstallStacks = await installStacks(uniqueStacks);
    // 4) Finish install
    if (postInstallStacks.length > 0) {
        // this only stores stacks that have a seed with them, not all the stacks that have been installed
        // this is because seeds may have postInstall instructions in them and we show this to the user on the client
        // alternatively we may want to display all the installed stacks to the user regardless if they have a seed
        // or not for posterity (up for debate);
        (0, globals_1.setPostInstallStacks)(postInstallStacks);
    }
}
exports.beforeServerStart = beforeServerStart;
/**
 * Any stacks that were passed on the cmd line will be picked up here (i.e. sj i ngx-generators)
 * @param cmdLineArgs
 */
function getCMDLineStacks(cmdLineArgs) {
    var _a;
    const agentCommands = (0, args_1.getAgentCommands)(cmdLineArgs);
    // this is for testing
    // agentCommands['install'] = ['@stackjoy/angular-starter']
    const stacksToInstall = (_a = agentCommands['install']) !== null && _a !== void 0 ? _a : [];
    return stacksToInstall.map(stack => ({ name: stack, origin: 'cmd' }));
}
/**
 * Any stacks that were found in the .stackjoy.json file will be picked up here
 */
function getStackjoyFileStacks() {
    var _a, _b;
    const path = (0, path_1.join)(globals_1.APP_SERVICE.INITIAL_CODEBASE_PATH, ".stackjoy.json");
    const jsonFile = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(path)) !== null && _a !== void 0 ? _a : {};
    const stacksToInstall = (_b = jsonFile.install) !== null && _b !== void 0 ? _b : [];
    const installStacks = [];
    stacksToInstall.forEach(stack => {
        if (typeof stack === "string") {
            installStacks.push({ name: stack, origin: 'file' });
        }
        else if (typeof stack === "object") {
            installStacks.push({ name: stack === null || stack === void 0 ? void 0 : stack.name, installStarterCode: stack === null || stack === void 0 ? void 0 : stack.installStarterCode, origin: 'file' });
        }
    });
    return installStacks;
}
/**
 * Install All Stacks that were picked up in the cmdline or .stackjoy.json file
 * @param stacksToInstall
 */
async function installStacks(stacksToInstall) {
    var _a, _b;
    const postInstallStacks = [];
    // get all stacks that were asked from either from the file or cmdline
    const stackList = await getStackList(stacksToInstall.map(s => s.name));
    // if a stack is asked for but not found on the server display it to the user
    stacksToInstall.forEach(stack => {
        const decomposedStack = decomposeStackName(stack.name);
        if (!stackList.find(s => (s.name === decomposedStack.name))) {
            const origin = stack.origin === 'file' ? `[found in .stackjoy.json file]` : ``;
            ora().fail(chalk.red(`Could not find and install stack: '${stack.name}' ${origin}`));
        }
    });
    const tree = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().tree();
    // install the seed(if present) and the generators for each stack
    for (let stack of stackList) {
        if (hasStackInstalled(tree, stack.id)) {
            ora().succeed(chalk.green(`'${stack.name}' already installed`));
        }
        else {
            console.log(chalk.green('>'), `Installing '${stack.name}' ...`);
            // get the initial stack to install (the one that came from file or cmd) so that
            // we can pull any other metadata associated with it
            const stackToInstall = findStackToInstall(stacksToInstall, stack.name, stack.prefix);
            // check the instructions from the .stackjoy.json file whether to install starter code or not
            // if no instructions are found default to true and install it.
            if ((_a = stackToInstall === null || stackToInstall === void 0 ? void 0 : stackToInstall.installStarterCode) !== null && _a !== void 0 ? _a : true) {
                if ((_b = stack.seed) === null || _b === void 0 ? void 0 : _b.url) {
                    const seedInstalled = await installSeed(stack.seed);
                    if (seedInstalled) {
                        postInstallStacks.push(stack);
                    }
                }
            }
            // install the generators from the stack:
            await installGenerators(stack);
        }
    }
    return postInstallStacks;
}
/**
 * Install the stackjoy stack (generators) here
 * @param stack
 */
async function installGenerators(stack) {
    const version = stack.version;
    const metadata = stackService.getNewStackMetadata({ name: stack.name, stackId: stack.id, remoteId: stack.id, version }, 'remote');
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
/**
 * Install the seed (starter code from a public repo) here if there is one
 * @param seed
 */
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
            spinner === null || spinner === void 0 ? void 0 : spinner.succeed(chalk.green("Installed starter code"));
            return true;
        }
        else {
            spinner === null || spinner === void 0 ? void 0 : spinner.stop();
            console.log(chalk.yellow(`Could not copy files from ${seed.url}`));
            return false;
        }
    }
}
function findStackToInstall(stacksToInstall, name, prefix) {
    const fullName = (prefix ? `@${prefix}/` : ``) + name;
    return stacksToInstall.find(s => s.name === fullName);
}
/**
 * Get the stacks metadata (id,version,seed) from the Server just from the stack's name
 * @param stackNames
 */
async function getStackList(stackNames) {
    let uniqueStacks = [...new Set(stackNames)];
    const queries = uniqueStacks.map(stackName => decomposeStackName(stackName));
    const result = await globals_1.SJ_SERVER.findIdsByName(queries);
    return result.data.envs;
}
/**
 * Break down the stack name from the cmdline or .stackjoy.json file into a 'prefix' and 'name'
 * prefix is the organization name
 * @param stackName
 */
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
/**
 * Check if the current workspace has a stack installed already.
 * @param tree
 * @param stackId
 * @param hasStack
 */
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
//# sourceMappingURL=start.js.map