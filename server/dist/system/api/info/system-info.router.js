"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemInfoRouter = void 0;
const express_1 = require("express");
const systemInfoRules = require("./system-info.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const globals_1 = require("../../../globals");
exports.systemInfoRouter = express_1.Router();
/*
 * GET
 */
exports.systemInfoRouter.get('/', route_validation_1.validateRequest(systemInfoRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    var _a;
    const system = {
        "SJ_SERVER": globals_1.SJ_SERVER.SJ_SERVER,
        "STACKJOY_DATA_DIR": (_a = process.env.STACKJOY_DATA_DIR) !== null && _a !== void 0 ? _a : '---using system default---',
        "SYSTEM": globals_1.SYSTEM
    };
    res.json(system);
}));
//# sourceMappingURL=system-info.router.js.map