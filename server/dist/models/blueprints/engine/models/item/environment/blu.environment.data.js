"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMember = exports.BLUEnvironmentData = void 0;
const blu_interface_1 = require("../../../../../../shared/interfaces/blu.interface");
const path = require("path");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const file_system_1 = require("../../../lib/file-system");
const util_1 = require("../../../../../../shared/lib/util");
const blu_utils_model_1 = require("../../blu.utils.model");
/**
 * dataModel.model...hah, fuckin' brilliant, should have called them Classes
 * like any normal person would...you ding-dong
 */
class BLUEnvironmentData {
    constructor(parent) {
        this.parent = parent;
        this.folders = {
            models: 'models',
            inputs: 'inputs',
            schema: 'schema',
        };
        this.models = [];
        this.inputs = [];
        this.schema = [];
        this.init();
    }
    /**
     * PUBLIC METHODS
     */
    // update(name: string, description: string, contents: string): { error: any, data: { success: boolean, function: BLU.Function.Model } } {
    //     // return FunctionModel.storeFunction(this.paths.parent, this.baseId, name, contents, description, this.parent);
    // }
    getDataMembersByType(dataType) {
        switch (dataType) {
            case blu_interface_1.BLU.Data.Type.input:
                return this.inputs;
            case blu_interface_1.BLU.Data.Type.model:
                return this.models;
            case blu_interface_1.BLU.Data.Type.schema:
                return this.schema;
        }
    }
    createDataMember(type, contents) {
        const id = (0, util_1.UUIDLong)();
        const filePath = (0, path_1.join)(this.getPathByType(type), `${id}.json`);
        blu_utils_model_1.BLUUtils.saveJSONFile(filePath, contents !== null && contents !== void 0 ? contents : null);
        return { error: null, data: { success: true, dataMember: new DataMember(id, this.parent, type, filePath) } };
    }
    static updateDataMember(dataMember, contents) {
        return blu_utils_model_1.BLUUtils.saveJSONFile(dataMember.paths.self, contents);
    }
    static deleteDataMember(dataMember) {
        try {
            (0, fs_extra_1.removeSync)(dataMember.paths.self);
            return { error: null, data: { success: true } };
        }
        catch (error) {
            return {
                error: {
                    status: 400, code: 'data-member-delete-error',
                    message: `Error occurred trying to delete data member with parentId: '${dataMember.parent.id}' and id: '${dataMember.id}'`,
                    error
                }, data: { success: false }
            };
        }
    }
    /**
     * PRIVATE MEMBERS
     */
    init() {
        this.setPaths();
        this.loadDataMembers();
    }
    setPaths() {
        const parentPath = this.parent.paths.functions;
        this.paths = {
            models: (0, path_1.join)(this.parent.paths.data, this.folders.models),
            inputs: (0, path_1.join)(this.parent.paths.data, this.folders.inputs),
            schema: (0, path_1.join)(this.parent.paths.data, this.folders.schema),
            parent: parentPath,
        };
        this.assertPaths();
    }
    assertPaths() {
        Object.keys(this.folders).forEach(folderName => (0, fs_extra_1.ensureDirSync)(this.paths[folderName]));
    }
    loadDataMembers() {
        BLUEnvironmentData.dataTypes.forEach(dataType => {
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
}
exports.BLUEnvironmentData = BLUEnvironmentData;
BLUEnvironmentData.dataTypes = [blu_interface_1.BLU.Data.Type.model, blu_interface_1.BLU.Data.Type.input, blu_interface_1.BLU.Data.Type.schema];
class DataMember {
    constructor(id, parent, type, filePath) {
        var _a;
        this.id = id;
        this.parent = parent;
        this.type = type;
        this.paths = { self: filePath };
        this.contents = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(filePath)) !== null && _a !== void 0 ? _a : null;
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
//# sourceMappingURL=blu.environment.data.js.map