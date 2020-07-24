"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bluLogRules = require("./blu-log.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const blu_log_service_1 = require("./blu-log.service");
exports.bluLogRouter = express_1.Router();
const bluLogService = new blu_log_service_1.BluLogService();
exports.bluLogRouter.get('/', route_validation_1.validateRequest(bluLogRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = bluLogService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=blu-log.router.js.map