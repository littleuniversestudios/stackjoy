"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceRouter = void 0;
const express_1 = require("express");
const workspaceRules = require("./workspace.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const workspace_service_1 = require("./workspace.service");
const app_interface_1 = require("../../../shared/interfaces/app.interface");
const check_1 = require("express-validator/check");
exports.workspaceRouter = express_1.Router();
const workspaceService = new workspace_service_1.WorkspaceService();
/*
 * GET
 */
exports.workspaceRouter.get('/', route_validation_1.validateRequest(workspaceRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/remote', route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.getRemoteEnvironments();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/invites', route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.getInvites(app_interface_1.App.Environment.Type.Workspace, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:appEnvironmentId', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.findById(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:envId/userProfiles', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.getUserProfilesForEnv(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:envId/suggestedStacks', route_validation_1.validateRequest([check_1.param('envId').exists().isString()]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.getSuggestedStacks(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.workspaceRouter.post('/:envId/acceptInvite', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.acceptInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/:envId/declineInvite', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.declineInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/:envId/updateUserPermission', check_1.param('envId').isString(), check_1.body('targetId').isString(), check_1.body('permission').isNumeric(), route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.updateUserPermission(req.params['envId'], req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/sync', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.syncEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
exports.workspaceRouter.put('/publish', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.publishEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.put('/install', route_validation_1.validateRequest(workspaceRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.installWorkspace(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * DELETE
 */
exports.workspaceRouter.delete('/:appEnvironmentId', route_validation_1.validateRequest(workspaceRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.delete(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.delete('/purge/:remoteId', route_validation_1.validateRequest(workspaceRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await workspaceService.purge(req.params.remoteId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=workspace.router.js.map