"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionRouter = void 0;
const express_1 = require("express");
const functionRules = require("./function.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const function_service_1 = require("./function.service");
exports.functionRouter = express_1.Router();
const functionService = new function_service_1.FunctionService();
exports.functionRouter.get('/', route_validation_1.validateRequest(functionRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = functionService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.get('/functionId', route_validation_1.validateRequest(functionRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = functionService.findById(req.params.functionId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.post('/', route_validation_1.validateRequest(functionRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = functionService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.put('/:functionId', route_validation_1.validateRequest(functionRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await functionService.update(req.params.functionId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.delete('/:functionId', route_validation_1.validateRequest(functionRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = functionService.deleteFunction(req.params.functionId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=function.router.js.map