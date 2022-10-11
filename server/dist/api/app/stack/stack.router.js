"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackRouter = void 0;
const express_1 = require("express");
const stackRules = require("./stack.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const stack_service_1 = require("./stack.service");
const app_interface_1 = require("../../../shared/interfaces/app.interface");
const workspaceRules = require("../workspace/workspace.rules");
const check_1 = require("express-validator/check");
exports.stackRouter = express_1.Router();
const stackService = new stack_service_1.StackService();
/*
 * GET
 */
exports.stackRouter.get('/', route_validation_1.validateRequest(stackRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/remote', route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.getRemoteEnvironments();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/public', route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.getPublicStacks();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/invites', route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.getInvites(app_interface_1.App.Environment.Type.Stack, req.header('Firebase-Auth-Token'));
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/:stackId/tags', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.getTags(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/:stackId', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.findById(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.stackRouter.post('/', route_validation_1.validateRequest(stackRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/sync', route_validation_1.validateRequest(stackRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.syncEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/:envId/acceptInvite', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.acceptInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/:envId/declineInvite', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.declineInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/:envId/star', route_validation_1.validateRequest(workspaceRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.star(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
exports.stackRouter.put('/publish', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.publishEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/download', route_validation_1.validateRequest(stackRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.downloadStack(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install', route_validation_1.validateRequest(stackRules.forInstallStack), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.installStackIntoCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install-seed', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.installSeedIntoCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:stackId/add-collection', route_validation_1.validateRequest(stackRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.addCollectionToStack(`${req.params.stackId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:envId/description', route_validation_1.validateRequest([
    check_1.body('description').exists().isString(),
    check_1.param('envId').exists().isString()
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.updateDescription(req.params.envId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:remoteId/tags/:tag', route_validation_1.validateRequest([
    check_1.param('remoteId').isString(),
    check_1.param('tag').isString()
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.addTag(req.params.remoteId, req.params.tag);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * DELETE
 */
exports.stackRouter.delete('/:stackId', route_validation_1.validateRequest(stackRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.deleteStack(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.delete('/purge/:remoteId', route_validation_1.validateRequest(stackRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.purge(req.params.remoteId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.delete('/:remoteId/tags/:tag', route_validation_1.validateRequest([
    check_1.param('remoteId').isString(),
    check_1.param('tag').isString()
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await stackService.deleteTag(req.params.remoteId, req.params.tag);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=stack.router.js.map