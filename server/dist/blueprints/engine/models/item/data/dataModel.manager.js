"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMember = exports.DataModelManager = void 0;
const blu_interface_1 = require("../../../../../shared/interfaces/blu.interface");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const file_system_1 = require("../../../lib/file-system");
const util_1 = require("../../../../../shared/lib/util");
const blu_utils_model_1 = require("../../blu-utils.model");
const path = require("path");
/**
 * dataModel.model...hah, fuckin' brilliant, should have called them Classes
 * like any normal person would...you ding-dong
 */
class DataModelManager {
    constructor(parent) {
        this.parent = parent;
        this.models = [];
        this.inputs = [];
        this.schema = [];
        this.init();
    }
    /**
     * PUBLIC METHODS
     */
    get folders() {
        return DataModelManager.folders;
    }
    // update(name: string, description: string, contents: string): { error: any, data: { success: boolean, function: BLU.Function.Model } } {
    //     // return FunctionModel.storeFunction(this.paths.parent, this.baseId, name, contents, description, this.parent);
    // }
    /**
     * PRIVATE MEMBERS
     */
    init() {
        this.setPaths();
        this.loadDataMembers();
        // console.log('', new DataInput('aaaa', "", this.parent))
        // this.createDataMember({ test: 1242 }, BLU.Data.Type.input)
    }
    setPaths() {
        const parentPath = this.parent.paths.functions;
        this.paths = {
            models: path_1.join(this.parent.paths.data, this.folders.models),
            inputs: path_1.join(this.parent.paths.data, this.folders.inputs),
            schema: path_1.join(this.parent.paths.data, this.folders.schema),
            parent: parentPath,
        };
        this.assertPaths();
    }
    assertPaths() {
        Object.keys(this.folders).forEach(folderName => fs_extra_1.ensureDirSync(this.paths[folderName]));
    }
    loadDataMembers() {
        const allDataTypes = [blu_interface_1.BLU.Data.Type.model, blu_interface_1.BLU.Data.Type.input, blu_interface_1.BLU.Data.Type.schema];
        allDataTypes.forEach(dataType => {
            const files = file_system_1.BLUFileSystem.fileList(this.getPathByType(dataType));
            const dataMembers = [];
            files.forEach(file => {
                const extension = path.extname(file.filename);
                const id = path.basename(file.filename, extension);
                dataMembers.push(new DataMember(id, this.parent, dataType, file.absolutePath));
            });
            switch (dataType) {
                case blu_interface_1.BLU.Data.Type.input:
                    this.inputs = dataMembers;
                    break;
                case blu_interface_1.BLU.Data.Type.model:
                    this.models = dataMembers;
                    break;
                case blu_interface_1.BLU.Data.Type.schema:
                    this.schema = dataMembers;
                    break;
            }
        });
    }
    getPathByType(dataType) {
        switch (dataType) {
            case blu_interface_1.BLU.Data.Type.input:
                return this.paths.inputs;
            case blu_interface_1.BLU.Data.Type.model:
                return this.paths.models;
            case blu_interface_1.BLU.Data.Type.schema:
                return this.paths.schema;
        }
    }
    saveDataMember(contents, type) {
        const id = util_1.UUIDLong();
        const filePath = path_1.join(this.getPathByType(type), `${id}.json`);
        blu_utils_model_1.BLUUtils.saveJSONFile(filePath, contents);
        return { error: null, data: { success: true, dataMember: new DataMember(id, this.parent, type, filePath) } };
    }
    /**
     * STATIC MEMBERS
     */
    static getFolder(dataType) {
        switch (dataType) {
            case blu_interface_1.BLU.Data.Type.input:
                return DataModelManager.folders.inputs;
            case blu_interface_1.BLU.Data.Type.model:
                return DataModelManager.folders.models;
            case blu_interface_1.BLU.Data.Type.schema:
                return DataModelManager.folders.schema;
        }
    }
}
exports.DataModelManager = DataModelManager;
DataModelManager.folders = {
    models: 'models',
    inputs: 'inputs',
    schema: 'schema',
};
class DataMember {
    constructor(id, parent, type, filePath) {
        var _a;
        this.id = id;
        this.parent = parent;
        this.type = type;
        this.paths = { self: filePath };
        this.contents = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(filePath)) !== null && _a !== void 0 ? _a : {};
    }
    get info() {
        return {
            id: this.id,
            parent: this.parent.info,
            contents: this.contents,
            type: this.type
        };
    }
}
exports.DataMember = DataMember;
//# sourceMappingURL=dataModel.manager.js.map