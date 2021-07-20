"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackService = void 0;
const globals_1 = require("../../../globals");
const app_interface_1 = require("../../../shared/interfaces/app.interface");
const app_environment_model_1 = require("../../models/app.environment.model");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const fs = require("fs");
const file_system_1 = require("../../../blueprints/engine/lib/file-system");
const git_model_1 = require("../../models/git.model");
class StackService {
    findAll() {
        const stacks = globals_1.APP.list.stacks;
        // stacks.forEach(s => this.checkStackStatus(s))
        return { error: null, data: stacks };
    }
    /**
     * Check if a local stack has a git repo and if there are any local pending changes
     * that need to be pushed
     * @param stack
     * @private
     */
    checkStackStatus(stack) {
        console.log('stack:', stack.blueprintsPath);
        try {
            const git = git_model_1.GitModel.createGit(stack.blueprintsPath);
            git.status(status => {
                console.log('git status', status);
            });
        }
        catch (e) {
            console.log(`stack ${stack.name} is not a git repo, must be local`);
        }
    }
    findById(id) {
        const stack = globals_1.APP.getEnvironmentInfoById(id);
        const error = !stack ? { status: 400, code: 'stack-not-found', message: `Stack with id ${id} was not found.` } : null;
        return { error, data: stack };
    }
    create(values) {
        let newEnvironment;
        const isLocal = values.isLocal === true || values.isLocal === 'true';
        if (values.type === app_interface_1.App.Environment.Type.Workspace) {
            newEnvironment = globals_1.APP.createWorkspace(values.codebasePath, values.name, isLocal);
        }
        if (values.type === app_interface_1.App.Environment.Type.Stack) {
            newEnvironment = globals_1.APP.createStack(values.name, isLocal);
        }
        return { error: null, data: newEnvironment };
    }
    update(id, values) {
        return { error: null, data: null };
    }
    deleteStack(id) {
        const result = this.findById(id);
        if (result.error) {
            return result.error;
        }
        else {
            const stack = result.data;
            try {
                fs_extra_1.removeSync(stack.environmentPath);
                globals_1.APP.refresh();
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'stack-delete-error', message: 'Error occurred trying to delete stack' }, data: error };
            }
        }
    }
    addCollectionToStack(id, values) {
        const result = this.findById(id);
        if (result.error) {
            return result.error;
        }
        else {
            const stack = result.data;
            const destination = path_1.join(stack.environmentPath, 'blueprints', values.collectionName);
            if (fs.existsSync(destination)) {
                const message = `Collection '${values.collectionName}' in stack '${stack.name} already exists.`;
                return { error: { status: 400, code: 'collection-exists', message }, data: null };
            }
            else {
                fs_extra_1.ensureDirSync(destination);
                try {
                    fs_extra_1.copySync(values.collectionPath, destination);
                    return { error: null, data: { success: true } };
                }
                catch (error) {
                    return { error: { status: 400, code: 'collection-copy-error', message: 'Error occurred when coping collection to stack' }, data: error };
                }
            }
        }
    }
    /**
     * Download a remote stack locally into a user's 'my stacks' list.
     * Once downloaded, user can then edit and update the stack.
     * @param id
     * @param name
     * @param token
     */
    async downloadStack({ id, name }, token) {
        if (!id || !name)
            return { error: { status: 400, code: 'parameters-missing', message: `Stack 'id' or 'name' missing in parameters` }, data: null };
        console.log(new Date(), 'Downloading stack: ', id);
        let stack;
        try {
            stack = new app_environment_model_1.EnvironmentModel(globals_1.APP.createStack(name, false));
            stack.metadata.remote = {
                id,
                version: 1
            };
            await globals_1.APP.downloadRemoteStack(stack.blueprintsPath, id, token);
            await globals_1.APP.updateEnvironmentMetadata(stack);
        }
        catch (e) {
            // TODO Delete stack if clone fails
            console.log(new Date(), e);
            throw e;
        }
        return { error: null, data: null };
    }
    /**
     * Publish (push) a local stack to make it remotely available
     * For now assume that we can only publish stacks (workspaces cannot be "published" but "shared")
     *  - Publishing a stack means taking everything from the stack's /blueprints directory and creating a git repo for it.
     *  - In return we get the repo ID back (or something else) to tie the local files to the repo files
     *  - The published stack can be found on stackjoy.com
     *  - the published stack can then be installed in another workspace [ stackjoy i xa5h6kdh2]
     *
     * @param values
     * @param token
     */
    async pushToRemoteStack(values, token) {
        const stackId = values.id;
        const stack = globals_1.APP.getEnvironmentById(stackId);
        try {
            if (!token)
                return { error: { message: 'No auth token provided!' }, data: null };
            if (stack.metadata.isLocal)
                await globals_1.APP.createRemoteStack(stack, token);
            else
                await globals_1.APP.publishRemoteStack(stack, token);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        globals_1.APP.updateEnvironmentMetadata(stack);
        return { error: null, data: stack.metadata };
    }
    /**
     * Get (pull) the latest updates from a remote stack
     * @param values
     * @param token
     */
    async pullRemoteStack(values, token) {
        const stackId = values.id;
        const stack = globals_1.APP.getEnvironmentById(stackId);
        try {
            if (!token)
                return { error: { message: 'No auth token provided!' }, data: null };
            if (stack.metadata.isLocal)
                return { error: 'Not a remote stack!', data: null };
            else
                await globals_1.APP.syncRemoteStack(stack, token);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        globals_1.APP.updateEnvironmentMetadata(stack);
        return { error: null, data: stack.metadata };
    }
    /**
     * Install a stack into a current environment (workspace, or also another stack)
     * Because we're merging another stack into the blueprints folder of the current environment (workspace)
     * we need to do some checks in case there are naming collisions (mainly collections of the same name)
     * We achieve this by:
     * 1) Cloning a remote stack (or using a local stack)...depends where the stack that's being installed is located
     * 2) Storing the remote stack into the stackjoy/tmp folder
     * 3) traversing the tmp folder and comparing the collections from the remote stack to the collections in the current workspace
     *  3a) showing the user all the collisions and allowing the user to overwrite existing (local) collection with the remote collection
     *      OR allowing the user to rename the remote collection
     * 4) adding top level settings (links, vars, functions) from the remote stack's blueprints folder to the current workspace
     * 5) copying the remote stacks collections (and blueprints settings) into the current workspace
     * 6) deleting the stackjoy/tmp/stack folder (clean up the temp files)
     *
     * OPTIONS:
     * if an install fails you can pass the options so that next time it tries to install it knows how to handle errors
     * and does not have to download a remote stack if a cached one already exists
     * {
     *     cacheFolder:string,
     *     collisions:[
     *        {
     *          action: overwrite | rename | omit,
     *          collectionName : string,
     *          newCollectionName? : string
     *        }
     *      ]
     * }
     */
    async installStackIntoCurrentEnvironment({ id, options = {} }, token) {
        var _a;
        if (!id)
            return { error: { status: 400, code: 'parameters-missing', message: `Stack 'id' missing in parameters` }, data: null };
        let location;
        let localStack;
        const result = this.findById(id);
        if (result.error) {
            location = 'remote';
        }
        else {
            localStack = result.data;
            location = ((_a = localStack.remote) === null || _a === void 0 ? void 0 : _a.id) ? 'remote' : 'local';
        }
        const metadata = { id };
        if (location === 'remote') {
            let cacheFolder = options.cacheFolder ? options.cacheFolder : this.getCacheFolder();
            metadata['cacheFolder'] = cacheFolder;
            const cachePath = path_1.join(globals_1.APP.cachePath, cacheFolder);
            // clone and store the remote stack into a temp directory
            const result = await globals_1.APP.downloadRemoteStack(cachePath, id, token);
            if (result.error) {
                return result;
            }
            else {
                // copy the temp dir into current environment
                return this.copyStackIntoCurrentEnvironment(cachePath, metadata, options);
            }
        }
        else if (location === 'local') {
            // use the local stack folder as the path
            return this.copyStackIntoCurrentEnvironment(localStack.blueprintsPath, metadata, options);
        }
    }
    getCacheFolder() {
        const defaultCacheFolder = 'axaxaxa';
        /**
         todo:
         - once we have the version number for remote stacks
         - create cache folder:  sha256 stackId + version number
         - use the sha256 as folder name
         - next time user tries to download the remote stack check for a cached version and use it if it exists
         - leave cached version in there forever
         */
        return defaultCacheFolder;
    }
    /**
     * Copy the install stack into the current environment
     * - metadata has extra info if the remote repo has already been downloaded so that when it returns an error
     *   the client can pass some of the metadata back to tell the server not to download the remote repo if a
     *   cached version exists
     * @param stackPath
     * @param metadata
     * @param options
     * @private
     */
    copyStackIntoCurrentEnvironment(stackPath, metadata = {}, options) {
        const errors = [];
        const excludeFolders = [".git"];
        // get all collections from stack
        const originalStackCollections = file_system_1.BLUFileSystem.getDirectoriesSync(stackPath, excludeFolders);
        let stackCollections;
        // make changes to install stack collections from options
        if (options === null || options === void 0 ? void 0 : options.collisions) {
            stackCollections = [];
            originalStackCollections.forEach(originalCollectionName => {
                const collisionOption = options.collisions.find(c => c.collectionName === originalCollectionName);
                if (collisionOption) {
                    switch (collisionOption.action) {
                        case "overwrite":
                            stackCollections.push({ collectionName: originalCollectionName, originalCollectionName, action: "overwrite" });
                            break;
                        case "rename":
                            stackCollections.push({ collectionName: collisionOption.newCollectionName, originalCollectionName, action: "copy" });
                            break;
                        case "skip":
                        // do not add the original collection (skip it)
                        default:
                            // do nothing
                            break;
                    }
                }
                else {
                    // no collision option found so we add the original collection name to the list
                    stackCollections.push({ collectionName: originalCollectionName, originalCollectionName, action: "copy" });
                }
            });
        }
        else {
            // no changes to be made so the stackCollections are just original stack collections
            stackCollections = originalStackCollections.map(collectionName => ({ collectionName, originalCollectionName: collectionName, action: 'copy' }));
        }
        // get all collections from current environment
        const blueprints = globals_1.APP_ENVIRONMENT.getBlueprints();
        const environmentCollections = blueprints.getCollections().map(c => c.name);
        // check for any overwrite collisions
        stackCollections.forEach(stackCollection => {
            if (stackCollection.action === 'copy' && environmentCollections.includes(stackCollection.collectionName)) {
                errors.push({ code: 'collection-exists', message: `Collection '${stackCollection.collectionName}' already exists in current environment`, collectionName: stackCollection.collectionName });
            }
        });
        if (errors.length > 0) {
            return { error: { status: 400, code: 'overwrite-error', message: 'Collections in stack would overwrite environment collections', data: { metadata, errors } }, data: null };
        }
        // copy collections to current environment
        stackCollections.forEach(stackCollection => {
            const destinationPath = path_1.join(globals_1.APP_ENVIRONMENT.blueprintsPath, stackCollection.collectionName);
            // delete the existing directory if it exists to make sure only
            // the files from the install stack are left after the copy process
            if (fs.existsSync(destinationPath)) {
                fs_extra_1.removeSync(destinationPath);
            }
            // make the new directory and copy the files over
            fs_extra_1.ensureDirSync(destinationPath);
            try {
                const collectionPath = path_1.join(stackPath, stackCollection.originalCollectionName);
                fs_extra_1.copySync(collectionPath, destinationPath);
            }
            catch (error) {
                errors.push({ status: 400, code: 'collection-copy-error', message: 'Error occurred when coping collection to stack', data: error });
            }
        });
        if (errors.length > 0) {
            return { error: { status: 400, code: 'copy-error', message: 'Error occurred when coping collection to stack', data: { metadata, errors } }, data: null };
        }
        return { error: null, data: { success: true } };
    }
}
exports.StackService = StackService;
//# sourceMappingURL=stack.service.js.map