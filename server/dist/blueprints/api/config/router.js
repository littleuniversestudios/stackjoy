"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configRouter = void 0;
const express_1 = require("express");
const configRules = require("./config.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const config_service_1 = require("./config.service");
exports.configRouter = express_1.Router();
const configService = new config_service_1.ConfigService();
exports.configRouter.get('/', route_validation_1.validateRequest(configRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = configService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.configRouter.get('/:configid', route_validation_1.validateRequest(configRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = configService.findById(req.params.configId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.configRouter.post('/', route_validation_1.validateRequest(configRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = configService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.configRouter.put('/:configId', route_validation_1.validateRequest(configRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const config = await configService.update(parseInt(`${req.params.configId}`), req.body);
    return config ? res.json(config) : next({ status: 400, message: "Entity does not exist" });
}));
exports.configRouter.delete('/:configId', route_validation_1.validateRequest(configRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=router.js.map