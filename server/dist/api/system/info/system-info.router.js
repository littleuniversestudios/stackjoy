"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemInfoRouter = void 0;
const express_1 = require("express");
const systemInfoRules = require("./system-info.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const globals_1 = require("../../../globals");
exports.systemInfoRouter = (0, express_1.Router)();
exports.systemInfoRouter.get('/', (0, route_validation_1.validateRequest)(systemInfoRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    var _a;
    const system = {
        "SJ_SERVER": globals_1.SJ_SERVER.SJ_SERVER,
        "STACKJOY_DATA_DIR": (_a = process.env.STACKJOY_DATA_DIR) !== null && _a !== void 0 ? _a : '---using system default---',
        "SYSTEM": globals_1.SYSTEM,
        "FIREBASE": globals_1.FIREBASE_SERVICE.info
    };
    res.json(system);
}));
exports.systemInfoRouter.get('/initial-codebase-path', (0, route_validation_1.validateRequest)(systemInfoRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    res.json({ "INITIAL_CODEBASE_PATH": globals_1.APP_SERVICE.INITIAL_CODEBASE_PATH });
}));
//# sourceMappingURL=system-info.router.js.map