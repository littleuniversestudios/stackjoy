"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStackjoy = exports.logger = exports.APP_SERVICE = exports.SJ_SERVER = exports.SYSTEM = void 0;
const system_1 = require("./shared/lib/system");
const app_model_1 = require("./app/models/app.model");
const SJServerModel_1 = require("./app/models/SJServerModel");
const app_service_1 = require("./app/app.service");
const winston = require('winston');
function initStackjoy() {
    var _a;
    exports.SYSTEM = system_1.initSystem('stackjoy');
    // console.log('SHOW SYSTEM DATA (STACKJOY_DATA_DIR):', SYSTEM)
    exports.SJ_SERVER = new SJServerModel_1.SJServerModel((_a = process.env.STACKJOY_SERVER) !== null && _a !== void 0 ? _a : 'https://api.stackjoy.com');
    exports.APP_SERVICE = new app_service_1.AppService();
    initLogger();
}
exports.initStackjoy = initStackjoy;
/**
 * Set up the file logger. It will create a new file for every day
 * It looks like: .../logs/2021-12-31.error.log
 * If LOGGING_MODE=development then the logs will be stored in the server codebase and you will see them in the console.
 * If LOGGING_MODE does not equal "development" then the logs will go to the stackjoy directory on the user's system and
 * can then be used to submit any issues or displayed in the client
 */
function initLogger() {
    exports.logger = winston.createLogger({
        format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
        transports: [
            new winston.transports.File({ filename: app_model_1.AppModel.logFile, timestamp: true }),
        ],
    });
    if (process.env.LOGGING_MODE === 'development') {
        exports.logger.add(new winston.transports.Console({
            format: winston.format.simple(),
        }));
    }
}
//# sourceMappingURL=globals.js.map