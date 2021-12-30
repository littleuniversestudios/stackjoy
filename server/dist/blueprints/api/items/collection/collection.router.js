"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionRouter = void 0;
const express_1 = require("express");
const collectionRules = require("./collection.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const collection_service_1 = require("./collection.service");
exports.collectionRouter = express_1.Router();
const collectionService = new collection_service_1.CollectionService();
exports.collectionRouter.get('/', route_validation_1.validateRequest(collectionRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
// collectionRouter.get('/:templateName', validateRequest(collectionRules.forGET), handleRoute(async (req, res, next) => {
//     const result = collectionService.findByName(req.params.templateName);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
exports.collectionRouter.post('/', route_validation_1.validateRequest(collectionRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.collectionRouter.put('/:collectionId', route_validation_1.validateRequest(collectionRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await collectionService.rename(req.params.collectionId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.collectionRouter.delete('/:collectionId', route_validation_1.validateRequest(collectionRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.deleteCollection(req.params.collectionId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=collection.router.js.map