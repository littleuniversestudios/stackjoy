"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeService = void 0;
const globals_1 = require("../../globals");
const tree_model_1 = require("./tree.model");
class TreeService {
    constructor() {
        // todo: this may be overkill since the client is sending the same default exclude dirs but leaving for now
        this.defaultExcludeDir = ['node_modules', '.idea', '.DS_Store', '.stackjoy', 'blu'];
        // public getTree(rootPath: string = process.cwd(), excludeDirs: any[] = [], foldersOnly: boolean = false): directoryTree.DirectoryTree {
        //     const defaultExcludeDirs: RegExp[] = this.defaultExcludeDir.map(dir => new RegExp(dir));
        //     const userExcludeDirs: RegExp[] = excludeDirs.map(dir => new RegExp(dir));
        //     console.log('', excludeDirs)
        //     excludeDirs = [...new Set([...userExcludeDirs, ...defaultExcludeDirs])];
        //     const tree = dirTree(rootPath, { exclude: excludeDirs });
        //     const homedir = os.homedir();
        //     tree['relativePath'] = path.relative(homedir, rootPath);
        //     return foldersOnly ? this.filterFolders(tree) : tree;
        // }
        // private filterFolders(tree: directoryTree.DirectoryTree): directoryTree.DirectoryTree {
        //     const dirs = {
        //         path: tree.path,
        //         name: tree.name,
        //         size: tree.size,
        //         type: tree.type,
        //         relativePath: tree['relativePath'],
        //         children: [],
        //         extension: tree.extension
        //     };
        //     tree.children.forEach(file => {
        //         if (file.children) {
        //             dirs.children.push(this.filterFolders(file));
        //         }
        //     });
        //     return dirs;
        // }
    }
    getTree(rootPath = globals_1.WORKSPACE.metadata.codebasePath, excludeDirs = [], foldersOnly = false, deep = true) {
        excludeDirs = excludeDirs.filter(d => !!d);
        excludeDirs = [...new Set([...excludeDirs, ...this.defaultExcludeDir])];
        const tree = new tree_model_1.DirectoryTreeModel(rootPath, { exclude: excludeDirs, foldersOnly, deep });
        return tree;
    }
}
exports.TreeService = TreeService;
//# sourceMappingURL=tree.service.js.map