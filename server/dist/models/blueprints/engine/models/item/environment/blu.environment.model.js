"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUEnvironmentModel = void 0;
const blu_collection_model_1 = require("../blu.collection.model");
const path_1 = require("path");
const file_system_1 = require("../../../lib/file-system");
const blu_interface_1 = require("../../../../../../shared/interfaces/blu.interface");
const blu_base_model_1 = require("../blu.base.model");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const blu_utils_model_1 = require("../../blu.utils.model");
const blu_system_functions_1 = require("../../support/blu.system.functions");
const blu_environment_data_1 = require("./blu.environment.data");
class BLUEnvironmentModel extends blu_base_model_1.BLUBaseModel {
    constructor(path, _name, baseId, type = blu_interface_1.BLU.Item.Type.Workspace, parent = null) {
        super(type);
        this.path = path;
        this._name = _name;
        this.baseId = baseId;
        this.parent = parent;
        this.stacks = [];
        this.dataMembers = {
            models: [],
            inputs: [],
            schema: [],
        };
        this.init();
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    init() {
        var _a;
        this.setPaths();
        this.config = Object.assign({}, this.defaultConfig, (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.config)) !== null && _a !== void 0 ? _a : {});
        this.loadSupportingFiles();
        this.loadCollections();
        this.loadEnvironmentData();
    }
    setPaths() {
        this.paths = {
            self: this.path,
            collections: (0, path_1.join)(this.path, 'collections'),
            stacks: (0, path_1.join)(this.path, 'stacks'),
            functions: (0, path_1.join)(this.path, 'functions'),
            config: (0, path_1.join)(this.path, 'config.json'),
            links: (0, path_1.join)(this.path, 'links.json'),
            data: (0, path_1.join)(this.path, 'data'),
            variables: (0, path_1.join)(this.path, 'variables.json'),
            readme: (0, path_1.join)(this.path, 'readme.md'),
        };
        this.assertPaths();
    }
    get defaultConfig() {
        return {
            name: this.name,
            filenames: '',
            description: '',
        };
    }
    static defaultFunctions(fnContext) {
        return (0, blu_system_functions_1.bluSystemFunctions)(fnContext);
    }
    /**
     *  TREE
     */
    itemTree() {
        const root = this.info;
    }
    /**
     *  STACKS
     */
    deleteStack(id) {
        const stack = this.getStack(id);
        if (stack) {
            try {
                // path.self refers to the 'blueprints' of the folder
                // so we go up a folder to delete itself
                // todo: path.self should really be paths.blueprints
                (0, fs_extra_1.removeSync)((0, path_1.join)(stack.paths.self, '../'));
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'stack-delete-error', message: `Error occurred trying to delete stack with id: '${id}'`, error }, data: { success: false } };
            }
        }
        else {
            return { error: { status: 400, code: 'stack-not-found', message: `Collection with id: '${id}' was not found.` }, data: { success: false } };
        }
    }
    getStack(id) {
        return this.stacks.find(stack => stack.id === id);
    }
    /**
     *  COLLECTIONS
     */
    loadCollections() {
        const excludeFolders = [".git"];
        const collectionIDs = file_system_1.BLUFileSystem.getDirectoriesSync(this.paths.collections, excludeFolders);
        this.children.push(...collectionIDs.map(id => new blu_collection_model_1.BLUCollectionModel(id, this)));
    }
    getCollection(id) {
        return this.getCollections().find(collection => collection.id === id);
    }
    getCollections() {
        return this.children.filter(item => item.type === blu_interface_1.BLU.Item.Type.Collection);
    }
    createCollection(name) {
        const result = blu_collection_model_1.BLUCollectionModel.createCollection(this.paths.collections, name, this);
        if (!result.error) {
            const collection = result.data;
            return { error: result.error, data: { success: true, collection } };
        }
        else {
            return { error: result.error, data: { success: false, collection: null } };
        }
    }
    renameCollection(id, name) {
        const collection = this.getCollection(id);
        if (collection) {
            return collection.renameCollection(name);
        }
        else {
            return { error: { status: 400, code: 'collection-not-found', message: `Collection with id: '${id}' was not found.` }, data: null };
        }
    }
    deleteCollection(id) {
        const collection = this.getCollection(id);
        if (collection) {
            try {
                (0, fs_extra_1.removeSync)(collection.paths.self);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'collection-delete-error', message: `Error occurred trying to delete collection with id: '${id}'`, error }, data: { success: false } };
            }
        }
        else {
            return { error: { status: 400, code: 'collection-not-found', message: `Collection with id: '${id}' was not found.` }, data: { success: false } };
        }
    }
    /**
     * add collection by copying it and inserting it into the workspace
     * @param collection
     */
    addCollection(collection) {
        const result = blu_collection_model_1.BLUCollectionModel.copyCollection(this, collection);
        if (!result.error) {
            const collection = result.data;
            return { error: result.error, data: { success: true, collection } };
        }
        else {
            return { error: result.error, data: { success: false, collection: null } };
        }
    }
    /**
     * ENVIRONMENT DATA
     */
    loadEnvironmentData() {
        this.environmentData = new blu_environment_data_1.BLUEnvironmentData(this);
    }
    /**
     * STATIC MEMBERS
     */
    static createWorkspace(path) {
        const blueprintsPath = (0, path_1.join)(path, 'blueprints');
        try {
            // make sure the directory exists
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(blueprintsPath));
            // create workspace files [config.json, readme.md, variables.json]
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(blueprintsPath, 'config.json'), {});
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(blueprintsPath, 'variables.json'), {});
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(blueprintsPath, 'links.json'), {});
            (0, fs_1.writeFileSync)((0, path_1.join)(blueprintsPath, 'readme.md'), '');
            // create the other subdirectories
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(blueprintsPath, 'collections'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(blueprintsPath, 'functions'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(blueprintsPath, 'stacks'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(blueprintsPath, 'data'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(blueprintsPath, 'snippets'));
            return { error: null, success: true };
        }
        catch (error) {
            return { error, success: false };
        }
    }
}
exports.BLUEnvironmentModel = BLUEnvironmentModel;
//# sourceMappingURL=blu.environment.model.js.map