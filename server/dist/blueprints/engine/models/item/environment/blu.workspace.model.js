"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUWorkspaceModel = void 0;
const blu_interface_1 = require("../../../../../shared/interfaces/blu.interface");
const blu_environment_model_1 = require("./blu.environment.model");
const file_system_1 = require("../../../lib/file-system");
const path_1 = require("path");
const blu_stack_model_1 = require("./blu.stack.model");
const blu_environment_data_1 = require("./blu.environment.data");
class BLUWorkspaceModel extends blu_environment_model_1.BLUEnvironmentModel {
    constructor(path, name) {
        super(path, name, 'workspace', blu_interface_1.BLU.Item.Type.Workspace, null);
        this.name = name;
        this.loadStacks();
        this.loadDataMembers();
    }
    loadStacks() {
        const excludeFolders = [".git"];
        const stackIDs = file_system_1.BLUFileSystem.getDirectoriesSync(this.paths.stacks, excludeFolders);
        this.stacks.push(...stackIDs.map(id => new blu_stack_model_1.BLUStackModel(path_1.join(this.paths.stacks, id, 'blueprints'), id, this)));
        this.children.push(...this.stacks);
    }
    loadDataMembers() {
        blu_environment_data_1.BLUEnvironmentData.dataTypes.forEach(dataType => {
            this.stacks.forEach(stack => this.addDataMembers(stack.environmentData.getDataMembersByType(dataType), dataType));
            this.addDataMembers(this.environmentData.getDataMembersByType(dataType), dataType);
        });
    }
    addDataMembers(dataMembers, dataType) {
        switch (dataType) {
            case blu_interface_1.BLU.Data.Type.model:
                this.dataMembers.models.push(...dataMembers);
                break;
            case blu_interface_1.BLU.Data.Type.input:
                this.dataMembers.inputs.push(...dataMembers);
                break;
            case blu_interface_1.BLU.Data.Type.schema:
                this.dataMembers.schema.push(...dataMembers);
                break;
        }
    }
}
exports.BLUWorkspaceModel = BLUWorkspaceModel;
//# sourceMappingURL=blu.workspace.model.js.map