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
// configRouter.get('/', validateRequest(configRules.forLIST), handleRoute(async (req, res, next) => {
//     const result = configService.findAll();
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// configRouter.get('/:configid', validateRequest(configRules.forGET), handleRoute(async (req, res, next) => {
//     const result = configService.findById(req.params.configId);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// configRouter.post('/', validateRequest(configRules.forPOST), handleRoute(async (req, res, next) => {
//     const result = configService.create(req.body);
//     result.error ? next(result.error) : res.json(result.data);
// }));
exports.configRouter.put('/', route_validation_1.validateRequest(configRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const config = await configService.update(req.body);
    return config ? res.json(config) : next({ status: 400, message: "Entity does not exist" });
}));
// configRouter.delete('/:configId', validateRequest(configRules.forDELETE), handleRoute(async (req, res, next) => {
//     return res.json({ success: true });
// }));
//# sourceMappingURL=config.router.js.map