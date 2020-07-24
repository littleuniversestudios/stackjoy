"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
class ChainService {
    findAll() {
        return blu_handler_1.bluHandler('blu api chain-list');
    }
    findById(chainId) {
        return blu_handler_1.bluHandler(`api chain '${chainId}'`);
    }
    create(chainAttributes) {
        return null;
    }
    update(chainId, chainAttributes) {
        return null;
    }
    delete(chainId) {
        return null;
    }
}
exports.ChainService = ChainService;
//# sourceMappingURL=chain.service.js.map