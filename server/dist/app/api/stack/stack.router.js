"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackRouter = void 0;
const express_1 = require("express");
const stackRules = require("./stack.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const stack_service_1 = require("./stack.service");
exports.stackRouter = express_1.Router();
const stackService = new stack_service_1.StackService();
/*
 * GET
 */
exports.stackRouter.get('/', route_validation_1.validateRequest(stackRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/:stackId', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.findById(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.stackRouter.post('/', route_validation_1.validateRequest(stackRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/sync', route_validation_1.validateRequest(stackRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.syncEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
exports.stackRouter.put('/publish', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.publishEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/download', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.downloadStack(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install', route_validation_1.validateRequest(stackRules.forInstallStack), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.installStackIntoCurrentEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install-seed', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.installSeedIntoCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:stackId/add-collection', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.addCollectionToStack(`${req.params.stackId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * DELETE
 */
exports.stackRouter.delete('/:stackId', route_validation_1.validateRequest(stackRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.deleteStack(`${req.params.stackId}`);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=stack.router.js.map