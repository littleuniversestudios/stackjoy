"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModel = void 0;
const globals_1 = require("../../globals");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const environment_model_1 = require("./environment.model");
const user_model_1 = require("./user.model");
const system_workspace_model_1 = require("./system.workspace.model");
class AppModel {
    constructor() {
        this.usersPath = (0, path_1.join)(globals_1.SYSTEM.path.data, 'users');
        this.systemWorkspaceFolder = 'SYSTEM_WORKSPACE';
        this.systemWorkspacePath = (0, path_1.join)(globals_1.SYSTEM.path.data, this.systemWorkspaceFolder);
        this.cachePath = (0, path_1.join)(globals_1.SYSTEM.path.data, 'cache');
        this.statePath = (0, path_1.join)(globals_1.SYSTEM.path.data, 'state');
        this.logPath = (0, path_1.join)(globals_1.SYSTEM.path.data, 'logs');
        this.workspaceList = [];
        this.stackList = [];
        this.init();
    }
    init() {
        (0, fs_extra_1.ensureDirSync)(this.usersPath);
        (0, fs_extra_1.ensureDirSync)(system_workspace_model_1.SystemWorkspaceModel.systemWorkspacePath);
        (0, fs_extra_1.ensureDirSync)(this.cachePath);
        (0, fs_extra_1.ensureDirSync)(this.statePath);
        (0, fs_extra_1.ensureDirSync)(this.logPath);
        this.ensureSystemWorkspace();
    }
    ensureSystemWorkspace() {
        this.systemWorkspace = system_workspace_model_1.SystemWorkspaceModel.getMetadata();
        // console.log('system workspace', this.systemWorkspace)
        this.workspaceList = [this.systemWorkspace];
    }
    createLists() {
        var _a, _b, _c, _d;
        this.workspaceList = [this.systemWorkspace, ...((_b = (_a = this.userModel) === null || _a === void 0 ? void 0 : _a.workspaceList) !== null && _b !== void 0 ? _b : [])];
        this.stackList = (_d = (_c = this.userModel) === null || _c === void 0 ? void 0 : _c.stackList) !== null && _d !== void 0 ? _d : [];
    }
    initUser(user) {
        this.userModel = new user_model_1.UserModel(user);
        this.refresh();
    }
    logOutUser() {
        this.userModel = new user_model_1.UserModel(null);
        this.refresh();
    }
    get isUserLoggedIn() {
        var _a;
        return !!((_a = this.userModel) === null || _a === void 0 ? void 0 : _a.user);
    }
    refresh() {
        var _a;
        (_a = this.userModel) === null || _a === void 0 ? void 0 : _a.refresh();
        this.createLists();
    }
    static get logFile() {
        const logFilename = `${new Date().toISOString().split('T')[0]}.error.log`;
        return process.env.LOGGING_MODE === 'development' ? (0, path_1.join)('logs', logFilename) : (0, path_1.join)(globals_1.SYSTEM.path.data, 'logs', logFilename);
    }
    get list() {
        return { workspaces: this.workspaceList, stacks: this.stackList };
    }
    getEnvironmentInfoById(id) {
        return [...this.list.workspaces, ...this.list.stacks].find(w => w.id === id);
    }
    findEnvironment(predicate) {
        return this.list.workspaces.find(predicate) || this.list.stacks.find(predicate);
    }
    getEnvironmentById(id) {
        const metadata = this.getEnvironmentInfoById(id);
        return metadata ? new environment_model_1.EnvironmentModel(metadata) : null;
    }
    getEnvironmentInfoByCodebase(codebasePath) {
        const codebaseList = this.getCodebaseList();
        const codebaseItem = codebaseList.find(list => list.codebasePath === codebasePath);
        return codebaseItem === null || codebaseItem === void 0 ? void 0 : codebaseItem.env;
    }
    /**
     * DEPRECATED: The old way of finding a codebase was to walk up the path and hopefully find something that matches
     * Since we now just assign a path that hasn't been found to the System Workspace we do not need to search for it.
     * Walk up the codebase path [f1/f2/f3, f1/f2, f1] until a workspace is found
     * @param codebasePath
     */
    getEnvironmentInfoByCodebaseOld(codebasePath) {
        const codebaseList = this.getCodebaseList();
        console.log('-->', codebaseList);
        let metadata;
        const codebaseParts = codebasePath.split(path_1.sep);
        while (codebaseParts.length > 0 && !metadata) {
            const path = codebaseParts.join(path_1.sep);
            codebaseParts.pop();
            if (!!path) {
                const items = codebaseList.filter(item => item.codebasePath === path);
                if (items.length > 0) {
                    items.sort((a, b) => b.lastUsed - a.lastUsed);
                    const item = items[0];
                    metadata = item.env;
                    metadata.codebasePath = item.codebasePath;
                }
            }
        }
        return metadata;
    }
    getCodebaseList() {
        const environments = [...this.workspaceList, ...this.stackList];
        return environments.map(env => ({ env: env, codebasePath: env.codebasePath, lastUsed: env.lastUsed }));
    }
    createWorkspace(codebasePath, name, isLocal = true) {
        const response = this.userModel.createWorkspace(codebasePath, name, isLocal);
        if (!response.error && isLocal) {
            this.refresh();
            // Only create a default collection on brand-new workspace, not remote ones
            this.createDefaultCollection(response.workspace.id);
        }
        return response;
    }
    createStack(name, isLocal = true) {
        const stack = this.userModel.createStack(name, isLocal);
        this.refresh();
        this.createDefaultCollection(stack.id);
        return stack;
    }
    async deleteEnvironment(id) {
        const metadata = this.getEnvironmentInfoById(id);
        if (metadata.isSystemWorkspace) {
            return { error: { status: 405, message: `Cannot delete System Environment.`, code: 'SYS_ENV_OP_NOT_ALLOWED' }, data: { success: false } };
        }
        else {
            const response = this.userModel.deleteEnvironment(id);
            this.refresh();
            return response;
        }
    }
    /**
     * Create the main (default) collection for a new environment
     * @param environmentId
     * @private
     */
    createDefaultCollection(environmentId) {
        const environment = this.getEnvironmentById(environmentId);
        environment_model_1.EnvironmentModel.createDefaultCollection(environment);
    }
    /**
     * Update the actual metadata file of a local stack
     * @param metadata
     * @param batchUpdate
     */
    updateEnvironmentMetadata(metadata, batchUpdate = false) {
        var _a, _b, _c;
        const environmentPath = metadata.environmentPath;
        const savedMetadata = Object.assign({}, metadata);
        // no need to store hardcoded absolute paths, system figures those out based on
        // where system.data.path is located at init time
        delete savedMetadata['environmentPath'];
        delete savedMetadata['blueprintsPath'];
        // TODO fix this...
        (_a = savedMetadata.remote) === null || _a === void 0 ? true : delete _a.invites;
        (_b = savedMetadata.remote) === null || _b === void 0 ? true : delete _b.organization;
        (_c = savedMetadata.remote) === null || _c === void 0 ? true : delete _c.permissions;
        (0, fs_extra_1.writeJSONSync)((0, path_1.join)(environmentPath, 'metadata.json'), savedMetadata);
        if (!batchUpdate)
            this.refresh();
    }
    /**
     * Wrapper to support writing a model directly, calls the underlying metadata write method
     * Separated so I dont have to convert the metadata to a model each time to update it.
     * @param environment
     * @param batchUpdate
     */
    updateEnvironmentModel(environment, batchUpdate = false) {
        this.updateEnvironmentMetadata(environment.metadata, batchUpdate);
    }
    /**
     * Create a new remote environment
     * @param env
     * @param orgId {optional} the organization id to link a stack with.
     */
    async createRemoteEnvironment(env, orgId) {
        const envId = await globals_1.SJ_SERVER.createRepo(env.blueprintsPath, env.metadata.name, env.metadata.type, orgId);
        env.metadata.isLocal = false;
        env.metadata.remote = {
            // TODO fix this...
            invites: {}, organization: undefined, permissions: {},
            id: envId,
            version: 1,
            isClean: true
        };
    }
    async syncRemoteEnvironment(stack) {
        return await globals_1.SJ_SERVER.syncRepo(stack.blueprintsPath);
    }
    /**
     * Publish changes to a remote environment
     * @param env
     * @param id
     * @param commitMessage
     */
    async publishRemoteEnvironment(env, id, commitMessage) {
        const { newVersion, requiresMerge } = await globals_1.SJ_SERVER.publishRepo(env.blueprintsPath, env.metadata.remote.id, commitMessage || `Automated commit message for version ${env.metadata.remote.version}`);
        if (newVersion != null) {
            env.metadata.localVersion = newVersion;
            env.metadata.remote.version = newVersion;
        }
        if (requiresMerge != null)
            env.metadata.remote.requiresMerge = requiresMerge;
    }
    async downloadRemoteEnvironment(destinationPath, remoteId) {
        return await globals_1.SJ_SERVER.downloadRepo(destinationPath, remoteId);
    }
    async downloadSeed(destinationPath, url) {
        return await globals_1.SJ_SERVER.downloadSeed(destinationPath, url);
    }
}
exports.AppModel = AppModel;
//# sourceMappingURL=app.model.js.map