"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModel = void 0;
const globals_1 = require("../../globals");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const util_1 = require("../../shared/lib/util");
const app_interface_1 = require("../../shared/interfaces/app.interface");
const app_environment_model_1 = require("./app.environment.model");
const blueprints_model_1 = require("../../blueprints/engine/models/blueprints.model");
class AppModel {
    constructor() {
        this.workspacesPath = path_1.join(globals_1.SYSTEM.path.data, 'workspaces');
        this.stacksPath = path_1.join(globals_1.SYSTEM.path.data, 'stacks');
        this.cachePath = path_1.join(globals_1.SYSTEM.path.data, 'cache');
        this.statePath = path_1.join(globals_1.SYSTEM.path.data, 'state');
        this.workspaceList = [];
        this.stackList = [];
        this.init();
    }
    init() {
        fs_extra_1.ensureDirSync(this.workspacesPath);
        fs_extra_1.ensureDirSync(this.stacksPath);
        fs_extra_1.ensureDirSync(this.cachePath);
        fs_extra_1.ensureDirSync(this.statePath);
        this.createLists();
    }
    createLists() {
        this.workspaceList = this.getListOfEnvironments(this.workspacesPath);
        this.stackList = this.getListOfEnvironments(this.stacksPath);
    }
    refresh() {
        this.createLists();
    }
    get list() {
        return { workspaces: this.workspaceList, stacks: this.stackList };
    }
    getEnvironmentInfoById(id) {
        let env = this.list.workspaces.find(w => w.id === id);
        if (!env) {
            env = this.list.stacks.find(w => w.id === id);
        }
        return env;
    }
    async deleteEnvironment(id) {
        const metadata = this.getEnvironmentInfoById(id);
        if (!metadata)
            return false;
        fs_extra_1.removeSync(metadata.environmentPath);
        this.createLists();
        return true;
    }
    getEnvironmentById(id) {
        const metadata = this.getEnvironmentInfoById(id);
        return metadata ? new app_environment_model_1.EnvironmentModel(metadata) : null;
    }
    getListOfEnvironments(environmentPath) {
        const environments = [];
        const environmentDirs = fs_1.readdirSync(environmentPath);
        environmentDirs.forEach(dir => {
            const path = path_1.join(environmentPath, dir);
            if (util_1.isDirectorySync(path)) {
                const environmentMetadata = fs_extra_1.readJsonSync(path_1.join(path, 'metadata.json'), { throws: false });
                if (environmentMetadata) {
                    environmentMetadata.blueprintsPath = path_1.join(environmentMetadata.environmentPath, 'blueprints');
                    environments.push(Object.assign({}, this.defaultMetadata(), environmentMetadata));
                }
            }
        });
        return environments;
    }
    defaultMetadata() {
        return {
            id: null,
            name: null,
            codebasePath: null,
            blueprintsPath: null,
            environmentPath: null,
            isLocal: true,
            localVersion: 1,
            created: null,
            lastUsed: null,
            deletedOn: null,
            type: null
        };
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
        name = name !== null && name !== void 0 ? name : `${util_1.getLastDirectoryName(codebasePath)}`;
        return this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Workspace, isLocal);
    }
    createStack(name, isLocal = true) {
        const codebasePath = path_1.join(globals_1.SYSTEM.path.temp, name);
        return this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Stack, isLocal);
    }
    createEnvironment(codebasePath, name, type, isLocal, id = util_1.UUIDShort()) {
        const environmentPath = path_1.join(type === app_interface_1.App.Environment.Type.Workspace ? this.workspacesPath : this.stacksPath, id);
        const metadata = {
            id,
            name,
            codebasePath,
            environmentPath,
            blueprintsPath: path_1.join(environmentPath, 'blueprints'),
            isLocal,
            created: Date.now(),
            lastUsed: Date.now(),
            deletedOn: null,
            type
        };
        /**
         * create the blueprints folder structure
         */
        const result = blueprints_model_1.BlueprintsModel.crateBlueprintsFolder(environmentPath);
        if (result.error) {
            // return the error here
        }
        else {
            /**
             * store the supporting workspace files
             */
            fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'metadata.json'), metadata);
            fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'log.json'), []);
            fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'state.json'), {});
            this.createLists();
            // create main collection with example template
            const newEnvironment = this.getEnvironmentById(metadata.id);
            const newEnvironmentBlueprints = newEnvironment.getBlueprints();
            const result = newEnvironmentBlueprints.createCollection('main');
            if (!result.error) {
                const collection = result.data.collection;
                const templateResult = collection.createTemplate('example');
                if (!templateResult.error) {
                    const pathToTemplateFiles = templateResult.data.template.paths.files;
                    fs_1.writeFileSync(path_1.join(pathToTemplateFiles, 'hello-world.txt'), 'Hello Stackjoy! \n\nMy name is ^^name^^.');
                    // todo: create a whole slew of example files that the user can use as a reference
                }
            }
            return metadata;
        }
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
            this.createLists();
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
    async createRemoteEnvironment(env, token) {
        const envId = await globals_1.GIT.createRepo(env.blueprintsPath, token, env.metadata.name, env.metadata.type);
        env.metadata.isLocal = false;
        env.metadata.remote = {
            id: envId,
            version: 1,
            isClean: true
        };
    }
    async syncRemoteEnvironment(stack, token) {
        return await globals_1.GIT.syncRepo(stack.blueprintsPath, token);
    }
    async publishRemoteEnvironment(stack, token, id, commitMessage) {
        const { newVersion, requiresMerge } = await globals_1.GIT.publishRepo(stack.blueprintsPath, stack.metadata.remote.id, token, commitMessage || `Automated commit message for version ${stack.metadata.remote.version}`);
        if (newVersion != null) {
            stack.metadata.localVersion = newVersion;
            stack.metadata.remote.version = newVersion;
        }
        if (requiresMerge != null)
            stack.metadata.remote.requiresMerge = requiresMerge;
    }
    async downloadRemoteEnvironment(destinationPath, remoteId, token) {
        return await globals_1.GIT.downloadRepo(destinationPath, remoteId, token);
    }
    async downloadSeed(destinationPath, url) {
        return await globals_1.GIT.downloadSeed(destinationPath, url);
    }
}
exports.AppModel = AppModel;
//# sourceMappingURL=app.model.js.map