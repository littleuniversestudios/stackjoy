"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionModel = void 0;
const file_system_1 = require("../../lib/file-system");
const path_1 = require("path");
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const template_model_1 = require("./template.model");
const base_model_1 = require("./base.model");
const chain_model_1 = require("./chain.model");
const collection_config_model_1 = require("../config/collection.config.model");
class CollectionModel extends base_model_1.BaseModel {
    constructor(path, parent) {
        super(blu_interface_1.BLU.Item.Type.Collection);
        this.path = path;
        this.parent = parent;
        this.templates = [];
        this.chains = [];
        this.name = path_1.basename(this.path);
        this.init();
    }
    get info() {
        return Object.assign({}, super.info, { path: this.path });
    }
    init() {
        this.config = new collection_config_model_1.CollectionConfig(this.path);
        this.initTemplates();
        this.initChains();
    }
    initTemplates() {
        const templateDirs = file_system_1.BLUFileSystem.getDirectoriesSync(this.path);
        this.templates = templateDirs.map(templateDir => new template_model_1.TemplateModel(path_1.join(this.path, templateDir), this));
        this.children.push(...this.templates);
    }
    initChains() {
        this.chains = this.config.chains.map(chainConfig => new chain_model_1.ChainModel(chainConfig, this, this.path));
        this.children.push(...this.chains);
    }
}
exports.CollectionModel = CollectionModel;
//# sourceMappingURL=collection.model.js.map