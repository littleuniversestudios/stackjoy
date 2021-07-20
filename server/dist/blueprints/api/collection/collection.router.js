"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionRouter = void 0;
const express_1 = require("express");
const collectionRules = require("./collection.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
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
// collectionRouter.post('/', validateRequest(collectionRules.forPOST), handleRoute(async (req, res, next) => {
//     const result = collectionService.create(req.body);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// collectionRouter.put('/:templateId', validateRequest(collectionRules.forPUT), handleRoute(async (req, res, next) => {
//     const template = await collectionService.update(parseInt(`${req.params.templateId}`), req.body);
//     return template ? res.json(template) : next({ status: 400, message: "Entity does not exist" });
// }));
//
exports.collectionRouter.delete('/:collectionId', route_validation_1.validateRequest(collectionRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = collectionService.deleteCollection(req.params.collectionId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=collection.router.js.map