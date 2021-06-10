"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
const fs = require("fs");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const globals_1 = require("../../../globals");
class TemplateService {
    findAll() {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        return { error: null, data: bluService.getTemplates() };
    }
    findById(templateId) {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        return { error: null, data: bluService.getItemById(templateId) };
    }
    _findById(templateId) {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        return bluService.getItemById(templateId);
    }
    create(newTemplate) {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        let error = null;
        let createdTemplate = null;
        const destination = path_1.join(bluService.path, newTemplate.collectionName, newTemplate.templateName);
        if (fs.existsSync(destination)) {
            let message = `Template '${newTemplate.templateName}' in collection ${newTemplate.collectionName}`;
            message += ' already exists on your local system.';
            error = {
                status: 400,
                code: 'template-exists',
                message
            };
        }
        else {
            fs_extra_1.ensureDirSync(destination);
            newTemplate.files.forEach(file => {
                const fileDestination = path_1.join(destination, file.destination);
                fs_extra_1.copySync(file.origin, fileDestination);
            });
            createdTemplate = this._findById(`${newTemplate.collectionName}.${newTemplate.templateName}`)[0];
        }
        return createdTemplate ? { error: null, data: createdTemplate.info } : { error, data: null };
    }
    update(templateId, templateAttributes) {
        return null;
    }
    delete(templateId) {
        return null;
    }
}
exports.TemplateService = TemplateService;
//# sourceMappingURL=template.service.js.map