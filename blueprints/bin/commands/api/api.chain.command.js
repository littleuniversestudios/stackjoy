"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIChain = void 0;
const globals_1 = require("../../context/globals");
const blu_interface_1 = require("../../interfaces/blu.interface");
const handler_1 = require("../../lib/handler");
class APIChain {
    static get(runContext) {
        const chainName = runContext.commandArgs.APIChain;
        if (!chainName) {
            handler_1.Handle.apiError('Must provide chain name', blu_interface_1.BLU.API.ErrorCode.ChainNameMissing);
        }
        const chain = globals_1.BLUEPRINT.getChains(chainName)[0];
        if (!chain) {
            handler_1.Handle.apiError('Chain name is not correct', blu_interface_1.BLU.API.ErrorCode.ChainNameNotCorrect);
        }
        else {
            return {
                name: chain.name,
                description: chain.description,
                collectionName: chain.collectionName,
                chainConfig: chain.chainConfig
            };
        }
    }
    static list(runContext) {
        return globals_1.BLUEPRINT.allChains.map(c => ({
            name: c.name,
            description: c.description,
            collectionName: c.collectionName,
            chainConfig: c.chainConfig
        }));
    }
}
exports.APIChain = APIChain;
//# sourceMappingURL=api.chain.command.js.map