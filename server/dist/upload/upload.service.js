"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const globals_1 = require("../globals");
const fs_extra_1 = require("fs-extra");
class UploadService {
    uploadTemplateFiles(files, absolutePath, overwrite = false) {
        /**
         * multipart files are sent either as an array of files or an object if its just one file
         * here we check which case it is and handle it accordingly
         */
        if (files) {
            const isAllowed = this.isFileUpdateAllowed(absolutePath);
            if (isAllowed.error) {
                return isAllowed.error;
            }
            else {
                if (Array.isArray(files)) {
                    for (let i = 0; i < files.length; i++) {
                        const file = files[i];
                        const writeResult = this.writeUploadedFile(path_1.join(absolutePath, file.name), file.data, overwrite);
                        if (writeResult.error) {
                            return writeResult;
                        }
                    }
                }
                else {
                    const file = files;
                    fs_1.writeFileSync(path_1.join(absolutePath, file.name), file.data);
                    const writeResult = this.writeUploadedFile(path_1.join(absolutePath, file.name), file.data, overwrite);
                    if (writeResult.error) {
                        return writeResult;
                    }
                }
            }
        }
        return { error: null, data: { success: true } };
    }
    writeUploadedFile(filePath, data, overwrite = false) {
        try {
            const pathExists = fs_extra_1.pathExistsSync(filePath);
            if (pathExists && !overwrite) {
                return { error: { status: 400, code: 'overwrite-file-error', message: `File already exists.`, data: { filePath } }, data: { success: false } };
            }
            else {
                fs_1.writeFileSync(filePath, data);
                return { error: null, data: { success: true } };
            }
        }
        catch (error) {
            return { error: { status: 400, code: 'write-file-error', message: `Could not create file ${filePath}`, data: error }, data: { success: false } };
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
        if (absolutePath.indexOf(globals_1.SYSTEM.path.data) !== 0) {
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
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map