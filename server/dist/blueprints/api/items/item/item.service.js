"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const globals_1 = require("../../../../globals");
class ItemService {
    findAll() {
        return [];
    }
    findById(itemId) {
        return null;
    }
    updateReadme(itemId, { readme }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().updateItemReadme(itemId, readme);
    }
    updateVariables(itemId, { variables }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().updateItemVariables(itemId, variables);
    }
    updateConfig(itemId, { config }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().updateItemConfig(itemId, config);
    }
    updateLinks(itemId, { links }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().updateItemLinks(itemId, links);
    }
    delete(itemId) {
        return null;
    }
}
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map