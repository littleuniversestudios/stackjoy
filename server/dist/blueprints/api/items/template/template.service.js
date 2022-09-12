"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
const globals_1 = require("../../../../globals");
class TemplateService {
    findAll() {
        return { error: null, data: [] };
    }
    findById(templateId) {
        const bluService = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        return { error: null, data: bluService.getItemByNamespace(templateId) };
    }
    create({ name, collectionId, files, newCollectionName }) {
        if (!!newCollectionName && !collectionId) {
            const result = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().createCollection(newCollectionName);
            collectionId = result.data.collection.id;
        }
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().createTemplate(name, collectionId, files);
    }
    rename({ newName, templateId }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().renameTemplate(newName, templateId);
    }
    delete(id) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().deleteTemplate(id);
    }
    duplicate(id) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().duplicateTemplate(id);
    }
    copy(id, { collectionId }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().copyTemplate(id, collectionId);
    }
    createFile(id, { newFileName, path }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().createNewFile(id, newFileName, path);
    }
    createFolder(id, { newFolderName, path }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().createNewFolder(id, newFolderName, path);
    }
    updateChainedTemplates(templateId, { chainedTemplates }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().updateChainedTemplates(templateId, chainedTemplates);
    }
}
exports.TemplateService = TemplateService;
//# sourceMappingURL=template.service.js.map