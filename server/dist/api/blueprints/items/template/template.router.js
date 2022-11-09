"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateRouter = void 0;
const express_1 = require("express");
const templateRules = require("./template.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const template_service_1 = require("./template.service");
exports.templateRouter = (0, express_1.Router)();
const templateService = new template_service_1.TemplateService();
exports.templateRouter.get('/', (0, route_validation_1.validateRequest)(templateRules.forLIST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.findAll();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.get('/:templateName', (0, route_validation_1.validateRequest)(templateRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.findById(req.params.templateName);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/', (0, route_validation_1.validateRequest)(templateRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.create(req.body);
    result.error ? next(result.error) : res.json({ success: result.data.success, template: result.data.template.info });
}));
exports.templateRouter.post('/duplicate/:templateId', (0, route_validation_1.validateRequest)(templateRules.forDUPLICATE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.duplicate(req.params.templateId);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/copy/:templateId', (0, route_validation_1.validateRequest)(templateRules.forDUPLICATE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.copy(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/file/:templateId', (0, route_validation_1.validateRequest)(templateRules.forDUPLICATE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.createFile(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/file-copy-from-codebase/:templateId', (0, route_validation_1.validateRequest)(templateRules.forDUPLICATE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.copyCodebaseFiles(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.post('/folder/:templateId', (0, route_validation_1.validateRequest)(templateRules.forDUPLICATE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.createFolder(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.put('/rename', (0, route_validation_1.validateRequest)(templateRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.rename(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.put('/:templateId/chainedTemplates', (0, route_validation_1.validateRequest)(templateRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.updateChainedTemplates(req.params.templateId, req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.delete('/:templateId', (0, route_validation_1.validateRequest)(templateRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateService.delete(req.params.templateId);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=template.router.js.map