"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.switchEnvironment = exports.setAppEnvironment = exports.initApp = exports.INITIAL_CODEBASE_PATH = exports.APP_ENVIRONMENT = exports.SJ_SERVER = exports.APP = exports.SYSTEM = void 0;
const system_1 = require("./shared/lib/system");
const app_model_1 = require("./app/models/app.model");
const app_environment_model_1 = require("./app/models/app.environment.model");
const SJServerModel_1 = require("./app/models/SJServerModel");
const winston = require('winston');
exports.SYSTEM = system_1.system('stackjoy');
exports.APP = new app_model_1.AppModel();
exports.SJ_SERVER = new SJServerModel_1.SJServerModel((_a = process.env.STACKJOY_SERVER) !== null && _a !== void 0 ? _a : 'https://git.stackjoy.com');
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
/**
 * Set up the file logger. It will create a new file for every day
 * It looks like: .../logs/2021-12-31.error.log
 * If LOGGING_MODE=development then the logs will be stored in the server codebase and you will see them in the console.
 * If LOGGING_MODE does not equal "development" then the logs will go to the stackjoy directory on the user's system and
 * can then be used to submit any issues or displayed in the client
 */
exports.logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    transports: [
        new winston.transports.File({ filename: exports.APP.logFile, timestamp: true }),
    ],
});
if (process.env.LOGGING_MODE === 'development') {
    exports.logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
//# sourceMappingURL=globals.js.map