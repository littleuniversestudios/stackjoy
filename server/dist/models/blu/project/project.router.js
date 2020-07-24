"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectRules = require("./project.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const project_service_1 = require("./project.service");
exports.projectRouter = express_1.Router();
const projectService = new project_service_1.ProjectService();
exports.projectRouter.get('/', route_validation_1.validateRequest(projectRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = projectService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.projectRouter.get('/:projectName', route_validation_1.validateRequest(projectRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = projectService.findById(req.params.projectName);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.projectRouter.post('/', route_validation_1.validateRequest(projectRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const project = projectService.create(req.body);
    return res.json(project);
}));
exports.projectRouter.put('/:projectName', route_validation_1.validateRequest(projectRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const project = await projectService.update(parseInt(`${req.params.projectId}`), req.body);
    return project ? res.json(project) : next({ status: 400, message: "Entity does not exist" });
}));
exports.projectRouter.delete('/:projectName', route_validation_1.validateRequest(projectRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
exports.projectRouter.post('/:projectName/publish', route_validation_1.validateRequest(projectRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await projectService.publish(req.params.projectName, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=project.router.js.map