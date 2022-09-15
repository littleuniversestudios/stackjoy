"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUFileSystem = void 0;
const fs_1 = require("fs");
const fse = require("fs-extra");
const path_1 = require("path");
const utils_1 = require("./utils");
class BLUFileSystem {
}
exports.BLUFileSystem = BLUFileSystem;
BLUFileSystem.dirExistsSync = (path) => fs_1.existsSync(path);
BLUFileSystem.fileExistsSync = (path) => fs_1.existsSync(path);
BLUFileSystem.isDirectorySync = path => fse.lstatSync(path).isDirectory();
BLUFileSystem.getDirectoryFilesSync = (source) => fse.readdirSync(source).filter(n => !BLUFileSystem.isDirectorySync(path_1.join(source, n)));
BLUFileSystem.getDirectoriesSync = (source, exclude = []) => fse.readdirSync(source).filter(n => !exclude.includes(n) && BLUFileSystem.isDirectorySync(path_1.join(source, n)));
BLUFileSystem.getAllFileNamesSync = (source) => fse.readdirSync(source);
BLUFileSystem.getLastDirectoryName = (filePath) => filePath.split(path_1.sep).reverse()[0];
BLUFileSystem.isRelativePath = (path) => path.substring(0, 2) === './';
BLUFileSystem.isAbsolutePath = (path) => path.substring(0, 1) === '/';
/**
 * Recursively goes through a folder and returns a flat list of all files found in the folder and its sub-folders
 * @param folderPath folder to traverse
 */
BLUFileSystem.fileList = (folderPath) => {
    const listFiles = (rootPath, allFiles = []) => {
        const templateFilenames = BLUFileSystem.getAllFileNamesSync(rootPath);
        templateFilenames.forEach(filename => {
            const absolutePath = path_1.join(rootPath, filename);
            const relativePath = path_1.relative(folderPath, rootPath);
            const id = utils_1.Utils.UUIDShort();
            BLUFileSystem.isDirectorySync(absolutePath) ? listFiles(absolutePath, allFiles) : allFiles.push({ filename, relativePath, absolutePath, id });
        });
        return allFiles;
    };
    return listFiles(folderPath);
};
/**
 * Recursively goes through a folder and returns a flat list of all files found in the folder and its sub-folders
 * @param folderPath folder to traverse
 * @param ignoreFiles fileNames to ignore (optional)
 */
BLUFileSystem.fileTree = (folderPath, ignoreFiles = []) => {
    const treeStruct = (rootPath) => {
        const tree = {
            folderName: BLUFileSystem.getLastDirectoryName(rootPath),
            absolutePath: rootPath,
            files: [],
            subFolders: [],
        };
        const filenames = BLUFileSystem.getAllFileNamesSync(rootPath);
        filenames.forEach(filename => {
            if (!ignoreFiles.includes(filename)) {
                const absolutePath = path_1.join(rootPath, filename);
                const relativePath = path_1.relative(folderPath, rootPath);
                const id = utils_1.Utils.UUIDShort();
                BLUFileSystem.isDirectorySync(absolutePath) ? tree.subFolders.push(treeStruct(absolutePath)) : tree.files.push({ filename, relativePath, absolutePath, id });
            }
        });
        return tree;
    };
    return treeStruct(folderPath);
};
//# sourceMappingURL=file-system.js.map