"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackService = void 0;
const globals_1 = require("../../../../globals");
class StackService {
    findAll() {
        return { error: null, data: null };
    }
    findById(id) {
        return { error: null, data: null };
    }
    create({ name }) {
        return { error: null, data: null };
    }
    update(id, { name }) {
        return { error: null, data: null };
    }
    remove(id) {
        return globals_1.APP_ENVIRONMENT.getBlueprints().deleteStack(id);
    }
}
exports.StackService = StackService;
//# sourceMappingURL=stack.service.js.map