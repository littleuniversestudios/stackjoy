"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentService = void 0;
const path = require("path");
const blu_utils_model_1 = require("../../../models/blueprints/engine/models/blu.utils.model");
const globals_1 = require("../../../globals");
const shared_1 = require("@stackjoy/shared");
class EnvironmentService {
    async findAll() {
        return { error: null, data: globals_1.APP_SERVICE.APP.list };
    }
    getCurrentEnvironment(refresh = false) {
        return globals_1.APP_SERVICE.getCurrentEnvironment(refresh);
    }
    async rename(id, { name }) {
        var _a;
        const envMetadata = globals_1.APP_SERVICE.APP.getEnvironmentInfoById(id);
        if (envMetadata && envMetadata.isSystemWorkspace) {
            return { error: { status: 403, code: shared_1.HttpError.FORBIDDEN, message: `Cannot rename the System Workspace` }, data: null };
        }
        if (!envMetadata) {
            // Could be just a remote env, so send it upstream
            try {
                await globals_1.SJ_SERVER.rename(id, name);
                return { error: null, data: { success: true } };
            }
            catch (e) {
                let resp = {
                    status: 500,
                    code: shared_1.HttpError.UNKNOWN,
                    message: 'Unknown error.'
                };
                if (e.isAxiosError) {
                    const error = e;
                    return { data: null, error: error.response.data };
                }
                return { data: null, error: resp };
            }
        }
        else {
            // Update remote if exists first
            try {
                if ((_a = envMetadata.remote) === null || _a === void 0 ? void 0 : _a.id)
                    await globals_1.SJ_SERVER.rename(envMetadata.remote.id, name);
            }
            catch (e) {
                if (e.isAxiosError) {
                    const error = e;
                    return { data: null, error: error.response.data };
                }
                else
                    throw e;
            }
            // Assuming success update local model
            envMetadata.name = name;
            globals_1.APP_SERVICE.APP.updateEnvironmentMetadata(envMetadata);
            return { error: null, data: { success: true } };
        }
    }
    switchEnvironment(values) {
        globals_1.APP_SERVICE.switchEnvironment(values.id);
        return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.metadata };
    }
    switchCodebase(values) {
        var _a, _b;
        const env = ((_b = (_a = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.id) === values.id ? globals_1.APP_SERVICE.CURRENT_ENVIRONMENT : globals_1.APP_SERVICE.APP.getEnvironmentById(values.id);
        if (env) {
            env.switchCodebase(values.codebasePath);
            env.clearSuggestionCacheForEnv();
            return { error: null, data: env.metadata };
        }
        else {
            return { error: { message: `Environment with id: ${values.id} not found` }, data: null };
        }
    }
    updateSeed(id, { url }) {
        const env = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.metadata.id === id ? globals_1.APP_SERVICE.CURRENT_ENVIRONMENT : globals_1.APP_SERVICE.APP.getEnvironmentById(id);
        if (env) {
            env.updateSeed(url);
            return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.metadata };
        }
        else {
            return { error: { message: `Environment with id: ${id} not found` }, data: null };
        }
    }
    getEnvironmentState(id) {
        var _a;
        const envMetadata = globals_1.APP_SERVICE.APP.getEnvironmentInfoById(id);
        const state = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(path.join(envMetadata.environmentPath, 'state.json'))) !== null && _a !== void 0 ? _a : {};
        return { error: null, data: state };
    }
    saveEnvironmentState(id, { state }) {
        const envMetadata = globals_1.APP_SERVICE.APP.getEnvironmentInfoById(id);
        blu_utils_model_1.BLUUtils.saveJSONFile(path.join(envMetadata.environmentPath, 'state.json'), state);
        return { error: null, data: { success: true } };
    }
}
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=environment.service.js.map