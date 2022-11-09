"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const express_1 = require("express");
const appStateRules = require("./state.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const state_service_1 = require("./state.service");
exports.stateRouter = (0, express_1.Router)();
const appStateService = new state_service_1.StateService();
/**
 * Main app state
 */
exports.stateRouter.get('/main', (0, route_validation_1.validateRequest)(appStateRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appStateService.getMainState();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stateRouter.put('/main', (0, route_validation_1.validateRequest)(appStateRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appStateService.updateMainState(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=state.router.js.map