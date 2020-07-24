"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
const util_1 = require("../../../lib/util");
const fs = require("fs");
const path_1 = require("path");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
class TemplateService {
    findAll() {
        return blu_handler_1.bluHandler('api template-list');
    }
    findByName(templateName) {
        return blu_handler_1.bluHandler(`api template '${templateName}'`);
    }
    create(newTemplate) {
        let error = null;
        let createdTemplate = null;
        const bluResponse = blu_handler_1.bluHandler('api metadata');
        if (bluResponse.error) {
            error = bluResponse.error;
        }
        else {
            const bluMetadata = bluResponse.data;
            const destination = path_1.join(bluMetadata.bluPath, newTemplate.collectionName, newTemplate.templateName);
            if (fs.existsSync(destination)) {
                let message = newTemplate.isSeed ? `Seed '${newTemplate.templateName}'` : `Template '${newTemplate.templateName}' in collection ${newTemplate.collectionName}`;
                message += ' already exists on your local system.';
                error = {
                    status: 400,
                    code: newTemplate.isSeed ? 'seed-exists' : 'template-exists',
                    message
                };
            }
            else {
                const prefix = util_1.commonPrefix(newTemplate.files || []);
                fs_1.mkdirSync(destination);
                fs_1.writeFileSync(path_1.join(destination, '.config.json'), JSON.stringify(newTemplate.isSeed ? { isSeed: true } : {}, null, 2));
                newTemplate.files.forEach(filePath => {
                    const fileName = (!util_1.isDirectorySync(filePath) && filePath === prefix) ? util_1.getLastDirectoryName(filePath) : filePath.substring(prefix.length);
                    const fileDestination = path_1.join(destination, fileName);
                    fs_extra_1.copySync(filePath, fileDestination);
                });
                createdTemplate = this.findByName(`${newTemplate.collectionName}.${newTemplate.templateName}`);
            }
        }
        return createdTemplate ? createdTemplate : { error, data: null };
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