"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemWorkspaceModel = void 0;
const app_interface_1 = require("../../shared/interfaces/app.interface");
const environment_model_1 = require("./environment.model");
const path_1 = require("path");
const globals_1 = require("../../globals");
const util_1 = require("../../shared/lib/util");
const fs_extra_1 = require("fs-extra");
class SystemWorkspaceModel extends environment_model_1.EnvironmentModel {
    constructor(metadata) {
        super(metadata);
        this.metadata = metadata;
    }
    static get systemWorkspacePath() {
        return path_1.join(globals_1.SYSTEM.path.data, SystemWorkspaceModel.systemWorkspaceFolder);
    }
    static doesSystemWorkspaceExist() {
        return fs_extra_1.existsSync(path_1.join(SystemWorkspaceModel.systemWorkspacePath, 'metadata.json'));
    }
    static createSystemEnvironment() {
        const systemWorkspaceRelativePath = SystemWorkspaceModel.systemWorkspaceFolder;
        const systemEnvironmentMetadata = environment_model_1.EnvironmentModel.createEnvironment(systemWorkspaceRelativePath, {
            id: util_1.UUIDShort(),
            codebasePath: null,
            name: 'SYSTEM WORKSPACE',
            type: app_interface_1.App.Environment.Type.Workspace,
            isLocal: true,
            isSystemWorkspace: true,
        });
        environment_model_1.EnvironmentModel.createDefaultCollection(new SystemWorkspaceModel(systemEnvironmentMetadata));
        return systemEnvironmentMetadata;
    }
    /**
     * Get System workspace metadata. If system workspace does not exist, create it
     * otherwise just return the existing metadata
     */
    static getMetadata() {
        let metadata;
        if (SystemWorkspaceModel.doesSystemWorkspaceExist()) {
            metadata = environment_model_1.EnvironmentModel.getEnvironmentMetadata(SystemWorkspaceModel.systemWorkspacePath);
        }
        else {
            metadata = SystemWorkspaceModel.createSystemEnvironment();
        }
        return metadata;
    }
}
exports.SystemWorkspaceModel = SystemWorkspaceModel;
SystemWorkspaceModel.systemWorkspaceFolder = 'SYSTEM_WORKSPACE';
//# sourceMappingURL=system.workspace.model.js.map