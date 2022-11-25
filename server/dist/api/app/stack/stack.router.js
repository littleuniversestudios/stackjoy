"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackRouter = void 0;
const express_1 = require("express");
const stackRules = require("./stack.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const stack_service_1 = require("./stack.service");
const workspaceRules = require("../workspace/workspace.rules");
const express_validator_1 = require("express-validator");
exports.stackRouter = (0, express_1.Router)();
const stackService = new stack_service_1.StackService();
/*
 * GET
 */
exports.stackRouter.get('/', (0, route_validation_1.validateRequest)(stackRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/remote', (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.getRemoteEnvironments();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/public', (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.getPublicStacks();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/:stackId/tags', (0, route_validation_1.validateRequest)(stackRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.getTags(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.get('/:stackId', (0, route_validation_1.validateRequest)(stackRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.findById(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.stackRouter.post('/', (0, route_validation_1.validateRequest)(stackRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.create(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/sync', (0, route_validation_1.validateRequest)(stackRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.syncEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/:envId/acceptInvite', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.acceptInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/:envId/declineInvite', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.declineInvite(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.post('/:envId/star', (0, route_validation_1.validateRequest)(workspaceRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.star(req.params.envId);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
exports.stackRouter.put('/publish', (0, route_validation_1.validateRequest)(stackRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.publishEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/download', (0, route_validation_1.validateRequest)(stackRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.downloadStack(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install', (0, route_validation_1.validateRequest)(stackRules.forInstallStack), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.installStackIntoCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/install-seed', (0, route_validation_1.validateRequest)(stackRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.installSeedIntoCurrentEnvironment(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:stackId/add-collection', (0, route_validation_1.validateRequest)(stackRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.addCollectionToStack(`${req.params.stackId}`, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:envId/description', (0, route_validation_1.validateRequest)([
    (0, express_validator_1.body)('description').exists().isString(),
    (0, express_validator_1.param)('envId').exists().isString()
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.updateDescription(req.params.envId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.put('/:remoteId/tags/:tag', (0, route_validation_1.validateRequest)([
    (0, express_validator_1.param)('remoteId').isString(),
    (0, express_validator_1.param)('tag').isString()
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.addTag(req.params.remoteId, req.params.tag);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * DELETE
 */
exports.stackRouter.delete('/:stackId', (0, route_validation_1.validateRequest)(stackRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.deleteStack(req.params.stackId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.delete('/purge/:remoteId', (0, route_validation_1.validateRequest)(stackRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.purge(req.params.remoteId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.stackRouter.delete('/:remoteId/tags/:tag', (0, route_validation_1.validateRequest)([
    (0, express_validator_1.param)('remoteId').isString(),
    (0, express_validator_1.param)('tag').isString()
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await stackService.deleteTag(req.params.remoteId, req.params.tag);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=stack.router.js.map