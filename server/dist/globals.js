"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStackjoy = exports.SJ_SERVER_API_URL = exports.logger = exports.APP_PATHS = exports.FIREBASE_SERVICE = exports.AUTH_SERVICE = exports.APP_SERVICE = exports.SJ_SERVER = exports.SYSTEM = void 0;
const system_1 = require("./shared/lib/system");
const app_model_1 = require("./models/app/app.model");
const sj_server_model_1 = require("./models/SJServer/sj.server.model");
const app_service_1 = require("./services/app.service");
const firebase_1 = require("./shared/lib/firebase");
const auth_service_1 = require("./api/app/auth/auth.service");
const path_1 = require("path");
const winston = require('winston');
exports.APP_PATHS = {};
// Need this elsewhere before initStackjoy() is called, so had to pull it out into its own variable
exports.SJ_SERVER_API_URL = (_a = process.env.STACKJOY_SERVER) !== null && _a !== void 0 ? _a : 'https://api.stackjoy.com';
function initStackjoy() {
    exports.SYSTEM = system_1.initSystem('stackjoy');
    // console.log('SHOW SYSTEM DATA (STACKJOY_DATA_DIR):', SYSTEM)
    exports.FIREBASE_SERVICE = new firebase_1.FirebaseService();
    exports.AUTH_SERVICE = new auth_service_1.AuthService();
    exports.SJ_SERVER = new sj_server_model_1.SJServerModel(exports.SJ_SERVER_API_URL);
    exports.APP_SERVICE = new app_service_1.AppService();
    exports.APP_PATHS['assets'] = path_1.join(path_1.dirname(process.argv[1]), './assets');
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