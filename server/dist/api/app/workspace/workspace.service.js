"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceService = void 0;
const app_interface_1 = require("../../../shared/interfaces/app.interface");
const base_environment_service_1 = require("../../../services/base.environment.service");
const environment_model_1 = require("../../../models/app/environment.model");
const globals_1 = require("../../../globals");
class WorkspaceService extends base_environment_service_1.BaseEnvironmentService {
    async findAll() {
        const workspaces = globals_1.APP_SERVICE.APP.list.workspaces;
        for (let i = 0; i < workspaces.length; i++) {
            await this.updateRepoStatus(workspaces[i], i !== workspaces.length - 1);
        }
        return { error: null, data: workspaces };
    }
    async create(values) {
        const isLocal = values.isLocal === true || values.isLocal === 'true';
        const response = globals_1.APP_SERVICE.APP.createWorkspace(values.codebasePath, values.name, isLocal);
        return { error: response.error, data: response.workspace };
    }
    /**
     * Get a list of remote workspaces
     */
    async getRemoteEnvironments() {
        return super.getRemoteEnvironments(app_interface_1.App.Environment.Type.Workspace);
    }
    /**
     * Install a remote stack into the local environment for editing
     * @param id Workspace Id
     * @param name Workspace name
     * @param version Workspace Remote Version
     * @param codebasePath Codebase path
     * @param token Firebase auth token
     */
    async installWorkspace({ id, name, version, codebasePath }) {
        if (!id || !name || !version || !codebasePath)
            return { error: { status: 400, code: 'parameters-missing', message: `Stack 'id' or 'name' or 'version' or 'codebasePath' missing in parameters` }, data: null };
        const { error, workspace } = globals_1.APP_SERVICE.APP.createWorkspace(codebasePath, name, false);
        // TODO better error
        if (error)
            return { error: { status: 500, code: 'server-error', message: 'Error installing workspace', data: error }, data: null };
        let stack = new environment_model_1.EnvironmentModel(workspace);
        stack.metadata.localVersion = version;
        stack.metadata.remote = {
            id,
            version: version,
            isClean: true
        };
        await super.downloadEnvironment(stack);
        return { error: null, data: null };
    }
}
exports.WorkspaceService = WorkspaceService;
//# sourceMappingURL=workspace.service.js.map