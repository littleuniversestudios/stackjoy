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
class UserModel {
    constructor(user) {
        this.user = user;
        this.usersPath = 'users';
        this.workspaceList = [];
        this.stackList = [];
        this.maxWorkspaces = 0;
        this.init();
    }
    init() {
        if (!!this.user) {
            this.workspacesPath = path_1.join(this.usersPath, this.user.uid, 'workspaces');
            this.stacksPath = path_1.join(this.usersPath, this.user.uid, 'stacks');
            this.statePath = path_1.join(this.usersPath, this.user.uid, 'state');
            this.ensureUserDirectories();
            this.setUserPrivileges();
            this.createLists();
        }
    }
    ensureUserDirectories() {
        fs_extra_1.ensureDirSync(this.workspacesPath);
        fs_extra_1.ensureDirSync(this.stacksPath);
        fs_extra_1.ensureDirSync(this.statePath);
    }
    /**
     * Set privileges based on the user account status free/paid and level of account
     * @private
     */
    setUserPrivileges() {
        this.maxWorkspaces = 10; // every signed in user gets 3 worksoaces for free
        // todo: check account level and assign max workspaces accordingly
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
        return this.workspaceList.length < this.maxWorkspaces;
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
        fs_extra_1.removeSync(metadata.environmentPath);
        this.createLists();
        return { error: null, data: { success: true } };
    }
    getListOfEnvironments(environmentPath) {
        const environments = [];
        // todo: should ignore all hidden folders, not just .DS_Store, fix this
        const environmentDirs = fs_1.readdirSync(environmentPath).filter(dir => !['.DS_Store'].includes(dir));
        environmentDirs.forEach(dir => environments.push(environment_model_1.EnvironmentModel.getEnvironmentMetadata(path_1.join(environmentPath, dir))));
        return environments;
    }
    createWorkspace(codebasePath, name, isLocal = true) {
        if (this.canCreateNewWorkspace()) {
            name = name !== null && name !== void 0 ? name : `${util_1.getLastDirectoryName(codebasePath)}`;
            return { error: null, workspace: this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Workspace, isLocal) };
        }
        else {
            return { error: { status: 402, message: `Upgrade to paid plan for more workspaces` }, workspace: null };
        }
    }
    createStack(name, isLocal = true) {
        const codebasePath = path_1.join(globals_1.SYSTEM.path.temp, name);
        return this.createEnvironment(codebasePath, name, app_interface_1.App.Environment.Type.Stack, isLocal);
    }
    createEnvironment(codebasePath, name, type, isLocal, id = util_1.UUIDShort()) {
        const environmentRelativePath = path_1.join(type === app_interface_1.App.Environment.Type.Workspace ? this.workspacesPath : this.stacksPath, id);
        return environment_model_1.EnvironmentModel.createEnvironment(environmentRelativePath, { codebasePath, name, type, isLocal, id });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map