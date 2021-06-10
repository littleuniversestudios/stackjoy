"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAPI = void 0;
class ExternalAPI {
    constructor(api) {
        this.api = api;
    }
    allItems() {
        return this.api.allItems.map(i => i.info);
    }
    getBlueprints() {
        return this.api.getBlueprints().info;
    }
    getCollections() {
        return this.api.getCollections().map(c => c.info);
    }
    getCollection(name) {
        var _a;
        const collection = this.api.getCollection(name);
        return (_a = collection === null || collection === void 0 ? void 0 : collection.info) !== null && _a !== void 0 ? _a : null;
    }
    getItemByName(name) {
        return this.api.getItemById(name).map(i => i.info);
    }
}
exports.ExternalAPI = ExternalAPI;
//# sourceMappingURL=external.api.js.map