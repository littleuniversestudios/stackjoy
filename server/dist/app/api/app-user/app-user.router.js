"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appUserRouter = void 0;
const express_1 = require("express");
const appUserRules = require("./app-user.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const app_user_service_1 = require("./app-user.service");
exports.appUserRouter = express_1.Router();
const appUserService = new app_user_service_1.AppUserService();
// appUserRouter.get('/', validateRequest(appUserRules.forLIST), handleRoute(async (req, res, next) => {
//     const result = appUserService.findAll();
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// appUserRouter.get('/appUserId', validateRequest(appUserRules.forGET), handleRoute(async (req, res, next) => {
//     const result = appUserService.findById(req.params.appUserId);
//     result.error ? next(result.error) : res.json(result.data);
// }));
exports.appUserRouter.post('/init', route_validation_1.validateRequest(appUserRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = appUserService.init(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
// appUserRouter.put('/:appUserId', validateRequest(appUserRules.forPUT), handleRoute(async (req, res, next) => {
//     const result = appUserService.update(req.params.appUserId, req.body);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//
// appUserRouter.delete('/:appUserId', validateRequest(appUserRules.forDELETE), handleRoute(async (req, res, next) => {
//     const result = appUserService.remove(req.params.appUserId);
//     result.error ? next(result.error) : res.json(result.data);
// }));
//# sourceMappingURL=app-user.router.js.map