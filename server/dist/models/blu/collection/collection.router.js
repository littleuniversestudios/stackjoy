"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const collectionRules = require("./collection.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const collection_service_1 = require("./collection.service");
exports.collectionRouter = express_1.Router();
const collectionService = new collection_service_1.CollectionService();
exports.collectionRouter.get('/', route_validation_1.validateRequest(collectionRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.collectionRouter.get('/:collectionName', route_validation_1.validateRequest(collectionRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.findById(req.params.collectionName);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.collectionRouter.post('/', route_validation_1.validateRequest(collectionRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.create(req.body);
    return result;
}));
exports.collectionRouter.put('/:collectionId', route_validation_1.validateRequest(collectionRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const collection = await collectionService.update(parseInt(`${req.params.collectionId}`), req.body);
    return collection ? res.json(collection) : next({ status: 400, message: "Entity does not exist" });
}));
exports.collectionRouter.delete('/:collectionId', route_validation_1.validateRequest(collectionRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=collection.router.js.map