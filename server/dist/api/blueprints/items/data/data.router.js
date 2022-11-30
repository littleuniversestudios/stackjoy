"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRouter = void 0;
const express_1 = require("express");
const dataRules = require("./data.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const data_service_1 = require("./data.service");
exports.dataRouter = (0, express_1.Router)();
const dataService = new data_service_1.DataService();
/**
 * GET Current Environment Data Members
 */
exports.dataRouter.get('/models', (0, route_validation_1.validateRequest)(dataRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.getModelsFromCurrentEnvironment();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.dataRouter.get('/inputs', (0, route_validation_1.validateRequest)(dataRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.getInputsFromCurrentEnvironment();
    result.error ? next(result.error) : res.json(result.data);
}));
/**
 * GET ANY Environment Data Members
 */
exports.dataRouter.get('/models/:environmentId', (0, route_validation_1.validateRequest)(dataRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.getModelsByEnvironmentId(req.params.environmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.dataRouter.get('/inputs/:environmentId', (0, route_validation_1.validateRequest)(dataRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.getInputsByEnvironmentId(req.params.environmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
/**
 * UPDATE Current Environment Data Members
 */
exports.dataRouter.put('/models/:parentId/:id', (0, route_validation_1.validateRequest)(dataRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.updateModelInCurrentEnvironment(req.params.parentId, req.params.id, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.dataRouter.put('/inputs/:parentId/:id', (0, route_validation_1.validateRequest)(dataRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.updateInputInCurrentEnvironment(req.params.parentId, req.params.id, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/**
 * CREATE Current Environment Data Members
 */
exports.dataRouter.post('/models', (0, route_validation_1.validateRequest)(dataRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.createModelInCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.dataRouter.post('/inputs', (0, route_validation_1.validateRequest)(dataRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.createInputInCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/**
 * DELETE Current Environment Data Members
 */
exports.dataRouter.delete('/models/:parentId/:id', (0, route_validation_1.validateRequest)(dataRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.deleteModelInCurrentEnvironment(req.params.parentId, req.params.id);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.dataRouter.delete('/inputs/:parentId/:id', (0, route_validation_1.validateRequest)(dataRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = dataService.deleteInputInCurrentEnvironment(req.params.parentId, req.params.id);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=data.router.js.map