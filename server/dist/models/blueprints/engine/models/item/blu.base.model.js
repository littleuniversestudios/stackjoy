"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUBaseModel = void 0;
const blu_interface_1 = require("../../../../../shared/interfaces/blu.interface");
const fs_extra_1 = require("fs-extra");
const blu_utils_model_1 = require("../blu.utils.model");
const blu_function_model_1 = require("./parts/blu.function.model");
const file_system_1 = require("../../lib/file-system");
const path_1 = require("path");
class BLUBaseModel {
    constructor(type) {
        this.type = type;
        this._functions = [];
        this.parent = null;
        this.children = [];
    }
    get id() {
        return (this.type === blu_interface_1.BLU.Item.Type.Stack || this.type === blu_interface_1.BLU.Item.Type.Workspace) ? this.baseId : `${this.parent.id}.${this.baseId}`;
    }
    /**
     * After updating to typescript 4+, typescript would not allow to have a property (in this case 'name') in the base class and then
     * have is as an accessor in the extended class (like we have in blu.collection.model.ts). so now we use _name as a protected property
     * and 'name' as an accessor in base class and everywhere else.
     */
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get functions() {
        return this._functions.map(f => ({
            id: f.id,
            name: f.config.name,
            description: f.config.description,
            execFunc: f.contents,
            origin: { type: this.type, name: this.name }
        }));
    }
    get variables() {
        return Object.keys(this._variables)
            .map(key => Object.assign({}, { name: key, value: this._variables[key], origin: { name: this.name, type: this.type } }));
    }
    /**
     * Settings is config without the name, we don't want to mix up the name of the template with the
     * name provided by the user when generating the template
     */
    get settings() {
        const settings = Object.assign({}, this.config);
        delete settings['name'];
        return settings;
    }
    get context() {
        return {
            variables: [...this.variables],
            functions: [...this.functions]
        };
    }
    get info() {
        return {
            id: this.id,
            namespace: `${this.parent ? `${this.parent.name}.` : ''}${this.name}`,
            name: this.name,
            config: this.config,
            type: this.type,
            parent: this.parent ? this.parent.info : null,
            description: this.config.description,
            settings: {},
            links: [],
            readme: this.readme,
            variables: this._variables,
            functions: this._functions.map(f => f.info),
        };
    }
    getFileList(ignoreConfig = false) {
        return [];
    }
    getFileTree(ignoreFiles = []) {
        return null;
    }
    updateConfig(config) {
        this.config = Object.assign({}, this.config, config);
        return this.saveJSONFile(this.paths.config, this.config);
    }
    updateReadme(readme) {
        this.readme = readme;
        return this.saveFile(this.paths.readme, this.readme);
    }
    updateLinks(links) {
        this.links = links;
        return this.saveJSONFile(this.paths.links, this.links);
    }
    updateVariables(variables) {
        this._variables = variables;
        return this.saveJSONFile(this.paths.variables, this._variables);
    }
    assertPaths() {
        Object.keys(this.paths).forEach(pathName => {
            const path = this.paths[pathName];
            (0, path_1.extname)(path) ? (0, fs_extra_1.ensureFileSync)(path) : (0, fs_extra_1.ensureDirSync)(path);
        });
    }
    saveJSONFile(path, value) {
        return blu_utils_model_1.BLUUtils.saveJSONFile(path, value);
    }
    saveFile(path, value) {
        return blu_utils_model_1.BLUUtils.saveFile(path, value);
    }
    loadSupportingFiles() {
        this._variables = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.variables);
        this.links = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.links);
        this.readme = blu_utils_model_1.BLUUtils.loadFile(this.paths.readme);
        this.loadFunctions();
    }
    loadFunctions() {
        const functionIDs = file_system_1.BLUFileSystem.getDirectoriesSync(this.paths.functions);
        this._functions = functionIDs.map(functionID => new blu_function_model_1.BLUFunctionModel(functionID, this));
    }
    createFunction(name, description, contents) {
        const result = blu_function_model_1.BLUFunctionModel.createFunction(this.paths.functions, name, contents, description, this);
        if (result.error) {
            return { error: result.error, data: { success: false, function: null } };
        }
        else {
            this._functions.push(result.data.function);
            return { error: null, data: { success: true, function: result.data.function.info } };
        }
    }
}
exports.BLUBaseModel = BLUBaseModel;
//# sourceMappingURL=blu.base.model.js.map