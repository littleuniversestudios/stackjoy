"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackRouter = void 0;
const express_1 = require("express");
const stackRules = require("./stack.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const stack_service_1 = require("./stack.service");
exports.stackRouter = (0, express_1.Router)();
const stackService = new stack_service_1.StackService();
// stackRouter.get('/', validateRequest(stackRules.forLIST), handleRoute(async (req, res, next) => {
//     const result = stackService.findAll();
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// stackRouter.get('/stackId', validateRequest(stackRules.forGET), handleRoute(async (req, res, next) => {
//     const result = stackService.findById(req.params.stackId);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// stackRouter.post('/', validateRequest(stackRules.forPOST), handleRoute(async (req, res, next) => {
//     const result = stackService.create(req.body);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// stackRouter.put('/:stackId', validateRequest(stackRules.forPUT), handleRoute(async (req, res, next) => {
//     const result = stackService.update(req.params.stackId, req.body);
//     result.error ? next(result.error) : res.json(result.data);
// }));
exports.stackRouter.delete('/:stackId', (0, route_validation_1.validateRequest)(stackRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = stackService.remove(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=stack.router.js.map