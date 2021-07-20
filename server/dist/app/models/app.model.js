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
class AppModel {
    constructor() {
        this.workspacesPath = path_1.join(globals_1.SYSTEM.path.data, 'workspaces');
        this.stacksPath = path_1.join(globals_1.SYSTEM.path.data, 'stacks');
        this.cachePath = path_1.join(globals_1.SYSTEM.path.data, 'cache');
        this.workspaceList = [];
        this.stackList = [];
        this.init();
    }
    init() {
        fs_extra_1.ensureDirSync(this.workspacesPath);
        fs_extra_1.ensureDirSync(this.stacksPath);
        fs_extra_1.ensureDirSync(this.cachePath);
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
            associatedCodebasePaths: [],
            environmentPath: null,
            isLocal: true,
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
        const list = [];
        const environments = [...this.workspaceList, ...this.stackList];
        environments.forEach(env => {
            list.push(...env.associatedCodebasePaths.map(codebasePath => ({ env: env, codebasePath, lastUsed: env.lastUsed })));
        });
        return list;
    }
    createWorkspace(codebasePath, name, isLocal = true) {
        name = name !== null && name !== void 0 ? name : `${util_1.getLastDirectoryName(codebasePath)}-local`;
        return this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Workspace, isLocal);
    }
    createStack(name, isLocal = true) {
        const codebasePath = path_1.join(globals_1.SYSTEM.path.temp, name);
        fs_extra_1.ensureDirSync(codebasePath);
        return this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Stack, isLocal);
    }
    createEnvironment(codebasePath, name, type, isLocal, id = util_1.UUIDShort()) {
        const environmentPath = path_1.join(type === app_interface_1.App.Environment.Type.Workspace ? this.workspacesPath : this.stacksPath, id);
        const blueprintsPath = path_1.join(environmentPath, 'blueprints');
        const metadata = {
            id,
            name,
            codebasePath,
            environmentPath,
            blueprintsPath,
            associatedCodebasePaths: [codebasePath],
            isLocal,
            created: Date.now(),
            lastUsed: Date.now(),
            deletedOn: null,
            type
        };
        /**
         * create the blueprints directory where all collections/templates/... are stored
         * create "example" collection
         * create "hello-world" starter template
         */
        const exampleCollectionPath = path_1.join(blueprintsPath, 'example', 'hello-world');
        fs_extra_1.ensureDirSync(exampleCollectionPath);
        /**
         * store the hello-world template contents
         * todo: create a whole slew of example files that the user can use as a reference
         */
        fs_1.writeFileSync(path_1.join(exampleCollectionPath, 'hello-world.txt'), 'Hello Stackjoy! \n\nMy name is ^^name^^.');
        /**
         * store the supporting workspace files
         */
        fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'metadata.json'), metadata);
        fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'log.json'), []);
        fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'state.json'), {});
        fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'data.json'), { dataModels: [] });
        this.createLists();
        return metadata;
    }
    updateEnvironmentMetadata(environment) {
        const environmentPath = environment.metadata.environmentPath;
        fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'metadata.json'), environment.metadata);
        this.createLists();
    }
    async createRemoteStack(stack, token) {
        const stackId = await globals_1.GIT.createRepo(stack.blueprintsPath, token, stack.metadata.name);
        stack.metadata.isLocal = false;
        stack.metadata.remote = {
            id: stackId,
            version: 1
        };
    }
    async syncRemoteStack(stack, token) {
        const { requiresMerge } = await globals_1.GIT.syncRepo(stack.blueprintsPath, token);
        if (requiresMerge != null)
            stack.metadata.remote.requiresMerge = requiresMerge;
    }
    async publishRemoteStack(stack, token) {
        const { newVersion, requiresMerge } = await globals_1.GIT.publishRepo(stack.blueprintsPath, stack.metadata.remote.version, token);
        if (newVersion != null)
            stack.metadata.remote.version = newVersion;
        if (requiresMerge != null)
            stack.metadata.remote.requiresMerge = requiresMerge;
    }
    async downloadRemoteStack(destinationPath, remoteId, token) {
        return await globals_1.GIT.downloadRepo(destinationPath, remoteId, token);
    }
}
exports.AppModel = AppModel;
//# sourceMappingURL=app.model.js.map