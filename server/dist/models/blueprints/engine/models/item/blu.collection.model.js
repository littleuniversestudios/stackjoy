"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUCollectionModel = void 0;
const file_system_1 = require("../../lib/file-system");
const path_1 = require("path");
const blu_interface_1 = require("../../../../../shared/interfaces/blu.interface");
const blu_template_model_1 = require("./blu.template.model");
const blu_base_model_1 = require("./blu.base.model");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const util_1 = require("../../../../../shared/lib/util");
const blu_utils_model_1 = require("../blu.utils.model");
class BLUCollectionModel extends blu_base_model_1.BLUBaseModel {
    constructor(baseId, parent) {
        super(blu_interface_1.BLU.Item.Type.Collection);
        this.baseId = baseId;
        this.parent = parent;
        this.templates = [];
        this.init();
    }
    get name() {
        return this.config.name;
    }
    set name(name) {
        this.config.name = name;
    }
    init() {
        var _a;
        this.setPaths();
        this.config = Object.assign({}, BLUCollectionModel.defaultConfig, (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.config)) !== null && _a !== void 0 ? _a : {});
        this.loadSupportingFiles();
        this.loadTemplates();
    }
    setPaths() {
        const parentPath = this.parent.paths.collections;
        const selfPath = (0, path_1.join)(parentPath, this.baseId);
        this.paths = {
            parent: parentPath,
            self: selfPath,
            templates: (0, path_1.join)(selfPath, 'templates'),
            functions: (0, path_1.join)(selfPath, 'functions'),
            config: (0, path_1.join)(selfPath, 'config.json'),
            links: (0, path_1.join)(selfPath, 'links.json'),
            variables: (0, path_1.join)(selfPath, 'variables.json'),
            readme: (0, path_1.join)(selfPath, 'readme.md'),
        };
        this.assertPaths();
    }
    renameCollection(name) {
        this.name = name;
        return this.updateConfig(this.config);
    }
    /**
     * TEMPLATES
     */
    loadTemplates() {
        const templateIDs = file_system_1.BLUFileSystem.getDirectoriesSync(this.paths.templates);
        this.templates = templateIDs.map(templateID => new blu_template_model_1.BLUTemplateModel(templateID, this));
        this.children.push(...this.templates);
    }
    createTemplate(name, files) {
        const result = blu_template_model_1.BLUTemplateModel.createTemplate(this.paths.templates, name, this, files);
        if (!result.error) {
            const template = result.data;
            return { error: result.error, data: { success: true, template } };
        }
        else {
            return { error: result.error, data: { success: false, template: null } };
        }
    }
    /**
     * Utils
     */
    /**
     * When a collection is duplicated, the chains within it have the links (ids) to all
     * the templates hardcoded, so we have to replace the old collection id within the link
     * with the new one
     */
    renameIds(oldCollectionId, newCollectionId) {
        // todo: go through each chain and update the renamed ids in the chains
        // this.chains.forEach(chain => chain.renameIds(oldCollectionId, newCollectionId))
    }
    /**
     * STATIC METHODS
     */
    static get defaultConfig() {
        return {
            name: '',
            filenames: '',
            description: '',
        };
    }
    static createCollection(path, name, parent) {
        const collectionId = (0, util_1.UUIDMedium)();
        const collectionPath = (0, path_1.join)(path, collectionId);
        try {
            // ensure the directory is created
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(collectionPath));
            // create collection files [config.json, readme.md, variables.json, links]
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(collectionPath, 'config.json'), Object.assign({}, BLUCollectionModel.defaultConfig, { name }));
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(collectionPath, 'variables.json'), {});
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(collectionPath, 'links.json'), {});
            (0, fs_1.writeFileSync)((0, path_1.join)(collectionPath, 'readme.md'), '');
            // create the other sub directories
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(collectionPath, 'functions'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(collectionPath, 'templates'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(collectionPath, 'chains'));
            return { error: null, data: new BLUCollectionModel(collectionId, parent) };
        }
        catch (error) {
            return { error, data: null };
        }
    }
    static copyCollection(workspace, collectionToCopy) {
        const newCollectionBaseId = (0, util_1.UUIDMedium)();
        const newCollectionPath = (0, path_1.join)(workspace.paths.collections, newCollectionBaseId);
        try {
            (0, fs_extra_1.copySync)(collectionToCopy.paths.self, newCollectionPath);
            const newCollection = new BLUCollectionModel(newCollectionBaseId, workspace);
            newCollection.renameIds(collectionToCopy.id, newCollection.id);
            return { error: null, data: newCollection };
        }
        catch (error) {
            return { error, data: null };
        }
    }
}
exports.BLUCollectionModel = BLUCollectionModel;
//# sourceMappingURL=blu.collection.model.js.map