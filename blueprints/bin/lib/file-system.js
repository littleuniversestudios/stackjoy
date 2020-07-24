"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
const fs_1 = require("fs");
const fse = require("fs-extra");
const path_1 = require("path");
const globals_1 = require("../context/globals");
class FileSystem {
}
exports.FileSystem = FileSystem;
FileSystem.dirExistsSync = (path) => fs_1.existsSync(path);
FileSystem.fileExistsSync = (path) => fs_1.existsSync(path);
FileSystem.isDirectorySync = path => fse.lstatSync(path).isDirectory();
FileSystem.getDirectoryFilesSync = (source) => fse.readdirSync(source).filter(n => !FileSystem.isDirectorySync(path_1.join(source, n)));
FileSystem.getDirectoriesSync = (source) => fse.readdirSync(source).filter(n => FileSystem.isDirectorySync(path_1.join(source, n)));
FileSystem.getAllFileNamesSync = (source) => fse.readdirSync(source);
FileSystem.getLastDirectoryName = (filePath) => filePath.split(path_1.sep).reverse()[0];
FileSystem.isRelativePath = (path) => path.substring(0, 2) === './';
FileSystem.isAbsolutePath = (path) => path.substring(0, 1) === '/';
FileSystem.getConfigFileSync = (source, fileFormat = 'utf8') => {
    let configFile;
    try {
        configFile = fs_1.readFileSync(source, fileFormat);
    }
    catch (e) {
        return { error: false, config: null };
    }
    try {
        const configFileJSON = JSON.parse(configFile);
        return { error: false, config: configFileJSON };
    }
    catch (e) {
        return { error: true, config: null };
    }
};
FileSystem.getFormatsFileSync = (source, fileFormat = 'utf8') => {
    try {
        const jsFile = fs_1.readFileSync(source, fileFormat);
        return eval(jsFile);
    }
    catch (e) {
        return null;
    }
};
/**
 * Recursively goes through a folder and returns a flat list of all files found in the folder and its sub-folders
 * @param folderPath folder to traverse
 */
FileSystem.listAllFiles = (folderPath) => {
    const listFiles = (rootPath, allFiles = []) => {
        const templateFilenames = FileSystem.getAllFileNamesSync(rootPath);
        templateFilenames.forEach(filename => {
            const absolutePath = path_1.join(rootPath, filename);
            const relativePath = path_1.relative(folderPath, rootPath);
            FileSystem.isDirectorySync(absolutePath) ? listFiles(absolutePath, allFiles) : allFiles.push({ filename, relativePath, absolutePath });
        });
        return allFiles;
    };
    return listFiles(folderPath);
};
/**
 * Attempts to find the project root OR where the 'blueprint-templates' are located
 * It is tough to determine where the project root is especially since this tool is
 * project agnostic. Projects can have different folder structures and won't have
 * 'node_modules' for all collections so this will traverse through each parent folder
 * until it finds either 'blueprint-templates', 'node_modules' or hits system root
 * represented by '/' OR does this 50 times [hard limit to avoid infinite loop].
 * If it can't find the root it will return a null at which point the user has to
 * manually add a 'blueprint-templates' folder at the root of their project.
 */
FileSystem.findProjectRootDir = () => {
    const projectIdentifiers = [globals_1.BLUEPRINTS_DIR_NAME, 'node_modules'];
    let projectRootPath = null;
    let cwd = process.cwd();
    let rootFound = false;
    let safetyStop = 0;
    while (!rootFound) {
        projectIdentifiers.forEach(folder => {
            const rootPath = path_1.join(cwd, folder);
            if (FileSystem.dirExistsSync(rootPath)) {
                projectRootPath = cwd;
            }
        });
        safetyStop++; // it has to stop some time so brute forcing it here @ 50 tries
        rootFound = cwd === '/' || projectRootPath !== null || safetyStop > 50;
        cwd = path_1.join(cwd, '../');
    }
    return projectRootPath;
};
//# sourceMappingURL=file-system.js.map