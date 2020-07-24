"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const template_file_model_1 = require("../template-file/template-file.model");
class ProjectFileService {
    findAll() {
        return [];
    }
    findByPath(filePath) {
        const file = new template_file_model_1.TemplateFile();
        try {
            file.contents = fs_1.readFileSync(filePath, 'utf-8');
        }
        catch (e) {
            console.log('------\n', e, '------\n');
        }
        return file;
    }
    create(projectFileAttributes) {
        return null;
    }
    update(projectFileAttributes) {
        let error = null;
        try {
            // const fileContents = JSON.stringify(projectFileAttributes.contents, null, 2);
            const fileContents = projectFileAttributes.contents;
            /** REMINDER: this only saves JSON files as it check for proper json format
             * 2 things that need to be done here:
             * 1) JSON check should be done at validation level
             * 2) this should specifically save only the .config.json file (or any other json files)
             * this service should be called project-config...leaving for now as speed is more important that accuracy at this point
             * */
            // JSON.parse(fileContents);
            fs_1.writeFileSync(projectFileAttributes.path, fileContents, 'utf-8');
        }
        catch (e) {
            error = e;
            console.log('--- writing to project file ---\n', e, '------\n');
        }
        return { error, data: projectFileAttributes };
    }
    delete(projectFileId) {
        return null;
    }
}
exports.ProjectFileService = ProjectFileService;
//# sourceMappingURL=project-file.service.js.map