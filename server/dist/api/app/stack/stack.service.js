"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackService = void 0;
const app_interface_1 = require("../../../shared/interfaces/app.interface");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const base_environment_service_1 = require("../../../services/base.environment.service");
const environment_model_1 = require("../../../models/app/environment.model");
const util_1 = require("../../../shared/lib/util");
const globals_1 = require("../../../globals");
const types_1 = require("@stackjoy/shared/types");
class StackService extends base_environment_service_1.BaseEnvironmentService {
    async findAll() {
        const stacks = globals_1.APP_SERVICE.APP.list.stacks;
        for (let i = 0; i < stacks.length; i++) {
            await this.updateRepoStatus(stacks[i], i !== stacks.length - 1);
        }
        return { error: null, data: stacks };
    }
    async create(values) {
        const isLocal = values.isLocal === true || values.isLocal === 'true';
        let newEnvironment = globals_1.APP_SERVICE.APP.createStack(values.name, isLocal);
        return { error: null, data: newEnvironment };
    }
    async deleteStack(id) {
        const result = await this.findById(id);
        if (result.error) {
            return result;
        }
        else {
            const stack = result.data;
            try {
                (0, fs_extra_1.removeSync)(stack.environmentPath);
                globals_1.APP_SERVICE.APP.refresh();
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'stack-delete-error', message: 'Error occurred trying to delete stack' }, data: error };
            }
        }
    }
    async addCollectionToStack(stackId, { collectionId }) {
        const stackResult = await this.findById(stackId);
        const collection = await globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().getCollection(collectionId);
        if (stackResult.error) {
            return stackResult.error;
        }
        else if (!collection) {
            const message = `Collection with id '${collectionId}' was not found.`;
            return { error: { status: 400, code: 'collection-not-found', message }, data: null };
        }
        else {
            const stack = stackResult.data;
            const stackModel = globals_1.APP_SERVICE.APP.getEnvironmentById(stack.id);
            const stackWorkspace = stackModel.getBlueprints();
            const result = stackWorkspace.addCollection(collection);
            return { error: result.error, data: { success: !result.error } };
        }
    }
    /**
     * Star an environment
     * @param envId
     */
    async star(envId) {
        const response = await globals_1.SJ_SERVER.starEnvironment(envId);
        if (response.status !== 200) {
            return { error: { message: response.statusText, status: response.status, code: types_1.HttpError.UNKNOWN, data: response.data }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Get a list of remote stacks
     */
    async getRemoteEnvironments() {
        return super.getRemoteEnvironments(app_interface_1.App.Environment.Type.Stack);
    }
    /**
     * Get a list of remote stacks
     */
    async getPublicStacks() {
        return super.getPublicStacks();
    }
    /**
     * Install a remote stack into the local environment for editing
     * @param id Stack Id
     * @param name Stack name
     * @param version Stack Remote Version
     * @param token Firebase auth token
     */
    async downloadStack({ id, name, version }) {
        if (!id || !name || !version)
            return { error: { status: 400, code: 'parameters-missing', message: `Stack 'id' or 'name' or 'version' missing in parameters` }, data: null };
        let stack = new environment_model_1.EnvironmentModel(globals_1.APP_SERVICE.APP.createStack(name, false));
        stack.metadata.localVersion = version;
        stack.metadata.remote = {
            // TODO fix this...
            invites: {}, organization: undefined, permissions: {},
            id,
            version: version,
            isClean: true
        };
        return await super.downloadEnvironment(stack);
    }
    /**
     * Install a stack into a current environment:
     * 1) Cloning a remote stack (or using a local stack)...depends on where the stack that's being installed is located
     * 2) Storing the remote stack into the stackjoy/tmp folder
     */
    async installStackIntoCurrentEnvironment({ id, stackInfo }) {
        var _a, _b, _c;
        if (!id)
            return { error: { status: 400, code: 'parameters-missing', message: `Stack 'id' missing in parameters` }, data: null };
        let location;
        let localStack;
        const result = await this.findById(id);
        if (result.error) {
            location = 'remote';
        }
        else {
            localStack = result.data;
            location = 'local';
        }
        if (location === 'remote') {
            // when installing a remote stack the client will pass the remote stack metadata that is
            // needed for installing it
            const remoteStack = stackInfo;
            if (!remoteStack) {
                return { error: { message: 'Missing remote stack information/metadata.' }, data: null };
            }
            else {
                let version = (_a = remoteStack.version) !== null && _a !== void 0 ? _a : 1;
                const metadata = this.getNewStackMetadata(remoteStack, 'remote');
                return this.installRemoteStack(id, version, metadata);
            }
        }
        else if (location === 'local') {
            // use the local stack folder as the path
            const stackInfo = {
                stackId: localStack.id,
                name: localStack.name,
                remoteId: (_b = localStack.remote) === null || _b === void 0 ? void 0 : _b.id,
                version: (_c = localStack.remote) === null || _c === void 0 ? void 0 : _c.version
            };
            return this.copyStackIntoCurrentEnvironment(localStack.blueprintsPath, this.getNewStackMetadata(stackInfo, 'local'));
        }
    }
    /**
     * Install a stack from remote origin
     * @param id
     * @param version
     * @param metadata
     * @private
     */
    async installRemoteStack(id, version, metadata) {
        version = version !== null && version !== void 0 ? version : 1;
        let cacheFolder = `${id}.${version}`;
        const cachePath = (0, path_1.join)(globals_1.APP_SERVICE.APP.cachePath, cacheFolder);
        let result;
        // if the remote stack has not been downloaded before (its not cached), get it from remote server
        if (!(0, fs_extra_1.existsSync)(cachePath)) {
            result = await globals_1.APP_SERVICE.APP.downloadRemoteEnvironment(cachePath, id);
        }
        // clone and store the remote stack into a temp directory
        if (result === null || result === void 0 ? void 0 : result.error) {
            (0, fs_extra_1.removeSync)(cachePath);
            return result;
        }
        else {
            // copy the temp dir into current environment
            return this.copyStackIntoCurrentEnvironment(cachePath, metadata);
        }
    }
    /**
     * Install a stack into a current environment:
     * 1) Cloning a remote stack (or using a local stack)...depends where the stack that's being installed is located
     * 2) Storing the remote stack into the stackjoy/tmp folder
     */
    async installSeedIntoCurrentEnvironment({ url, overwrite = false }) {
        if (!url)
            return { error: { status: 400, code: 'parameters-missing', message: `seed 'url' missing in parameters` }, data: null };
        const cachePath = (0, path_1.join)(globals_1.APP_SERVICE.APP.cachePath, 'downloaded-seed');
        const result = await globals_1.APP_SERVICE.APP.downloadSeed(cachePath, url);
        if (result.error) {
            return result;
        }
        else {
            const sourceDirectory = cachePath;
            const destDirectory = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.codebasePath;
            try {
                // if the .git folder exists remove it
                (0, fs_extra_1.removeSync)((0, path_1.join)(sourceDirectory, '.git'));
                (0, fs_extra_1.copySync)(sourceDirectory, destDirectory, { overwrite, errorOnExist: true });
                return { error: null, data: { success: true } };
            }
            catch (e) {
                return { error: { status: 400, code: 'overwrite-error', message: 'Files would be overwritten with install.', data: e }, data: { success: true } };
            }
        }
    }
    getNewStackMetadata(stackInfo, origin) {
        const metadata = {
            originalId: stackInfo.stackId,
            name: stackInfo.name,
            installed: Date.now(),
            origin,
            remote: {
                id: stackInfo.remoteId,
                version: stackInfo.version
            }
        };
        return metadata;
    }
    copyStackIntoCurrentEnvironment(fromBlueprintsPath, metadata) {
        const newStackId = (0, util_1.UUIDLong)();
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        const newStackPath = (0, path_1.join)(blueprints.workspace.paths.stacks, newStackId);
        const newStackBlueprintsPath = (0, path_1.join)(newStackPath, 'blueprints');
        (0, fs_extra_1.copySync)(fromBlueprintsPath, newStackBlueprintsPath);
        // if the .git folder gets copied as well remove it
        (0, fs_extra_1.removeSync)((0, path_1.join)(newStackBlueprintsPath, '.git'));
        // todo: in the future do not copy all hidden files (windows/mac treat them differently though so adjust accordingly)
        (0, fs_extra_1.writeJSONSync)((0, path_1.join)(newStackPath, 'metadata.json'), metadata);
        return { error: null, data: { success: true } };
    }
    /**
     * Update the description of a stack
     * @param remoteId
     * @param description
     */
    async updateDescription(remoteId, { description }) {
        await globals_1.SJ_SERVER.updateEnvironmentDescription(remoteId, description);
        return { error: null, data: null };
    }
    /**
     * Get the tags for a stack
     * @param remoteId
     */
    async getTags(remoteId) {
        const response = await globals_1.SJ_SERVER.getTags(remoteId);
        if (response.status !== 200)
            return { error: { status: response.status, message: response.statusText, code: types_1.HttpError.UNKNOWN }, data: null };
        return { error: null, data: response.data };
    }
    /**
     * Delete a tag from an environment
     * @param remoteId
     * @param tag
     */
    async deleteTag(remoteId, tag) {
        const response = await globals_1.SJ_SERVER.deleteTag(remoteId, tag);
        if (response.status !== 200)
            return { error: { status: response.status, message: response.statusText, code: types_1.HttpError.UNKNOWN }, data: null };
        return { error: null, data: response.data };
    }
    /**
     * Add a tag to an environment
     * @param remoteId
     * @param tag
     */
    async addTag(remoteId, tag) {
        const response = await globals_1.SJ_SERVER.addTag(remoteId, tag);
        if (response.status !== 200)
            return { error: { status: response.status, message: response.statusText, code: types_1.HttpError.UNKNOWN }, data: null };
        return { error: null, data: response.data };
    }
}
exports.StackService = StackService;
//# sourceMappingURL=stack.service.js.map