"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const templateFileRules = require("./template-file.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const template_file_service_1 = require("./template-file.service");
exports.templateFileRouter = express_1.Router();
const templateFileService = new template_file_service_1.TemplateFileService();
exports.templateFileRouter.get('/', route_validation_1.validateRequest(templateFileRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const templateFile = templateFileService.findAll();
    return res.json(templateFile);
}));
exports.templateFileRouter.get('/:filePath', route_validation_1.validateRequest(templateFileRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const templateFile = templateFileService.findByPath(req.params.filePath);
    return res.json(templateFile);
}));
exports.templateFileRouter.post('/', route_validation_1.validateRequest(templateFileRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const templateFile = templateFileService.create(req.body);
    return res.json(templateFile);
}));
exports.templateFileRouter.put('/', route_validation_1.validateRequest(templateFileRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const result = templateFileService.update(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateFileRouter.delete('/:templateFileId', route_validation_1.validateRequest(templateFileRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=template-file.router.js.map