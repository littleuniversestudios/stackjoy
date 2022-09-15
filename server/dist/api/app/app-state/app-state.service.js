"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStateService = void 0;
const blu_utils_model_1 = require("../../../blueprints/engine/models/blu-utils.model");
const path_1 = require("path");
const globals_1 = require("../../../globals");
class AppStateService {
    getMainState() {
        var _a;
        return { error: null, data: (_a = blu_utils_model_1.BLUUtils.loadJSONFile(path_1.join(globals_1.APP_SERVICE.APP.statePath, 'main.json'))) !== null && _a !== void 0 ? _a : {} };
    }
    updateMainState({ state }) {
        blu_utils_model_1.BLUUtils.saveJSONFile(path_1.join(globals_1.APP_SERVICE.APP.statePath, 'main.json'), state);
        return { error: null, data: { success: true } };
    }
}
exports.AppStateService = AppStateService;
//# sourceMappingURL=app-state.service.js.map