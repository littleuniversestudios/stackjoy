"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUFunctionModel = void 0;
const util_1 = require("../../../../../../shared/lib/util");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const blu_utils_model_1 = require("../../blu.utils.model");
class BLUFunctionModel {
    constructor(baseId, parent) {
        this.baseId = baseId;
        this.parent = parent;
        this.init();
    }
    get id() {
        return `${this.parent.id}.${this.baseId}`;
    }
    get name() {
        return this.config.name;
    }
    get description() {
        return this.config.description;
    }
    get info() {
        return {
            id: this.id,
            parentId: this.parent.id,
            name: this.config.name,
            description: this.config.description,
            contents: this.contents
        };
    }
    /**
     * PUBLIC METHODS
     */
    update(name, description, contents) {
        return BLUFunctionModel.storeFunction(this.paths.parent, this.baseId, name, contents, description, this.parent);
    }
    /**
     * PRIVATE MEMBERS
     */
    init() {
        var _a;
        this.setPaths();
        this.config = Object.assign({}, BLUFunctionModel.defaultConfig, (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.config)) !== null && _a !== void 0 ? _a : {});
        this.contents = blu_utils_model_1.BLUUtils.loadFile(this.paths.file);
    }
    setPaths() {
        const parentPath = this.parent.paths.functions;
        const selfPath = (0, path_1.join)(parentPath, this.baseId);
        this.paths = {
            self: selfPath,
            parent: parentPath,
            file: (0, path_1.join)(selfPath, 'function.js'),
            config: (0, path_1.join)(selfPath, 'config.json')
        };
    }
    /**
     * STATIC MEMBERS
     */
    static get defaultConfig() {
        return {
            name: '',
            description: '',
        };
    }
    static createFunction(parentPath, name, contents, description = '', parent) {
        const functionId = (0, util_1.UUIDLong)();
        return BLUFunctionModel.storeFunction(parentPath, functionId, name, contents, description, parent);
    }
    static newId() {
        return (0, util_1.UUIDLong)();
    }
    static storeFunction(parentPath, functionId, name, contents, description = '', parent) {
        const functionPath = (0, path_1.join)(parentPath, functionId);
        try {
            // ensure the directory is created
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(functionPath));
            // create workspace files [config.json, readme.md, variables.json]
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(functionPath, 'config.json'), Object.assign({}, BLUFunctionModel.defaultConfig, { name, description }));
            (0, fs_1.writeFileSync)((0, path_1.join)(functionPath, 'function.js'), contents);
            return { error: null, data: { success: true, function: new BLUFunctionModel(functionId, parent) } };
        }
        catch (error) {
            return { error, data: null };
        }
    }
}
exports.BLUFunctionModel = BLUFunctionModel;
//# sourceMappingURL=blu.function.model.js.map