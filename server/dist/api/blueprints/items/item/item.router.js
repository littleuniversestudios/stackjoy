"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express_1 = require("express");
const itemRules = require("./item.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const item_service_1 = require("./item.service");
const globals_1 = require("../../../../globals");
exports.itemRouter = express_1.Router();
const itemService = new item_service_1.ItemService();
exports.itemRouter.get('/', route_validation_1.validateRequest(itemRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
    const response = blueprints.allItems();
    const result = {
        error: null,
        data: response
    };
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.get('/tree', route_validation_1.validateRequest(itemRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
    const response = blueprints.tree();
    const result = {
        error: null,
        data: response
    };
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.get('/:itemId', route_validation_1.validateRequest(itemRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const item = itemService.findById(parseInt(`${req.params.itemId}`));
    return res.json(item);
}));
exports.itemRouter.put('/:itemId/readme', route_validation_1.validateRequest(itemRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await itemService.updateReadme(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.put('/:itemId/variables', route_validation_1.validateRequest(itemRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await itemService.updateVariables(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.put('/:itemId/config', route_validation_1.validateRequest(itemRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await itemService.updateConfig(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.put('/:itemId/links', route_validation_1.validateRequest(itemRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await itemService.updateLinks(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.delete('/:itemId', route_validation_1.validateRequest(itemRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=item.router.js.map