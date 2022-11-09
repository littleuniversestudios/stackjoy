"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentRouter = void 0;
const express_1 = require("express");
const appEnvironmentRules = require("./environment.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const environment_service_1 = require("./environment.service");
exports.environmentRouter = (0, express_1.Router)();
const appEnvironmentService = new environment_service_1.EnvironmentService();
/*
 * GET
 */
exports.environmentRouter.get('/', (0, route_validation_1.validateRequest)(appEnvironmentRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await appEnvironmentService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.get('/current', (0, route_validation_1.validateRequest)(appEnvironmentRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await appEnvironmentService.getCurrentEnvironment(req.query.refresh === 'true');
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.get('/post-install-stacks', (0, route_validation_1.validateRequest)(appEnvironmentRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appEnvironmentService.getPostInstallStacks();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.get('/:envId/state', (0, route_validation_1.validateRequest)(appEnvironmentRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appEnvironmentService.getEnvironmentState(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
* PUT
 */
exports.environmentRouter.put('/switch', (0, route_validation_1.validateRequest)(appEnvironmentRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appEnvironmentService.switchEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.put('/switch-codebase', (0, route_validation_1.validateRequest)(appEnvironmentRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appEnvironmentService.switchCodebase(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.put('/:appEnvironmentId/update-seed', (0, route_validation_1.validateRequest)(appEnvironmentRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appEnvironmentService.updateSeed(`${req.params.appEnvironmentId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.put('/:appEnvironmentId/rename', (0, route_validation_1.validateRequest)(appEnvironmentRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await appEnvironmentService.rename(`${req.params.appEnvironmentId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.environmentRouter.put('/:envId/state', (0, route_validation_1.validateRequest)(appEnvironmentRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = appEnvironmentService.saveEnvironmentState(req.params.envId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
* DELETE
 */
exports.environmentRouter.delete('/:appEnvironmentId', (0, route_validation_1.validateRequest)(appEnvironmentRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    // const result = await appEnvironmentService.delete(`${req.params.appEnvironmentId}`);
    // result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=environment.router.js.map