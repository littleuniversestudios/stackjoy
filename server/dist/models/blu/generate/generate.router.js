"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generateRules = require("./generate.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const generate_service_1 = require("./generate.service");
exports.generateRouter = express_1.Router();
const generateService = new generate_service_1.GenerateService();
exports.generateRouter.get('/', route_validation_1.validateRequest(generateRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const generate = generateService.findAll();
    return res.json(generate);
}));
exports.generateRouter.get('/:generateId', route_validation_1.validateRequest(generateRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const generate = generateService.findById(parseInt(`${req.params.generateId}`));
    return res.json(generate);
}));
exports.generateRouter.post('/', route_validation_1.validateRequest(generateRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = generateService.generate(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.generateRouter.put('/:generateId', route_validation_1.validateRequest(generateRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const generate = await generateService.update(parseInt(`${req.params.generateId}`), req.body);
    return generate ? res.json(generate) : next({ status: 400, message: "Entity does not exist" });
}));
exports.generateRouter.delete('/:generateId', route_validation_1.validateRequest(generateRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=generate.router.js.map