"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const check_1 = require("express-validator/check");
const globals_1 = require("../../../globals");
exports.authRouter = express_1.Router();
/*
 * GET
 */
exports.authRouter.get('/status', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.status();
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.authRouter.post('/activateUser', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.activateUser(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/login', route_validation_1.validateRequest([
    check_1.body("email").isEmail(),
    check_1.body("password").isString(),
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.login(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/logout', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.logout();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/signup', route_validation_1.validateRequest([
    check_1.body('email').isEmail(),
    check_1.body('username').isString(),
    check_1.body('password').isString()
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.signup(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/resetPassword', route_validation_1.validateRequest([
    check_1.body('email').isEmail(),
]), route_handler_1.handleRoute(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.resetPassword(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
/*
 * DELETE
 */
//# sourceMappingURL=auth.router.js.map