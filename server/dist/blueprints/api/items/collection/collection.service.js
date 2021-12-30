"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionService = void 0;
const globals_1 = require("../../../../globals");
class CollectionService {
    findAll() {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        return { error: null, data: bluService.getCollections() };
    }
    // public findByName(templateName: string) {
    //     const bluService = WORKSPACE.getBlueprints();
    //     return { error: null, data: bluService.getTemplate(templateName) };
    // }
    create({ name }) {
        const result = globals_1.APP_ENVIRONMENT.getBlueprints().createCollection(name);
        return { error: result.error, data: { success: result.data.success } };
    }
    rename(id, { newName }) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().renameCollection(id, newName);
    }
    deleteCollection(id) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().deleteCollection(id);
    }
}
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map