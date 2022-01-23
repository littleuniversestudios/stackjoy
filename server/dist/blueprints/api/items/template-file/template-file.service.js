"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateFileService = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const globals_1 = require("../../../../globals");
class TemplateFileService {
    findByPath(filePath) {
        let contents;
        try {
            contents = fs_1.readFileSync(filePath, 'utf-8');
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
                const filePath = path_1.join(absolutePath, newFileName);
                const pathExists = fs_extra_1.pathExistsSync(filePath);
                if (pathExists && !overwrite) {
                    return { error: { status: 400, code: 'overwrite-file-error', message: `File already exists.`, data: { filePath } }, data: { success: false } };
                }
                else {
                    fs_1.writeFileSync(filePath, '');
                    return { error: null, data: { success: true } };
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
                const filePath = path_1.join(absolutePath, newFolderName);
                fs_extra_1.ensureDirSync(filePath);
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
                fs_1.writeFileSync(path, contents, 'utf-8');
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
                const newFilePath = path_1.join(oldFilePath, '..', newFilename);
                fs_1.renameSync(oldFilePath, newFilePath);
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
                fs_extra_1.removeSync(absolutePath);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'delete-error', message: `Could not delete ${absolutePath}`, data: error }, data: { success: false } };
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
        if (path_1.resolve(absolutePath).indexOf(path_1.resolve(globals_1.SYSTEM.path.data)) !== 0) {
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