"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModel = void 0;
const file_system_1 = require("../../lib/file-system");
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const path_1 = require("path");
const base_model_1 = require("./base.model");
const template_config_model_1 = require("../config/template.config.model");
const CONFIG_FILE_NAME = '.config.json';
class TemplateModel extends base_model_1.BaseModel {
    constructor(path, parent) {
        super(blu_interface_1.BLU.Item.Type.Template);
        this.path = path;
        this.parent = parent;
        this.name = path_1.basename(this.path);
        this.config = new template_config_model_1.TemplateConfig(this.path);
    }
    get metadata() {
        return Object.assign({}, this.info, { fileTree: this.getFileTree() });
    }
    get info() {
        return Object.assign({}, super.info, { path: this.path });
    }
    get collectionName() {
        return this.parent.name;
    }
    getFileList(ignoreConfig = false) {
        return ignoreConfig ? file_system_1.BLUFileSystem.fileList(this.path).filter(f => f.filename !== CONFIG_FILE_NAME) : file_system_1.BLUFileSystem.fileList(this.path);
    }
    getFileTree(ignoreFiles = []) {
        return file_system_1.BLUFileSystem.fileTree(this.path, ignoreFiles);
    }
}
exports.TemplateModel = TemplateModel;
//# sourceMappingURL=template.model.js.map