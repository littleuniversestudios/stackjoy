"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRouter = void 0;
const express_1 = require("express");
const itemRules = require("./item.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const item_service_1 = require("./item.service");
const globals_1 = require("../../../globals");
exports.itemRouter = express_1.Router();
const itemService = new item_service_1.ItemService();
exports.itemRouter.get('/', route_validation_1.validateRequest(itemRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const blueprints = globals_1.APP_ENVIRONMENT.getBlueprints();
    const response = blueprints.allItems();
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
exports.itemRouter.post('/', route_validation_1.validateRequest(itemRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const item = itemService.create(req.body);
    return res.json(item);
}));
exports.itemRouter.put('/:itemId', route_validation_1.validateRequest(itemRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const item = await itemService.update(parseInt(`${req.params.itemId}`), req.body);
    return item ? res.json(item) : next({ status: 400, message: "Entity does not exist" });
}));
exports.itemRouter.delete('/:itemId', route_validation_1.validateRequest(itemRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=item.router.js.map