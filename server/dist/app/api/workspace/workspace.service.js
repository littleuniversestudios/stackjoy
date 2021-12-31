"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceService = void 0;
const globals_1 = require("../../../globals");
const base_environment_service_1 = require("../base-environment.service");
const app_environment_model_1 = require("../../models/app.environment.model");
class WorkspaceService extends base_environment_service_1.BaseEnvironmentService {
    async findAll() {
        const workspaces = globals_1.APP.list.workspaces;
        for (let i = 0; i < workspaces.length; i++) {
            await this.updateRepoStatus(workspaces[i], i !== workspaces.length - 1);
        }
        return { error: null, data: workspaces };
    }
    async create(values) {
        const isLocal = values.isLocal === true || values.isLocal === 'true';
        let newEnvironment = globals_1.APP.createWorkspace(values.codebasePath, values.name, isLocal);
        return { error: null, data: newEnvironment };
    }
    /**
     * Install a remote stack into the local environment for editing
     * @param id Workspace Id
     * @param name Workspace name
     * @param version Workspace Remote Version
     * @param codebasePath Codebase path
     * @param token Firebase auth token
     */
    async installWorkspace({ id, name, version, codebasePath }, token) {
        if (!id || !name || !version || !codebasePath)
            return { error: { status: 400, code: 'parameters-missing', message: `Stack 'id' or 'name' or 'version' or 'codebasePath' missing in parameters` }, data: null };
        let stack = new app_environment_model_1.EnvironmentModel(globals_1.APP.createWorkspace(codebasePath, name, false));
        stack.metadata.localVersion = version;
        stack.metadata.remote = {
            id,
            version: version,
            isClean: true
        };
        await super.downloadEnvironment(stack, token);
        return { error: null, data: null };
    }
}
exports.WorkspaceService = WorkspaceService;
//# sourceMappingURL=workspace.service.js.map