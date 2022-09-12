"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModel = void 0;
const globals_1 = require("../../globals");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const util_1 = require("../../shared/lib/util");
const app_interface_1 = require("../../shared/interfaces/app.interface");
const app_environment_model_1 = require("./app.environment.model");
const app_user_model_1 = require("./app.user.model");
class AppModel {
    constructor() {
        this.usersPath = path_1.join(globals_1.SYSTEM.path.data, 'users');
        this.systemWorkspacePath = path_1.join(globals_1.SYSTEM.path.data, 'SYSTEM_WORKSPACE');
        this.cachePath = path_1.join(globals_1.SYSTEM.path.data, 'cache');
        this.statePath = path_1.join(globals_1.SYSTEM.path.data, 'state');
        this.logPath = path_1.join(globals_1.SYSTEM.path.data, 'logs');
        this.workspaceList = [];
        this.stackList = [];
        this.init();
    }
    init() {
        fs_extra_1.ensureDirSync(this.usersPath);
        fs_extra_1.ensureDirSync(this.systemWorkspacePath);
        fs_extra_1.ensureDirSync(this.cachePath);
        fs_extra_1.ensureDirSync(this.statePath);
        fs_extra_1.ensureDirSync(this.logPath);
        this.ensureSystemWorkspace();
    }
    ensureSystemWorkspace() {
        if (!fs_extra_1.existsSync(path_1.join(this.systemWorkspacePath, 'metadata.json'))) {
            const systemEnvironment = this.createSystemEnvironment();
            app_environment_model_1.EnvironmentModel.createDefaultCollection(new app_environment_model_1.EnvironmentModel(systemEnvironment));
        }
        this.systemWorkspace = app_environment_model_1.EnvironmentModel.getEnvironmentMetadata(this.systemWorkspacePath);
        this.workspaceList = [this.systemWorkspace];
    }
    createLists() {
        this.workspaceList = [this.systemWorkspace, ...this.userModel.workspaceList];
        this.stackList = this.userModel.stackList;
    }
    initUser(user) {
        this.userModel = new app_user_model_1.AppUserModel(user);
        this.refresh();
    }
    logOutUser() {
        this.userModel = new app_user_model_1.AppUserModel(null);
        this.refresh();
    }
    get isUserLoggedIn() {
        return !!this.userModel.user;
    }
    refresh() {
        this.userModel.refresh();
        this.createLists();
    }
    static get logFile() {
        const logFilename = `${new Date().toISOString().split('T')[0]}.error.log`;
        return process.env.LOGGING_MODE === 'development' ? path_1.join('logs', logFilename) : path_1.join(globals_1.SYSTEM.path.data, 'logs', logFilename);
    }
    get list() {
        return { workspaces: this.workspaceList, stacks: this.stackList };
    }
    getEnvironmentInfoById(id) {
        return [...this.list.workspaces, ...this.list.stacks].find(w => w.id === id);
    }
    async purgeEnvironment(id) {
        return false;
    }
    getEnvironmentById(id) {
        const metadata = this.getEnvironmentInfoById(id);
        return metadata ? new app_environment_model_1.EnvironmentModel(metadata) : null;
    }
    /**
     * Walk up the codebase path [f1/f2/f3, f1/f2, f1] until a workspace is found
     * @param codebasePath
     */
    getEnvironmentInfoByCodebase(codebasePath) {
        const codebaseList = this.getCodebaseList();
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
    createSystemEnvironment() {
        return app_environment_model_1.EnvironmentModel.createEnvironment({
            id: util_1.UUIDShort(),
            codebasePath: null,
            name: 'SYSTEM WORKSPACE',
            type: app_interface_1.App.Environment.Type.Workspace,
            isLocal: true,
            isSystemWorkspace: true,
            environmentPath: this.systemWorkspacePath
        });
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
        app_environment_model_1.EnvironmentModel.createDefaultCollection(environment);
    }
    /**
     * Update the actual metadata file of a local stack
     * @param metadata
     * @param batchUpdate
     */
    updateEnvironmentMetadata(metadata, batchUpdate = false) {
        const environmentPath = metadata.environmentPath;
        fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'metadata.json'), metadata);
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
     */
    async createRemoteEnvironment(env) {
        const envId = await globals_1.SJ_SERVER.createRepo(env.blueprintsPath, env.metadata.name, env.metadata.type);
        env.metadata.isLocal = false;
        env.metadata.remote = {
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