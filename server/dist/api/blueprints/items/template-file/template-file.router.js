"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateFileRouter = void 0;
const express_1 = require("express");
const templateFileRules = require("./template-file.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const template_file_service_1 = require("./template-file.service");
exports.templateFileRouter = (0, express_1.Router)();
const templateFileService = new template_file_service_1.TemplateFileService();
exports.templateFileRouter.get('/', (0, route_validation_1.validateRequest)(templateFileRules.forGET), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const contents = templateFileService.findByPath(req.query.path);
    return res.json({ contents });
}));
exports.templateFileRouter.post('/', (0, route_validation_1.validateRequest)(templateFileRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateFileService.createFile(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.post('/folder', (0, route_validation_1.validateRequest)(templateFileRules.forPOST), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateFileService.createFolder(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.put('/', (0, route_validation_1.validateRequest)(templateFileRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateFileService.update(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.put('/rename', (0, route_validation_1.validateRequest)(templateFileRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateFileService.rename(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.put('/duplicate', (0, route_validation_1.validateRequest)(templateFileRules.forPUT), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateFileService.duplicate(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.delete('/', (0, route_validation_1.validateRequest)(templateFileRules.forDELETE), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = templateFileService.delete(req.query.absolutePath);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=template-file.router.js.map