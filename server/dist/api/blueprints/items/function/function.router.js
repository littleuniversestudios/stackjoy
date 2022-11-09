"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionRouter = void 0;
const express_1 = require("express");
const functionRules = require("./function.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const function_service_1 = require("./function.service");
const templateRules = require("../template/template.rules");
exports.functionRouter = (0, express_1.Router)();
const functionService = new function_service_1.FunctionService();
exports.functionRouter.get('/', (0, route_validation_1.validateRequest)(functionRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = functionService.findAll();
    result.error ? next(result.error) : res.json(result.data.map(f => f.info));
}));
exports.functionRouter.get('/:functionId', (0, route_validation_1.validateRequest)(functionRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = functionService.findById(req.params.functionId);
    result.error ? next(result.error) : res.json(result.data.info);
}));
exports.functionRouter.post('/', (0, route_validation_1.validateRequest)(functionRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = functionService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.post('/duplicate/:functionId', (0, route_validation_1.validateRequest)(templateRules.forDUPLICATE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = functionService.duplicate(req.params.functionId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.put('/:functionId', (0, route_validation_1.validateRequest)(functionRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = functionService.update(req.params.functionId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.functionRouter.delete('/:functionId', (0, route_validation_1.validateRequest)(functionRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = functionService.deleteFunction(req.params.functionId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=function.router.js.map