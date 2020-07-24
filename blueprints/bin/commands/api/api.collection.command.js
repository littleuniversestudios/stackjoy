"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APICollection = void 0;
const globals_1 = require("../../context/globals");
const path_1 = require("path");
class APICollection {
    static get(runContext) {
        const collectionName = runContext.commandArgs.APICollection;
        const collection = globals_1.BLUEPRINT.collections.find(p => p.name === collectionName);
        if (collection) {
            return {
                path: path_1.join(`${globals_1.USER_BLUEPRINTS_PATH}`, collectionName),
                name: collection.name,
                description: collection.collectionConfig.description,
                collectionConfig: collection.collectionConfig,
                templates: collection.templates,
                chains: collection.chains.map(c => ({ collectionName: c.collectionName, name: c.name, description: c.description }))
            };
        }
        else {
            return null;
        }
    }
    static list(runContext) {
        return globals_1.BLUEPRINT.collections.map(p => ({
            name: p.name,
            description: p.collectionConfig.description
        }));
    }
}
exports.APICollection = APICollection;
//# sourceMappingURL=api.collection.command.js.map