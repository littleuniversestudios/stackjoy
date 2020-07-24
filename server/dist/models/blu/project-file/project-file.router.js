"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectFileRules = require("./project-file.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const project_file_service_1 = require("./project-file.service");
exports.projectFileRouter = express_1.Router();
const projectFileService = new project_file_service_1.ProjectFileService();
exports.projectFileRouter.get('/', route_validation_1.validateRequest(projectFileRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const projectFile = projectFileService.findAll();
    return res.json(projectFile);
}));
exports.projectFileRouter.get('/:filePath', route_validation_1.validateRequest(projectFileRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const projectFile = projectFileService.findByPath(req.params.filePath);
    return res.json(projectFile);
}));
exports.projectFileRouter.post('/', route_validation_1.validateRequest(projectFileRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const projectFile = projectFileService.create(req.body);
    return res.json(projectFile);
}));
exports.projectFileRouter.put('/', route_validation_1.validateRequest(projectFileRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = projectFileService.update(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.projectFileRouter.delete('/:projectFileId', route_validation_1.validateRequest(projectFileRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=project-file.router.js.map