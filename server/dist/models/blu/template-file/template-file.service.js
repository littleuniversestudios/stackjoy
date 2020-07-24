"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_file_model_1 = require("./template-file.model");
const fs_1 = require("fs");
class TemplateFileService {
    findAll() {
        return [];
    }
    findByPath(filePath) {
        const file = new template_file_model_1.TemplateFile();
        try {
            file.contents = fs_1.readFileSync(filePath, 'utf-8');
        }
        catch (e) {
        }
        return file;
    }
    create(templateFileAttributes) {
        return null;
    }
    update(templateFileAttributes) {
        let error = null;
        try {
            fs_1.writeFileSync(templateFileAttributes.path, templateFileAttributes.contents, 'utf-8');
        }
        catch (e) {
            error = e;
        }
        return { error, data: templateFileAttributes };
    }
    delete(templateFileId) {
        return null;
    }
}
exports.TemplateFileService = TemplateFileService;
//# sourceMappingURL=template-file.service.js.map