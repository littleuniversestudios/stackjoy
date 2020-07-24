"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
class CollectionService {
    findAll() {
        return blu_handler_1.bluHandler('api collection-list');
    }
    findById(projectName) {
        return blu_handler_1.bluHandler(`api collection ${projectName}`);
    }
    create(collectionAttributes) {
        return null;
    }
    update(collectionId, collectionAttributes) {
        return null;
    }
    delete(collectionId) {
        return null;
    }
}
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map