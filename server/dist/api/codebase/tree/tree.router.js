"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeRouter = void 0;
const express_1 = require("express");
const treeRules = require("./tree.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const tree_service_1 = require("./tree.service");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
exports.treeRouter = (0, express_1.Router)();
const treeService = new tree_service_1.TreeService();
exports.treeRouter.get('/', (0, route_validation_1.validateRequest)(treeRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const rootPath = req.query.rootPath;
    const ignoreList = req.query.ignoreList;
    const foldersOnly = `${req.query.foldersOnly}` === 'true';
    const deep = `${req.query.deep}` !== 'false';
    const tree = treeService.getTree(rootPath, ignoreList, foldersOnly, deep);
    return res.json(tree);
}));
exports.treeRouter.get('/path-exists', (0, route_validation_1.validateRequest)(treeRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const path = req.query.path;
    const exists = (0, fs_extra_1.existsSync)(path);
    let isDirectory = false;
    if (exists) {
        isDirectory = (0, fs_extra_1.lstatSync)(path).isDirectory();
    }
    return res.json({ path, exists, isDirectory });
}));
exports.treeRouter.post('/folder', (0, route_validation_1.validateRequest)(treeRules.forFolderPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const path = req.body.rootPath;
    const newFolderName = req.body.newFolderName;
    const newFolderPath = (0, path_1.join)(path, newFolderName);
    (0, fs_extra_1.ensureDirSync)(newFolderPath);
    return res.json({ path: newFolderPath, success: true });
}));
//# sourceMappingURL=tree.router.js.map