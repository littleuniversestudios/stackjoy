"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateRouter = void 0;
const express_1 = require("express");
const templateRules = require("./template.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const template_service_1 = require("./template.service");
exports.templateRouter = express_1.Router();
const templateService = new template_service_1.TemplateService();
exports.templateRouter.get('/', route_validation_1.validateRequest(templateRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.get('/:templateName', route_validation_1.validateRequest(templateRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.findById(req.params.templateName);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/', route_validation_1.validateRequest(templateRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.create(req.body);
    result.error ? next(result.error) : res.json({ success: result.data.success, template: result.data.template.info });
}));
exports.templateRouter.post('/duplicate/:templateId', route_validation_1.validateRequest(templateRules.forDUPLICATE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.duplicate(req.params.templateId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/copy/:templateId', route_validation_1.validateRequest(templateRules.forDUPLICATE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.copy(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/file/:templateId', route_validation_1.validateRequest(templateRules.forDUPLICATE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.createFile(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/folder/:templateId', route_validation_1.validateRequest(templateRules.forDUPLICATE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.createFolder(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.put('/rename', route_validation_1.validateRequest(templateRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await templateService.rename(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.delete('/:templateId', route_validation_1.validateRequest(templateRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateService.delete(req.params.templateId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=template.router.js.map