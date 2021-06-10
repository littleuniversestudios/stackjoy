"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateRouter = void 0;
const express_1 = require("express");
const templateRules = require("./template.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
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
    result.error ? next(result.error) : res.json(result.data);
}));
exports.templateRouter.put('/:templateId', route_validation_1.validateRequest(templateRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const template = await templateService.update(parseInt(`${req.params.templateId}`), req.body);
    return template ? res.json(template) : next({ status: 400, message: "Entity does not exist" });
}));
exports.templateRouter.delete('/:templateId', route_validation_1.validateRequest(templateRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=template.router.js.map