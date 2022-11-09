"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceRouter = void 0;
const express_1 = require("express");
const workspaceRules = require("./workspace.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const workspace_service_1 = require("./workspace.service");
const check_1 = require("express-validator/check");
exports.workspaceRouter = (0, express_1.Router)();
const workspaceService = new workspace_service_1.WorkspaceService();
/*
 * GET
 */
exports.workspaceRouter.get('/', (0, route_validation_1.validateRequest)(workspaceRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/remote', (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.getRemoteEnvironments();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:appEnvironmentId', (0, route_validation_1.validateRequest)(workspaceRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.findById(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:envId/userProfiles', (0, route_validation_1.validateRequest)(workspaceRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.getUserProfilesForEnv(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.get('/:envId/suggestedStacks', (0, route_validation_1.validateRequest)([(0, check_1.param)('envId').exists().isString()]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.getSuggestedStacks(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.workspaceRouter.post('/:envId/acceptInvite', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.acceptInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/:envId/declineInvite', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.declineInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/:envId/updateUserPermission', (0, check_1.param)('envId').isString(), (0, check_1.body)('targetId').isString(), (0, check_1.body)('permission').isNumeric(), (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.updateUserPermission(req.params['envId'], req.body, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.post('/sync', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.syncEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
exports.workspaceRouter.put('/publish', (0, route_validation_1.validateRequest)(workspaceRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.publishEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.put('/install', (0, route_validation_1.validateRequest)(workspaceRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.installWorkspace(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * DELETE
 */
exports.workspaceRouter.delete('/:appEnvironmentId', (0, route_validation_1.validateRequest)(workspaceRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.delete(req.params.appEnvironmentId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.workspaceRouter.delete('/purge/:remoteId', (0, route_validation_1.validateRequest)(workspaceRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await workspaceService.purge(req.params.remoteId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=workspace.router.js.map