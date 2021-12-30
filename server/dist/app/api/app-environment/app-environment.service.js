"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvironmentService = void 0;
const globals_1 = require("../../../globals");
const path = require("path");
const blu_utils_model_1 = require("../../../blueprints/engine/models/blu-utils.model");
class AppEnvironmentService {
    async findAll() {
        return { error: null, data: globals_1.APP.list };
    }
    getCurrentEnvironment() {
        var _a, _b, _c;
        if (globals_1.APP_ENVIRONMENT) {
            return { error: null, data: (_a = globals_1.APP_ENVIRONMENT === null || globals_1.APP_ENVIRONMENT === void 0 ? void 0 : globals_1.APP_ENVIRONMENT.metadata) !== null && _a !== void 0 ? _a : null };
        }
        else {
            const data = {
                INITIAL_CODEBASE_PATH: globals_1.INITIAL_CODEBASE_PATH,
                suggestedName: (_c = (_b = path.parse(globals_1.INITIAL_CODEBASE_PATH !== null && globals_1.INITIAL_CODEBASE_PATH !== void 0 ? globals_1.INITIAL_CODEBASE_PATH : '')) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : ''
            };
            return { error: { status: 404, message: 'No environment available', code: 'NO_ENV_AVAILABLE', data }, data: null };
        }
    }
    async rename(id, { name }) {
        const envMetadata = globals_1.APP.getEnvironmentInfoById(id);
        if (envMetadata) {
            envMetadata.name = name;
            globals_1.APP.updateEnvironmentMetadata(envMetadata);
            return { error: null, data: { success: true } };
        }
        else {
            return { error: { message: `Environment with id: ${id} not found` }, data: { success: false } };
        }
    }
    switchEnvironment(values) {
        globals_1.switchEnvironment(values.id);
        return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
    }
    switchCodebase(values) {
        const env = globals_1.APP_ENVIRONMENT.metadata.id === values.id ? globals_1.APP_ENVIRONMENT : globals_1.APP.getEnvironmentById(values.id);
        if (env) {
            env.switchCodebase(values.codebasePath);
            return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
        }
        else {
            return { error: { message: `Environment with id: ${values.id} not found` }, data: null };
        }
    }
    updateSeed(id, { url }) {
        const env = globals_1.APP_ENVIRONMENT.metadata.id === id ? globals_1.APP_ENVIRONMENT : globals_1.APP.getEnvironmentById(id);
        if (env) {
            env.updateSeed(url);
            return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
        }
        else {
            return { error: { message: `Environment with id: ${id} not found` }, data: null };
        }
    }
    getEnvironmentState(id) {
        var _a;
        const envMetadata = globals_1.APP.getEnvironmentInfoById(id);
        const state = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(path.join(envMetadata.environmentPath, 'state.json'))) !== null && _a !== void 0 ? _a : {};
        return { error: null, data: state };
    }
    saveEnvironmentState(id, { state }) {
        const envMetadata = globals_1.APP.getEnvironmentInfoById(id);
        blu_utils_model_1.BLUUtils.saveJSONFile(path.join(envMetadata.environmentPath, 'state.json'), state);
        return { error: null, data: { success: true } };
    }
}
exports.AppEnvironmentService = AppEnvironmentService;
//# sourceMappingURL=app-environment.service.js.map