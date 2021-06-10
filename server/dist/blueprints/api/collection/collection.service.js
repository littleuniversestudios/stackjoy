"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionService = void 0;
const globals_1 = require("../../../globals");
class CollectionService {
    findAll() {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        return { error: null, data: bluService.getCollections() };
    }
}
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map