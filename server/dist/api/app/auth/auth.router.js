"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const check_1 = require("express-validator/check");
const globals_1 = require("../../../globals");
const models_1 = require("@stackjoy/shared/models");
exports.authRouter = (0, express_1.Router)();
/*
 * GET
 */
exports.authRouter.get('/status', (0, route_validation_1.validateRequest)([]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.status();
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * POST
 */
exports.authRouter.post('/activateUser', (0, route_validation_1.validateRequest)([]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.activateUser(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/login', (0, route_validation_1.validateRequest)([
    (0, check_1.body)("email").isEmail(),
    (0, check_1.body)("password").isString(),
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.login(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/logout', (0, route_validation_1.validateRequest)([]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.logout();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/signup', (0, route_validation_1.validateRequest)([
    (0, check_1.body)('email').isEmail(),
    (0, check_1.body)('username').isString(),
    (0, check_1.body)('password').isString()
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.signup(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/resetPassword', (0, route_validation_1.validateRequest)([
    (0, check_1.body)('email').isEmail(),
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.resetPassword(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
exports.authRouter.post('/upgradeAccount', (0, route_validation_1.validateRequest)([
    (0, check_1.body)('newAccountType').isNumeric().isIn(Object.keys(models_1.AccountType))
]), (0, route_handler_1.handleRoute)(async (req, res, next) => {
    const result = await globals_1.AUTH_SERVICE.upgradeAccount(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
/*
 * PUT
 */
/*
 * DELETE
 */
//# sourceMappingURL=auth.router.js.map