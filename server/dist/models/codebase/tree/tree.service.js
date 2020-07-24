"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dirTree = require("directory-tree");
const path = require("path");
const os = require("os");
class TreeService {
    constructor() {
        // todo: this may be overkill since the client is sending the same default exclude dirs but leaving for now
        this.excludeDir = ['node_modules', 'blu', '.idea', '.DS_Store'];
    }
    getTree(rootPath = process.cwd(), excludeDirs = [], foldersOnly = false) {
        const defaultExcludeDirs = this.excludeDir.map(dir => new RegExp(dir));
        const userExcludeDirs = excludeDirs.map(dir => new RegExp(dir));
        excludeDirs = [...new Set([...userExcludeDirs, ...defaultExcludeDirs])];
        const tree = dirTree(rootPath, { exclude: excludeDirs });
        const homedir = os.homedir();
        tree['relativePath'] = path.relative(homedir, rootPath);
        return foldersOnly ? this.filterFolders(tree) : tree;
    }
    filterFolders(tree) {
        const dirs = {
            path: tree.path,
            name: tree.name,
            size: tree.size,
            type: tree.type,
            relativePath: tree['relativePath'],
            children: [],
            extension: tree.extension
        };
        tree.children.forEach(file => {
            if (file.children) {
                dirs.children.push(this.filterFolders(file));
            }
        });
        return dirs;
    }
    findById(treeId) {
        return null;
    }
    create(treeAttributes) {
        return null;
    }
    update(treeId, treeAttributes) {
        return null;
    }
    delete(treeId) {
        return null;
    }
}
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map