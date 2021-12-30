"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainService = void 0;
const globals_1 = require("../../../../globals");
class ChainService {
    findAll() {
        return { error: null, data: null };
    }
    findById(id) {
        return { error: null, data: null };
    }
    create({ name, collectionId }) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().createChain(name, collectionId);
    }
    rename(chainId, { newName }) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().renameChain(newName, chainId);
    }
    updateCommands(chainId, { commands }) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().updateChainCommands(chainId, commands);
    }
    duplicate(id) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().duplicateChain(id);
    }
    delete(id) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().deleteChain(id);
    }
}
exports.ChainService = ChainService;
//# sourceMappingURL=chain.service.js.map