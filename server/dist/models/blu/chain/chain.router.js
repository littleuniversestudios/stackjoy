"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chainRules = require("./chain.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
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
exports.chainRouter.post('/', route_validation_1.validateRequest(chainRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const chain = chainService.create(req.body);
    return res.json(chain);
}));
exports.chainRouter.put('/:chainId', route_validation_1.validateRequest(chainRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const chain = await chainService.update(parseInt(`${req.params.chainId}`), req.body);
    return chain ? res.json(chain) : next({ status: 400, message: "Entity does not exist" });
}));
exports.chainRouter.delete('/:chainId', route_validation_1.validateRequest(chainRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=chain.router.js.map