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
exports.appEnvironmentRouter.get('/', route_validation_1.validateRequest(appEnvironmentRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.get('/current', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.getCurrentEnvironment();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/switch', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.switchEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/switch-codebase', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.switchCodebase(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/remove-codebase', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.removeCodebase(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/publish', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await appEnvironmentService.publishEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/install', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await appEnvironmentService.installEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.post('/sync', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await appEnvironmentService.syncEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.get('/:appEnvironmentid', route_validation_1.validateRequest(appEnvironmentRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.findById(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.post('/', route_validation_1.validateRequest(appEnvironmentRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appEnvironmentService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.appEnvironmentRouter.put('/:appEnvironmentId', route_validation_1.validateRequest(appEnvironmentRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const appEnvironment = await appEnvironmentService.update(parseInt(`${req.params.appEnvironmentId}`), req.body);
    return appEnvironment ? res.json(appEnvironment) : next({ status: 400, message: "Entity does not exist" });
}));
exports.appEnvironmentRouter.delete('/:appEnvironmentId', route_validation_1.validateRequest(appEnvironmentRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=app-environment.router.js.map