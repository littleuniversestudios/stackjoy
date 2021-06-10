"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readmeRouter = void 0;
const express_1 = require("express");
const readmeRules = require("./readme.rules");
const route_validation_1 = require("../../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../../shared/middlewares/route-handler");
const readme_service_1 = require("./readme.service");
exports.readmeRouter = express_1.Router();
const readmeService = new readme_service_1.ReadmeService();
exports.readmeRouter.get('/', route_validation_1.validateRequest(readmeRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const readme = readmeService.findAll();
    return res.json(readme);
}));
exports.readmeRouter.get('/:readmeId', route_validation_1.validateRequest(readmeRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const readme = readmeService.findById(parseInt(`${req.params.readmeId}`));
    return res.json(readme);
}));
exports.readmeRouter.post('/', route_validation_1.validateRequest(readmeRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const readme = readmeService.create(req.body);
    return res.json(readme);
}));
exports.readmeRouter.put('/:readmeId', route_validation_1.validateRequest(readmeRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const readme = await readmeService.update(parseInt(`${req.params.readmeId}`), req.body);
    return readme ? res.json(readme) : next({ status: 400, message: "Entity does not exist" });
}));
exports.readmeRouter.delete('/:readmeId', route_validation_1.validateRequest(readmeRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=readme.router.js.map