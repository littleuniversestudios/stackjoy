"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalAPI = void 0;
const blu_interface_1 = require("../../../shared/interfaces/blu.interface");
const utils_1 = require("../lib/utils");
/**
 * Internal API to access items within the blueprints folder
 */
class InternalAPI {
    constructor(blueprints) {
        this.blueprints = blueprints;
        this.allItems = this.getItems(this.blueprints);
    }
    getBlueprints() {
        return this.blueprints;
    }
    getCollections() {
        return this.allItems.filter(i => i.type === blu_interface_1.BLU.Item.Type.Collection);
    }
    getCollectionsInfo() {
        return this.getCollections().map(c => c.info);
    }
    getCollection(name) {
        return this.getCollections().find(c => c.name.toLowerCase() === name.toLowerCase());
    }
    getTemplates() {
        return this.allItems.filter(i => i.type === blu_interface_1.BLU.Item.Type.Template);
    }
    getChains() {
        return this.allItems.filter(i => i.type === blu_interface_1.BLU.Item.Type.Chain);
    }
    getItemById(name) {
        const item = utils_1.Utils.parseItemName(name.trim());
        return this.getItem(item.type, item.collection, item.name);
    }
    getItem(type, collection, name) {
        const filter = collection ? t => t.collectionName === collection && t.name === name : t => t.name === name;
        switch (type) {
            case blu_interface_1.BLU.Item.Type.Template:
                return this.getTemplates().filter(filter);
            case blu_interface_1.BLU.Item.Type.Chain:
                return this.getChains().filter(filter);
            default:
                return [];
        }
    }
    getItems(item) {
        const allItems = [...item.children];
        item.children.forEach(child => allItems.push(...this.getItems(child)));
        return allItems;
    }
}
exports.InternalAPI = InternalAPI;
//# sourceMappingURL=internal.api.js.map