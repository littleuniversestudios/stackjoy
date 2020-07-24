"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
class SeedService {
    findAll() {
        return [];
    }
    findById(seedName) {
        return blu_handler_1.bluHandler(`api seed ${seedName}`);
    }
    create(seedAttributes) {
        return null;
    }
    update(seedId, seedAttributes) {
        return null;
    }
    delete(seedId) {
        return null;
    }
}
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map