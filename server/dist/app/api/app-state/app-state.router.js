"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appStateRouter = void 0;
const express_1 = require("express");
const appStateRules = require("./app-state.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const app_state_service_1 = require("./app-state.service");
exports.appStateRouter = express_1.Router();
const appStateService = new app_state_service_1.AppStateService();
/**
 * Main app state
 */
exports.appStateRouter.get('/main', route_validation_1.validateRequest(appStateRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appStateService.getMainState();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appStateRouter.put('/:main', route_validation_1.validateRequest(appStateRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appStateService.updateMainState(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=app-state.router.js.map