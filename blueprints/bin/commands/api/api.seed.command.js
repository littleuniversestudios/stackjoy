"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APISeed = void 0;
const globals_1 = require("../../context/globals");
class APISeed {
    static get(runContext) {
        const seedName = runContext.commandArgs.APISeed;
        if (seedName) {
            const seeds = globals_1.BLUEPRINT.collections.find(p => p.name.toLowerCase() === 'seeds');
            if (seeds) {
                const seed = seeds.templates.find(p => p.templateName.toLowerCase() === seedName.toLowerCase());
                return seed || null;
            }
        }
        return null;
    }
    static list(runContext) {
        return globals_1.BLUEPRINT.collections.map(p => ({
            name: p.name,
            description: p.collectionConfig.description
        }));
    }
}
exports.APISeed = APISeed;
//# sourceMappingURL=api.seed.command.js.map