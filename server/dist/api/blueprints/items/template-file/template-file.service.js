"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateFileService = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const globals_1 = require("../../../../globals");
const fs = require("fs");
const path = require("path");
class TemplateFileService {
    findByPath(filePath) {
        let contents;
        try {
            contents = (0, fs_1.readFileSync)(filePath, 'utf-8');
        }
        catch (e) {
        }
        return contents;
    }
    createFile({ absolutePath, newFileName, overwrite = false }) {
        const result = this.isFileUpdateAllowed(absolutePath);
        if (result.error) {
            return result;
        }
        else {
            try {
                const filePath = (0, path_1.join)(absolutePath, newFileName);
                const pathExists = (0, fs_extra_1.pathExistsSync)(filePath);
                if (pathExists && !overwrite) {
                    return { error: { status: 400, code: 'overwrite-file-error', message: `File already exists.`, data: { filePath } }, data: { success: false } };
                }
                else {
                    (0, fs_1.writeFileSync)(filePath, '');
                    return { error: null, data: { success: true, absolutePath: filePath, filename: newFileName } };
                }
            }
            catch (error) {
                return { error: { status: 400, code: 'create-file-error', message: `Could not create file ${newFileName}`, data: error }, data: { success: false } };
            }
        }
    }
    createFolder({ absolutePath, newFolderName }) {
        const result = this.isFileUpdateAllowed(absolutePath);
        if (result.error) {
            return result;
        }
        else {
            try {
                const filePath = (0, path_1.join)(absolutePath, newFolderName);
                (0, fs_extra_1.ensureDirSync)(filePath);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'create-folder-error', message: `Could not create folder ${newFolderName}`, data: error }, data: { success: false } };
            }
        }
    }
    update({ path, contents }) {
        const result = this.isFileUpdateAllowed(path);
        if (result.error) {
            return result;
        }
        else {
            try {
                (0, fs_1.writeFileSync)(path, contents, 'utf-8');
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'update-file-error', message: `Could not update file ${path}`, data: error }, data: { success: false } };
            }
        }
    }
    rename({ oldFilePath, newFilename }) {
        const result = this.isFileUpdateAllowed(oldFilePath);
        if (result.error) {
            return result;
        }
        else {
            try {
                const newFilePath = (0, path_1.join)(oldFilePath, '..', newFilename);
                (0, fs_1.renameSync)(oldFilePath, newFilePath);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'rename-error', message: `Could not rename ${newFilename}`, data: error }, data: { success: false } };
            }
        }
    }
    delete(absolutePath) {
        const result = this.isFileUpdateAllowed(absolutePath);
        if (result.error) {
            return result;
        }
        else {
            try {
                (0, fs_extra_1.removeSync)(absolutePath);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'delete-error', message: `Could not delete ${absolutePath}`, data: error }, data: { success: false } };
            }
        }
    }
    duplicate({ absolutePath }) {
        const result = this.isFileUpdateAllowed(absolutePath);
        if (result.error) {
            return result;
        }
        else {
            try {
                if (fs.lstatSync(absolutePath).isFile()) {
                    const extension = path.extname(absolutePath);
                    const oldFilename = path.basename(absolutePath, extension);
                    let newFileName = `${oldFilename}_copy${extension}`;
                    let newFilePath = (0, path_1.join)(absolutePath, '..', newFileName);
                    if (fs.existsSync(newFilePath)) {
                        const rndNum = Math.floor(Math.random() * 10000) + 1;
                        newFileName = `${oldFilename}_${rndNum}${extension}`;
                    }
                    newFilePath = (0, path_1.join)(absolutePath, '..', newFileName);
                    (0, fs_1.copyFileSync)(absolutePath, newFilePath);
                    return { error: null, data: { success: true } };
                }
                else {
                    return { error: { status: 400, code: 'duplicate-error', message: `Not a file: ${absolutePath}` }, data: { success: false } };
                }
            }
            catch (error) {
                return { error: { status: 400, code: 'duplicate-error', message: `Could not duplicate ${absolutePath}`, data: error }, data: { success: false } };
            }
        }
    }
    /**
     * Check to see if the file's absolutePath is inside Stackjoy's data directory. We don't want these API
     * endpoints to CRUD arbitrary system files. Only files within the stackjoy data directory (where stackjoy
     * resides on the system) are fair game.
     *
     * @param absolutePath
     * @private
     */
    isFileUpdateAllowed(absolutePath) {
        if ((0, path_1.resolve)(absolutePath).indexOf((0, path_1.resolve)(globals_1.SYSTEM.path.data)) !== 0) {
            return {
                error: {
                    status: 401, code: 'unauthorized-file-update',
                    message: `Stackjoy cannot update blueprint files outside of its own directory. File is not in Stackjoy's data directory.`,
                    data: {
                        absolutePath,
                        stackjoyPath: globals_1.SYSTEM.path.data
                    }
                }, data: { success: false }
            };
        }
        else {
            return { error: null, data: { success: true } };
        }
    }
}
exports.TemplateFileService = TemplateFileService;
//# sourceMappingURL=template-file.service.js.map