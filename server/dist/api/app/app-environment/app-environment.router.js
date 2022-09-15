"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appEnvironmentRouter = void 0;
const express_1 = require("express");
const appEnvironmentRules = require("./app-environment.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const app_environment_service_1 = require("./app-environment.service");
exports.appEnvironmentRouter = express_1.Router();
const appEnvironmentService = new app_environment_service_1.AppEnvironmentService();
/*
 * GET
 */
exports.appEnvironmentRouter.get('/', route_validation_1.validateRequest(appEnvironmentRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await appEnvironmentService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.get('/current', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.getCurrentEnvironment();
    result.error ? next(result.error) : res.json(result.data);
}));
/*
* PUT
 */
exports.appEnvironmentRouter.put('/switch', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.switchEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/switch-codebase', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.switchCodebase(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/:appEnvironmentId/update-seed', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.updateSeed(`${req.params.appEnvironmentId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/:appEnvironmentId/rename', route_validation_1.validateRequest(appEnvironmentRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await appEnvironmentService.rename(`${req.params.appEnvironmentId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.delete('/:appEnvironmentId', route_validation_1.validateRequest(appEnvironmentRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    // const result = await appEnvironmentService.delete(`${req.params.appEnvironmentId}`);
    // result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.get('/:envId/state', route_validation_1.validateRequest(appEnvironmentRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.getEnvironmentState(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/:envId/state', route_validation_1.validateRequest(appEnvironmentRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.saveEnvironmentState(req.params.envId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=app-environment.router.js.map