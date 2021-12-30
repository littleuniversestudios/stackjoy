"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceRouter = void 0;
const express_1 = require("express");
const workspaceRules = require("./workspace.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const workspace_service_1 = require("./workspace.service");
exports.workspaceRouter = express_1.Router();
const workspaceService = new workspace_service_1.WorkspaceService();
/*
 * GET
 */
exports.workspaceRouter.get('/', route_validation_1.validateRequest(workspaceRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:appEnvironmentId', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.findById(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.workspaceRouter.post('/', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/sync', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.syncEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
exports.workspaceRouter.put('/publish', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.publishEnvironment(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.put('/install', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.installWorkspace(req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * DELETE
 */
exports.workspaceRouter.delete('/:appEnvironmentId', route_validation_1.validateRequest(workspaceRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.delete(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=workspace.router.js.map