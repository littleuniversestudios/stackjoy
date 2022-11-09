"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRouter = void 0;
const express_1 = require("express");
const itemRules = require("./log.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const log_action_1 = require("../../../../models/blueprints/engine/actions/log.action");
exports.logRouter = (0, express_1.Router)();
exports.logRouter.get('/', (0, route_validation_1.validateRequest)(itemRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const logEntries = log_action_1.LogAction.getLogEntries();
    const result = {
        error: null,
        data: logEntries
    };
    result.error ? next(result.error) : res.json(result.data);
}));
exports.logRouter.put('/', (0, route_validation_1.validateRequest)(itemRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = log_action_1.LogAction.saveLogEntry(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=log.router.js.map