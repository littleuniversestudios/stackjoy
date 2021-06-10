"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryTreeModel = void 0;
const nodePath = require("path");
const os = require("os");
const FS = require('fs');
const PATH = require('path');
const constants = {
    DIRECTORY: 'directory',
    FILE: 'file'
};
class DirectoryTreeModel {
    constructor(root, options = {}) {
        this.root = root;
        this.homePath = os.homedir();
        this.options = Object.assign({}, DirectoryTreeModel.defaultOptions(), options);
        this.tree = this.getDirectoryTree(root, this.options);
        this.relativeHomePath = nodePath.relative(this.homePath, root);
    }
    static defaultOptions() {
        return {
            exclude: [],
            foldersOnly: false,
            deep: true,
            normalizePath: false,
        };
    }
    static safeReadDirSync(path) {
        let dirData = [];
        try {
            dirData = FS.readdirSync(path);
        }
        catch (ex) {
            if (ex.code == "EACCES" || ex.code == "EPERM") {
                //User does not have permissions, ignore directory
                return null;
            }
            else
                throw ex;
        }
        return dirData;
    }
    /**
     * Normalizes windows style paths by replacing double backslahes with single forward slahes (unix style).
     * @param  {string} path
     * @return {string}
     */
    static normalizePath(path) {
        return path.replace(/\\/g, '/');
    }
    /**
     * Collects the files and folders for a directory path into an Object, subject
     * to the options supplied, and invoking optional
     * @param  {String} path
     * @param  {Object} options
     * @return {Object}
     */
    getDirectoryTree(path, options) {
        const name = PATH.basename(path);
        path = options.normalizePath ? DirectoryTreeModel.normalizePath(path) : path;
        const relativePath = nodePath.relative(this.root, path);
        const item = { path, name, relativePath, type: null };
        let stats;
        try {
            stats = FS.statSync(path);
        }
        catch (e) {
            return null;
        }
        // Skip if it matches anything in the exclude list
        if (options.exclude.some((exclusion) => item.name === exclusion || item.relativePath === exclusion)) {
            return null;
        }
        if (stats.isFile() && !options.foldersOnly) {
            const ext = PATH.extname(path).toLowerCase();
            item.extension = ext;
            item.type = constants.FILE;
        }
        else if (stats.isDirectory()) {
            let dirData = DirectoryTreeModel.safeReadDirSync(path);
            if (dirData === null)
                return null;
            item.type = constants.DIRECTORY;
            if (options.deep) {
                item.children = dirData
                    .map(child => this.getDirectoryTree(PATH.join(path, child), options))
                    .filter(e => !!e);
            }
        }
        else {
            return null;
        }
        return item;
    }
}
exports.DirectoryTreeModel = DirectoryTreeModel;
//# sourceMappingURL=tree.model.js.map