"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const globals_1 = require("../../globals");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const util_1 = require("../../shared/lib/util");
const app_interface_1 = require("../../shared/interfaces/app.interface");
const environment_model_1 = require("./environment.model");
const models_1 = require("@stackjoy/shared/models");
/**
 * Folder structure of a workspace/stack
 * .../stackjoy/users/~userID~/
 *                          workspaces/${workspace_id}/blueprints
 *                                     .../metadata.json
 *                                     .../log.json
 *                                     .../state.json
 *
 *
 */
class UserModel extends models_1.SharedUserModel {
    constructor(user) {
        super(user || { uid: '' });
        this.user = user;
        this.usersPath = (0, path_1.join)(globals_1.SYSTEM.path.data, 'users');
        this.workspaceList = [];
        this.stackList = [];
        this.maxWorkspaces = 0;
        this.init();
    }
    init() {
        if (!!this.user) {
            this.relativeWorkspacesPath = (0, path_1.join)('users', this.user.uid, 'workspaces');
            this.relativeStacksPath = (0, path_1.join)('users', this.user.uid, 'stacks');
            this.workspacesPath = (0, path_1.join)(this.usersPath, this.user.uid, 'workspaces');
            this.stacksPath = (0, path_1.join)(this.usersPath, this.user.uid, 'stacks');
            this.statePath = (0, path_1.join)(this.usersPath, this.user.uid, 'state');
            this.ensureUserDirectories();
            this.setUserPrivileges();
            this.createLists();
        }
    }
    ensureUserDirectories() {
        (0, fs_extra_1.ensureDirSync)(this.workspacesPath);
        (0, fs_extra_1.ensureDirSync)(this.stacksPath);
        (0, fs_extra_1.ensureDirSync)(this.statePath);
    }
    /**
     * Set privileges based on the user account status free/paid and level of account
     * @private
     */
    setUserPrivileges() {
        switch (this.user.accountType) {
            case models_1.AccountType.BASIC:
                this.maxWorkspaces = 1; // every signed in user gets 2 worksoaces for free
                break;
            case models_1.AccountType.EARLY_ADOPTER:
                this.maxWorkspaces = 10; // early adopters get 10 workspaces
                break;
            case models_1.AccountType.PREMIUM:
                // todo: figure out what paid accounts get, possibly unlimited;
                this.maxWorkspaces = 99;
                break;
        }
    }
    createLists() {
        if (this.user) {
            const workspaces = this.getListOfEnvironments(this.workspacesPath);
            /**
             * If for some reason the user has more than the allowed number of workspaces, disable them.
             */
            if (workspaces.length > this.maxWorkspaces) {
                workspaces.forEach((workspace, index) => {
                    if (index >= this.maxWorkspaces) {
                        workspace.disabled = true;
                    }
                });
            }
            this.workspaceList = workspaces;
            this.stackList = this.getListOfEnvironments(this.stacksPath);
        }
    }
    canCreateNewWorkspace() {
        return this.workspaceList.filter(w => !w.isSystemWorkspace).length < this.maxWorkspaces;
    }
    refresh() {
        this.createLists();
    }
    getEnvironmentInfoById(id) {
        return [...this.workspaceList, ...this.stackList].find(w => w.id === id);
    }
    async deleteEnvironment(id) {
        const metadata = this.getEnvironmentInfoById(id);
        if (!metadata) {
            return { error: { status: 404, message: `Environment with id: '${id}' not found.`, code: 'ENV_NOT_FOUND' }, data: { success: false } };
        }
        (0, fs_extra_1.removeSync)(metadata.environmentPath);
        this.createLists();
        return { error: null, data: { success: true } };
    }
    getListOfEnvironments(environmentPath) {
        const environments = [];
        // todo: should ignore all hidden folders, not just .DS_Store, fix this
        const environmentDirs = (0, fs_1.readdirSync)(environmentPath).filter(dir => !['.DS_Store'].includes(dir));
        environmentDirs.forEach(dir => environments.push(environment_model_1.EnvironmentModel.getEnvironmentMetadata((0, path_1.join)(environmentPath, dir))));
        return environments;
    }
    createWorkspace(codebasePath, name, isLocal = true) {
        if (this.canCreateNewWorkspace()) {
            name = name !== null && name !== void 0 ? name : `${(0, util_1.getLastDirectoryName)(codebasePath)}`;
            return { error: null, workspace: this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Workspace, isLocal) };
        }
        else {
            return { error: { status: 402, message: `Upgrade to paid plan for more workspaces` }, workspace: null };
        }
    }
    createStack(name, isLocal = true) {
        const codebasePath = (0, path_1.join)(globals_1.SYSTEM.path.temp, name);
        return this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Stack, isLocal);
    }
    createEnvironment(codebasePath, name, type, isLocal, id = (0, util_1.UUIDShort)()) {
        const environmentRelativePath = (0, path_1.join)(type === app_interface_1.App.Environment.Type.Workspace ? this.relativeWorkspacesPath : this.relativeStacksPath, id);
        return environment_model_1.EnvironmentModel.createEnvironment(environmentRelativePath, { codebasePath, name, type, isLocal, id });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map