"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintsApi = void 0;
const blu_interface_1 = require("../../../shared/interfaces/blu.interface");
const utils_1 = require("../lib/utils");
/**
 * Internal API to access items within the blueprints folder
 */
class BlueprintsApi {
    constructor(blueprints) {
        this.blueprints = blueprints;
        this.allItems = [...this.getItems(this.blueprints), this.blueprints];
        this.allFunctions = [].concat(...this.allItems.map(item => item._functions));
        this.tree = this.createWorkspaceTree(this.getItemTree(this.blueprints));
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
    getItemById(id) {
        return this.allItems.find(i => i.id === id);
    }
    getItemByNamespace(name) {
        const item = utils_1.Utils.parseItemName(name.trim());
        return this.getItem(item.type, item.collection, item.name);
    }
    getItem(type, collection, name) {
        const filter = collection ? t => t.collectionName === collection && t.name === name : t => t.name === name;
        switch (type) {
            case blu_interface_1.BLU.Item.Type.Collection:
                return [this.getCollection(name)];
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
    getItemTree(item) {
        const tree = {
            item: item.info,
            children: item.children.map(childItem => this.getItemTree(childItem))
        };
        return tree;
    }
    createWorkspaceTree(treeItem) {
        let folder;
        folder = { item: treeItem.item, collections: [], stacks: [] };
        treeItem.children.forEach(childItem => {
            switch (childItem.item.type) {
                case blu_interface_1.BLU.Item.Type.Stack:
                    folder.stacks.push(this.createWorkspaceTree(childItem));
                    break;
                case blu_interface_1.BLU.Item.Type.Collection:
                    folder.collections.push(this.createCollection(childItem));
                    break;
            }
        });
        return folder;
    }
    createCollection(treeItem) {
        let folder;
        folder = { item: treeItem.item, templates: [], chains: [] };
        treeItem.children.forEach(childItem => {
            switch (childItem.item.type) {
                case blu_interface_1.BLU.Item.Type.Template:
                    folder.templates.push(childItem.item);
                    break;
                case blu_interface_1.BLU.Item.Type.Chain:
                    folder.chains.push(childItem.item);
                    break;
            }
        });
        return folder;
    }
}
exports.BlueprintsApi = BlueprintsApi;
//# sourceMappingURL=blueprints.api.js.map