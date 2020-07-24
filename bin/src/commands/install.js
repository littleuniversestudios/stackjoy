"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installItems = void 0;
const http_1 = require("../lib/http");
const utils_1 = require("../lib/utils");
const ora = require("ora");
const child_process_1 = require("child_process");
const handler_1 = require("../lib/handler");
const enquirer_1 = require("enquirer");
const file_system_1 = require("../lib/file-system");
const path_1 = require("path");
const globals_1 = require("../core/globals");
const commands_1 = require("./commands");
const seedDestinations = [];
async function installItems(items) {
    const stackjoyItems = [];
    await utils_1.Utils.asyncForEach(items, async (item) => stackjoyItems.push(...await getItem(item)));
    await utils_1.Utils.asyncForEach(stackjoyItems, async (stackjoyItem) => await downloadItem(stackjoyItem));
    await utils_1.Utils.asyncForEach(stackjoyItems, async (stackjoyItem) => await installItem(stackjoyItem));
    await moveItemToInstallDirs(stackjoyItems);
    await deleteInitialBluFolder();
    setStartURL(stackjoyItems);
    console.log('DONE', stackjoyItems);
}
exports.installItems = installItems;
async function getItem(item) {
    const stackjoyItems = await http_1.HTTP.get(`/api/stackjoy/project`, { params: { name: item } });
    if (stackjoyItems.error) {
        console.warn('Error getting item', stackjoyItems.error);
        return [];
    }
    else {
        // todo: if more than one item matches prompt the user which one
        return stackjoyItems.data;
    }
}
async function downloadItem(stackjoyItem, overwrite = true) {
    const spinner = ora({ text: `Downloading ${stackjoyItem.name}`, color: 'green' }).start();
    const itemExists = await checkIfItemExists(stackjoyItem);
    if (itemExists) {
        spinner.succeed(`${stackjoyItem.isSeed ? 'Seed' : 'Collection'} ${stackjoyItem.name}(v.${stackjoyItem.version}) already exists in workspace.`);
        stackjoyItem.downloaded = true;
    }
    else {
        const result = await http_1.HTTP.get(`/api/stackjoy/project/${stackjoyItem.id}/download`, { params: { name: stackjoyItem.name, version: stackjoyItem.version, isSeed: stackjoyItem.isSeed, overwrite } });
        if (result.error) {
            // todo: maybe project exists
            /**
             * if an item with the same name exists, that means that the item that is being downloaded is a different version
             * or the local item is un-versioned meaning it's not on stackjoy. Present the user with the correct message:
             * Local item 'item-name' (v.x | unversioned) already exists:
             * o Overwrite local item
             * o Re-name 'item-name' that is about to be installed
             * o Cancel 'item-name' installation
             */
            // todo: maybe something went wrong
            /**
             * Few things can go 'wrong':
             * 1) item does not exist - Fail it and notify the user, then go to the next one
             * 2) It's a private item and the user has to log in - prompt the user with a link to stackjoy.com
             *    in the same way that firebase cli tools do and hope to god that works, if it works download again
             * 3) user is logged in but does not have the rights to the item - nothing to do here except tell the
             *    user they dont have the correct rights and have user ask the author/owner of the item to share it with them
             */
            spinner.fail();
        }
        else {
            spinner.succeed();
            stackjoyItem.downloaded = true;
        }
    }
}
async function checkIfItemExists(stackjoyItem) {
    const bucket = stackjoyItem.isSeed ? 'seed' : 'collection';
    const result = await http_1.HTTP.get(`/api/blu/${bucket}/${stackjoyItem.name}`);
    if (result.data) {
        const config = stackjoyItem.isSeed ? result.data.templateConfig : result.data.collectionConfig; // seed is a template, collection is a collection of templates so 2 different configs
        if (config && config.stackjoy) {
            return config.stackjoy.id === stackjoyItem.id && config.stackjoy.version === stackjoyItem.version;
        }
    }
    return false;
}
async function installItem(stackjoyItem, overwrite = false) {
    if (stackjoyItem.isSeed && stackjoyItem.downloaded) {
        console.log(`..Installing ${stackjoyItem.name} (v.${stackjoyItem.version})`);
        const newName = await getNewProjectName(stackjoyItem.name);
        const destination = await getNewProjectDestination(newName);
        child_process_1.execSync(`blu g seeds.${stackjoyItem.name} ${newName} --destination="${destination}"`, { stdio: 'inherit' });
        const seedDestination = file_system_1.FileSystem.isAbsolutePath(destination) ? destination : path_1.join(globals_1.Globals.bluMetadata.cwd, destination);
        seedDestinations.push(seedDestination);
    }
}
async function moveItemToInstallDirs(stackjoyItems) {
    if (seedDestinations.length > 0) {
        console.log(`..Copying installed items`);
        await utils_1.Utils.asyncForEach(stackjoyItems, async (stackjoyItem) => {
            const parentDir = stackjoyItem.isSeed ? 'seeds' : '';
            const src = path_1.join(globals_1.Globals.bluMetadata.bluPath, parentDir, stackjoyItem.name);
            seedDestinations.forEach(seedDestination => {
                const destination = path_1.join(seedDestination, globals_1.Globals.bluMetadata.bluDir, parentDir, stackjoyItem.name);
                if (src !== destination) {
                    file_system_1.FileSystem.copySync(src, destination);
                }
            });
        });
    }
}
/**
 * Some BI logic here:
 *  - once folder has been copied (and if the blu folder didn't exist prior to the installation) delete the blu folder
 *  - if a seed has been generated change working directory to the seeds root directory: process.chdir(seed-root);
 *  - set process working directory on the server to the new seed root directory process.chdir(seed-root)
 */
async function deleteInitialBluFolder() {
    if (seedDestinations.length > 0) {
        const initialBluPath = globals_1.Globals.bluMetadata.bluPath;
        const newSeedLocation = seedDestinations[0];
        const usingExistingBluFolder = globals_1.Globals.usingExistingBluFolder;
        if (newSeedLocation !== globals_1.Globals.bluMetadata.cwd) {
            process.chdir(newSeedLocation);
            await http_1.HTTP.post('/api/blu/metadata', { data: { newWorkingDir: newSeedLocation } });
            await commands_1.setBLUFolder();
            if (!usingExistingBluFolder) {
                setTimeout(() => file_system_1.FileSystem.removeSync(initialBluPath), 0);
            }
        }
    }
}
function setStartURL(stackjoyItems) {
    const item = stackjoyItems[0];
    const seed = stackjoyItems.find(item => item.isSeed);
    const url = seed ? `/blu/template/seeds.${item.name}` : `/blu/collection/${item.name}`;
    globals_1.Globals.startURL = url;
}
/**
 * Provide the user with a suggestion for the new seed name.
 * @param name
 */
async function getNewProjectName(name) {
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt({
        type: 'input',
        name: 'name',
        initial: name,
        message: `Name for the new project/workspace?`,
    }));
    return response.name;
}
/**
 * Provide the user with a suggestion for the destination .
 * @param name
 */
async function getNewProjectDestination(name) {
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt({
        type: 'input',
        name: 'destination',
        initial: `./${name}`,
        message: `Install the new project/workspace in directory:`,
    }));
    return response.destination;
}
//# sourceMappingURL=install.js.map