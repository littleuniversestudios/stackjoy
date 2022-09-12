"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeService = void 0;
const tree_model_1 = require("./tree.model");
const globals_1 = require("../../../globals");
class TreeService {
    constructor() {
        // todo: this may be overkill since the client is sending the same default exclude dirs but leaving for now
        this.defaultExcludeDir = ['node_modules', '.idea', '.DS_Store', '.stackjoy'];
    }
    getTree(rootPath = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.metadata.codebasePath, excludeDirs = [], foldersOnly = false, deep = true) {
        excludeDirs = excludeDirs.filter(d => !!d);
        excludeDirs = [...new Set([...excludeDirs, ...this.defaultExcludeDir])];
        return new tree_model_1.DirectoryTreeModel(rootPath, { exclude: excludeDirs, foldersOnly, deep });
    }
}
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map