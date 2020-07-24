"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stackjoy_project_router_1 = require("./stackjoy-project/stackjoy-project.router");
const route_handler_1 = require("../../middlewares/route-handler");
const firebase_1 = require("../../lib/firebase");
exports.stackjoyRouter = express_1.Router();
// todo: there should be an auth middleware guard before any private  stackjoy routes are executed to
//  guarantee that there is a user still synced on the server side (otherwise log user out on the client)
exports.stackjoyRouter.post('/login', [], route_handler_1.handleRoute(async (req, res, next) => {
    const user = await firebase_1.authenticateUserWithCredentials(req.body);
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    // console.log('                Logging into stackjoy server');
    // console.log('                  USER IS LOGGED IN: ', !!user);
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    res.json({ user });
}));
exports.stackjoyRouter.get('/logout', [], route_handler_1.handleRoute(async (req, res, next) => {
    firebase_1.logoutCurrentUser();
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    // console.log('                Logging out of stackjoy server');
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    res.json({ logout: true });
}));
exports.stackjoyRouter.use('/project', stackjoy_project_router_1.stackjoyProjectRouter);
//# sourceMappingURL=stackjoy.router.js.map