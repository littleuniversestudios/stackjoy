"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stackjoyProjectRules = require("./stackjoy-project.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const stackjoy_project_service_1 = require("./stackjoy-project.service");
exports.stackjoyProjectRouter = express_1.Router();
const stackjoyProjectService = new stackjoy_project_service_1.StackjoyProjectService();
exports.stackjoyProjectRouter.get('/', route_validation_1.validateRequest(stackjoyProjectRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const stackjoyProject = await stackjoyProjectService.findAll(req.query.term, req.query.name);
    return res.json(stackjoyProject);
}));
exports.stackjoyProjectRouter.get('/:stackjoyProjectId', route_validation_1.validateRequest(stackjoyProjectRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const stackjoyProject = stackjoyProjectService.findById(parseInt(`${req.params.stackjoyProjectId}`));
    return res.json(stackjoyProject);
}));
exports.stackjoyProjectRouter.get('/:projectId/download', route_validation_1.validateRequest(stackjoyProjectRules.forDOWNLOAD), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackjoyProjectService.download(req.params.projectId, req.query.name, req.query.version, req.query.overwrite, req.query.isSeed);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackjoyProjectRouter.post('/', route_validation_1.validateRequest(stackjoyProjectRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const stackjoyProject = stackjoyProjectService.create(req.body);
    return res.json(stackjoyProject);
}));
exports.stackjoyProjectRouter.put('/:stackjoyProjectId', route_validation_1.validateRequest(stackjoyProjectRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const stackjoyProject = await stackjoyProjectService.update(parseInt(`${req.params.stackjoyProjectId}`), req.body);
    return stackjoyProject ? res.json(stackjoyProject) : next({ status: 400, message: "Entity does not exist" });
}));
exports.stackjoyProjectRouter.delete('/:stackjoyProjectId', route_validation_1.validateRequest(stackjoyProjectRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=stackjoy-project.router.js.map