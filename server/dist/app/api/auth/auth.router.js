"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const auth_service_1 = require("./auth.service");
const check_1 = require("express-validator/check");
exports.authRouter = express_1.Router();
const authService = new auth_service_1.AuthService();
/*
 * GET
 */
exports.authRouter.get('/status', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await authService.status();
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.authRouter.post('/activateUser', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await authService.activateUser(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/login', route_validation_1.validateRequest([
    check_1.body("email").isEmail(),
    check_1.body("password").isString(),
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await auth_service_1.AuthService.login(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/logout', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await authService.logout();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/signup', route_validation_1.validateRequest([
    check_1.body('email').isEmail(),
    check_1.body('username').isString(),
    check_1.body('password').isString()
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await authService.signup(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/resetPassword', route_validation_1.validateRequest([
    check_1.body('email').isEmail(),
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await authService.resetPassword(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
/*
 * DELETE
 */
//# sourceMappingURL=auth.router.js.map