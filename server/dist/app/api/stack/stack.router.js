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
exports.stackRouter.get('/', route_validation_1.validateRequest(stackRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = stackService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/:stackId', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = stackService.findById(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/', route_validation_1.validateRequest(stackRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = stackService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.delete('/:stackId', route_validation_1.validateRequest(stackRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    stackService.deleteStack(`${req.params.stackId}`);
    return res.json({ success: true });
}));
exports.stackRouter.post('/sync', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.pullRemoteStack(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/publish', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.pushToRemoteStack(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/download', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.downloadStack(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.installStackIntoCurrentEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:stackId/add-collection', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const appEnvironment = await stackService.addCollectionToStack(`${req.params.stackId}`, req.body);
    return appEnvironment ? res.json(appEnvironment) : next({ status: 400, message: "Entity does not exist" });
}));
exports.stackRouter.put('/:stackId', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const appEnvironment = await stackService.update(parseInt(`${req.params.stackId}`), req.body);
    return appEnvironment ? res.json(appEnvironment) : next({ status: 400, message: "Entity does not exist" });
}));
//# sourceMappingURL=stack.router.js.map