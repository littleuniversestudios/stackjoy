"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateFileRouter = void 0;
const express_1 = require("express");
const templateFileRules = require("./template-file.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const template_file_service_1 = require("./template-file.service");
exports.templateFileRouter = express_1.Router();
const templateFileService = new template_file_service_1.TemplateFileService();
exports.templateFileRouter.get('/', route_validation_1.validateRequest(templateFileRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const contents = templateFileService.findByPath(req.query.path);
    return res.json({ contents });
}));
exports.templateFileRouter.post('/', route_validation_1.validateRequest(templateFileRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateFileService.createFile(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.post('/folder', route_validation_1.validateRequest(templateFileRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateFileService.createFolder(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.put('/', route_validation_1.validateRequest(templateFileRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateFileService.update(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.put('/rename', route_validation_1.validateRequest(templateFileRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateFileService.rename(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.delete('/', route_validation_1.validateRequest(templateFileRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateFileService.delete(req.query.absolutePath);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=template-file.router.js.map