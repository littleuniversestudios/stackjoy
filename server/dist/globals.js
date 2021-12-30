"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchEnvironment = exports.setAppEnvironment = exports.initApp = exports.INITIAL_CODEBASE_PATH = exports.APP_ENVIRONMENT = exports.GIT = exports.APP = exports.SYSTEM = void 0;
const system_1 = require("./shared/lib/system");
const app_model_1 = require("./app/models/app.model");
const app_environment_model_1 = require("./app/models/app.environment.model");
const git_model_1 = require("./app/models/git.model");
exports.SYSTEM = system_1.system('stackjoy');
exports.APP = new app_model_1.AppModel();
exports.GIT = new git_model_1.GitModel((_a = process.env.STACKJOY_GIT_SERVER) !== null && _a !== void 0 ? _a : 'https://git.stackjoy.com');
exports.initApp = (codebasePath) => {
    let workspaceMetadata = exports.APP.getEnvironmentInfoByCodebase(codebasePath);
    if (workspaceMetadata) {
        exports.setAppEnvironment(new app_environment_model_1.EnvironmentModel(workspaceMetadata));
    }
    else {
        exports.INITIAL_CODEBASE_PATH = codebasePath; // codebase path (cwd - current working dir) where the server was started
    }
};
exports.setAppEnvironment = (environment) => {
    exports.APP_ENVIRONMENT = environment;
};
exports.switchEnvironment = (id) => {
    const envMetadata = exports.APP.getEnvironmentInfoById(id);
    if (envMetadata) {
        const newEnv = new app_environment_model_1.EnvironmentModel(envMetadata);
        newEnv.updateLastUsed();
        exports.setAppEnvironment(newEnv);
    }
};
//# sourceMappingURL=globals.js.map