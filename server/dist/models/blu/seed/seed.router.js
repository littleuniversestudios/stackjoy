"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seedRules = require("./seed.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const seed_service_1 = require("./seed.service");
exports.seedRouter = express_1.Router();
const seedService = new seed_service_1.SeedService();
exports.seedRouter.get('/', route_validation_1.validateRequest(seedRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const seed = seedService.findAll();
    return res.json(seed);
}));
exports.seedRouter.get('/:seedName', route_validation_1.validateRequest(seedRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = seedService.findById(req.params.seedName);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.seedRouter.post('/', route_validation_1.validateRequest(seedRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const seed = seedService.create(req.body);
    return res.json(seed);
}));
exports.seedRouter.put('/:seedId', route_validation_1.validateRequest(seedRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const seed = await seedService.update(parseInt(`${req.params.seedId}`), req.body);
    return seed ? res.json(seed) : next({ status: 400, message: "Entity does not exist" });
}));
exports.seedRouter.delete('/:seedId', route_validation_1.validateRequest(seedRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=seed.router.js.map