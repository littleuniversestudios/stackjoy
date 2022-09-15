"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionService = void 0;
const globals_1 = require("../../../../globals");
class FunctionService {
    findAll() {
        return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().getFunctions() };
    }
    findById(id) {
        return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().getFunction(id) };
    }
    create({ name, description, contents, parentId }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().createFunction(parentId, name, description, contents);
    }
    update(id, { name, description, contents }) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().updateFunction(id, name, description, contents);
    }
    deleteFunction(id) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().deleteFunction(id);
    }
    duplicate(id) {
        return globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().duplicateFunction(id);
    }
}
exports.FunctionService = FunctionService;
//# sourceMappingURL=function.service.js.map