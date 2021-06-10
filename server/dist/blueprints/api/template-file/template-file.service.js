"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateFileService = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class TemplateFileService {
    findAll() {
        return [];
    }
    findByPath(filePath) {
        let contents;
        try {
            contents = fs_1.readFileSync(filePath, 'utf-8');
        }
        catch (e) {
        }
        return contents;
    }
    create(templateFileAttributes) {
        return null;
    }
    update(file) {
        let error = null;
        try {
            fs_1.writeFileSync(file.path, file.contents, 'utf-8');
        }
        catch (e) {
            error = e;
        }
        return { error, data: { updated: true } };
    }
    rename(file) {
        const { oldFilePath, newFilename } = file;
        let error = null;
        try {
            const newFilePath = path_1.join(oldFilePath, '..', newFilename);
            fs_1.renameSync(oldFilePath, newFilePath);
        }
        catch (e) {
            error = e;
        }
        return { error, data: { updated: true } };
    }
    delete(templateFileId) {
        return null;
    }
}
exports.TemplateFileService = TemplateFileService;
//# sourceMappingURL=template-file.service.js.map