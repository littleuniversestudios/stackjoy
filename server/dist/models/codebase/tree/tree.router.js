"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const treeRules = require("./tree.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const tree_service_1 = require("./tree.service");
exports.treeRouter = express_1.Router();
const treeService = new tree_service_1.TreeService();
exports.treeRouter.get('/', route_validation_1.validateRequest(treeRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const tree = treeService.getTree(req.query.rootPath, req.query.ignoreList, req.query.foldersOnly);
    return res.json(tree);
}));
exports.treeRouter.get('/:treeId', route_validation_1.validateRequest(treeRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const tree = treeService.findById(parseInt(`${req.params.treeId}`));
    return res.json(tree);
}));
exports.treeRouter.post('/', route_validation_1.validateRequest(treeRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const tree = treeService.create(req.body);
    return res.json(tree);
}));
exports.treeRouter.put('/:treeId', route_validation_1.validateRequest(treeRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const tree = await treeService.update(parseInt(`${req.params.treeId}`), req.body);
    return tree ? res.json(tree) : next({ status: 400, message: "Entity does not exist" });
}));
exports.treeRouter.delete('/:treeId', route_validation_1.validateRequest(treeRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=tree.router.js.map