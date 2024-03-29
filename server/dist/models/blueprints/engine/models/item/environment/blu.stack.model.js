"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUStackModel = void 0;
const blu_interface_1 = require("../../../../../../shared/interfaces/blu.interface");
const blu_environment_model_1 = require("./blu.environment.model");
const file_system_1 = require("../../../lib/file-system");
const path_1 = require("path");
const blu_utils_model_1 = require("../../blu.utils.model");
const blu_environment_data_1 = require("./blu.environment.data");
class BLUStackModel extends blu_environment_model_1.BLUEnvironmentModel {
    constructor(path, id, parent = null) {
        super(path, 'stack', id, blu_interface_1.BLU.Item.Type.Stack, parent);
        this.loadMetadata();
        this.loadStacks();
        this.loadDataMembers();
    }
    get info() {
        return Object.assign({}, super.info, { metadata: this.metadata });
    }
    loadMetadata() {
        var _a;
        this.paths.metadata = (0, path_1.join)(this.paths.self, '..', 'metadata.json');
        this.metadata = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.metadata)) !== null && _a !== void 0 ? _a : this.defaultMetadata();
        this.name = this.metadata.name;
    }
    defaultMetadata() {
        return {
            originalId: null,
            name: null,
            installed: null,
            origin: null
        };
    }
    loadStacks() {
        const excludeFolders = [".git"];
        const stackIDs = file_system_1.BLUFileSystem.getDirectoriesSync(this.paths.stacks, excludeFolders);
        this.stacks.push(...stackIDs.map(id => new BLUStackModel((0, path_1.join)(this.paths.stacks, id, 'blueprints'), id, this)));
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
exports.BLUStackModel = BLUStackModel;
//# sourceMappingURL=blu.stack.model.js.map