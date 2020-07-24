"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemRules = require("./item.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const item_service_1 = require("./item.service");
exports.itemRouter = express_1.Router();
const itemService = new item_service_1.ItemService();
exports.itemRouter.get('/', route_validation_1.validateRequest(itemRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = itemService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.itemRouter.get('/:itemId', route_validation_1.validateRequest(itemRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = itemService.findById(parseInt(`${req.params.itemId}`));
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=item.router.js.map