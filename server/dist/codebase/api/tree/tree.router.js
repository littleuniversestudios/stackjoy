"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeRouter = void 0;
const express_1 = require("express");
const treeRules = require("./tree.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const tree_service_1 = require("./tree.service");
exports.treeRouter = express_1.Router();
const treeService = new tree_service_1.TreeService();
exports.treeRouter.get('/', route_validation_1.validateRequest(treeRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const rootPath = req.query.rootPath;
    const ignoreList = req.query.ignoreList;
    const foldersOnly = `${req.query.foldersOnly}` === 'true';
    const deep = `${req.query.deep}` !== 'false';
    const tree = treeService.getTree(rootPath, ignoreList, foldersOnly, deep);
    return res.json(tree);
}));
//# sourceMappingURL=tree.router.js.map