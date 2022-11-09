"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express_1 = require("express");
const itemRules = require("./item.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const item_service_1 = require("./item.service");
const globals_1 = require("../../../../globals");
exports.itemRouter = (0, express_1.Router)();
const itemService = new item_service_1.ItemService();
exports.itemRouter.get('/', (0, route_validation_1.validateRequest)(itemRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
    const response = blueprints.allItems();
    const result = {
        error: null,
        data: response
    };
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.get('/tree', (0, route_validation_1.validateRequest)(itemRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
    const response = blueprints.tree();
    const result = {
        error: null,
        data: response
    };
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.get('/:itemId', (0, route_validation_1.validateRequest)(itemRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const item = itemService.findById(parseInt(`${req.params.itemId}`));
    return res.json(item);
}));
exports.itemRouter.put('/:itemId/readme', (0, route_validation_1.validateRequest)(itemRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await itemService.updateReadme(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.put('/:itemId/variables', (0, route_validation_1.validateRequest)(itemRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await itemService.updateVariables(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.put('/:itemId/config', (0, route_validation_1.validateRequest)(itemRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await itemService.updateConfig(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.put('/:itemId/links', (0, route_validation_1.validateRequest)(itemRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await itemService.updateLinks(`${req.params.itemId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.delete('/:itemId', (0, route_validation_1.validateRequest)(itemRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=item.router.js.map