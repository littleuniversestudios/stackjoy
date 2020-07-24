"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fsRules = require("./fs.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const fs_service_1 = require("./fs.service");
exports.fsRouter = express_1.Router();
const fsService = new fs_service_1.FsService();
exports.fsRouter.get('/', route_validation_1.validateRequest(fsRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = fsService.systemInfo();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.fsRouter.post('/', route_validation_1.validateRequest(fsRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = fsService.changeWorkingDirectory(req.body.path);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.fsRouter.post('/folder', route_validation_1.validateRequest(fsRules.forPOSTFolder), route_handler_1.handleRoute(async (req, res, next) => {
    const result = fsService.createFolder(req.body.path, req.body.name);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=fs.router.js.map