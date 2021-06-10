"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
class BaseModel {
    constructor(type) {
        this.type = type;
        this.parent = null;
        this.children = [];
    }
    get functions() {
        return this.config.functions.map(f => Object.assign({}, f, { origin: { type: this.type, name: this.name } }));
    }
    get variables() {
        return Object.keys(this.config.variables).map(key => Object.assign({}, { name: key, value: this.config.variables[key] }, { origin: { type: this.type, name: this.name } }));
    }
    get context() {
        return {
            variables: [...this.variables],
            functions: [...this.functions]
        };
    }
    get info() {
        return {
            id: `${this.type}:${this.parent ? `${this.parent.name}.` : ''}${this.name}`,
            name: this.name,
            path: this.path,
            config: this.config.config,
            configPath: this.config.path,
            type: this.type,
            parent: this.parent ? this.parent.info : null,
            description: this.config.settings.description,
            settings: this.config.settings,
            inputs: this.config.inputs,
            links: this.config.links,
            readme: this.config.readme,
            variables: this.variables,
            functions: this.functions,
            snippets: this.config.snippets,
        };
    }
    getFileList(ignoreConfig = false) {
        return [];
    }
    getFileTree(ignoreFiles = []) {
        return null;
    }
}
exports.BaseModel = BaseModel;
//# sourceMappingURL=base.model.js.map