"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainRouter = void 0;
const express_1 = require("express");
const chainRules = require("./chain.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const chain_service_1 = require("./chain.service");
exports.chainRouter = express_1.Router();
const chainService = new chain_service_1.ChainService();
exports.chainRouter.get('/', route_validation_1.validateRequest(chainRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = chainService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.get('/:chainId', route_validation_1.validateRequest(chainRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = chainService.findById(req.params.chainId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.post('/', route_validation_1.validateRequest(chainRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = chainService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.post('/duplicate/:chainId', route_validation_1.validateRequest(chainRules.forDUPLICATE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = chainService.duplicate(req.params.chainId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.post('/copy/:chainId', route_validation_1.validateRequest(chainRules.forDUPLICATE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = chainService.copy(req.params.chainId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.put('/:chainId/rename', route_validation_1.validateRequest(chainRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await chainService.rename(req.params.chainId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.put('/:chainId/commands', route_validation_1.validateRequest(chainRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await chainService.updateCommands(req.params.chainId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.chainRouter.delete('/:chainId', route_validation_1.validateRequest(chainRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = chainService.delete(req.params.chainId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=chain.router.js.map