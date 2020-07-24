"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
const fs = require("fs-extra");
const path_1 = require("path");
class FileSystem {
}
exports.FileSystem = FileSystem;
FileSystem.dirExistsSync = (path) => fs.existsSync(path);
FileSystem.fileExistsSync = (path) => fs.existsSync(path);
FileSystem.copySync = (src, destination) => fs.copySync(src, destination);
FileSystem.removeSync = (path) => fs.removeSync(path);
FileSystem.isDirectorySync = path => fs.lstatSync(path).isDirectory();
FileSystem.getDirectoryFilesSync = (source) => fs.readdirSync(source).filter(n => !FileSystem.isDirectorySync(path_1.join(source, n)));
FileSystem.getDirectoriesSync = (source) => fs.readdirSync(source).filter(n => FileSystem.isDirectorySync(path_1.join(source, n)));
FileSystem.getAllFileNamesSync = (source) => fs.readdirSync(source);
FileSystem.getLastDirectoryName = (filePath) => filePath.split(path_1.sep).reverse()[0];
FileSystem.isRelativePath = (path) => path.substring(0, 2) === './';
FileSystem.isAbsolutePath = (path) => path.substring(0, 1) === '/';
//# sourceMappingURL=file-system.js.map