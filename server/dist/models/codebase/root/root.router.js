"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootRules = require("./root.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const root_service_1 = require("./root.service");
exports.rootRouter = express_1.Router();
const rootService = new root_service_1.RootService();
exports.rootRouter.get('/', route_validation_1.validateRequest(rootRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const root = rootService.getDirRoot();
    return res.json(root);
}));
exports.rootRouter.put('/', route_validation_1.validateRequest(rootRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const root = rootService.update(req.body);
    return res.json(root);
}));
//# sourceMappingURL=root.router.js.map