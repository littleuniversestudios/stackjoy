"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const express_1 = require("express");
const codebase_router_1 = require("./codebase/api/codebase.router");
const blueprints_router_1 = require("./blueprints/api/blueprints.router");
const app_router_1 = require("./app/api/app.router");
const system_router_1 = require("./system/api/system.router");
const express = require("express");
exports.mainRouter = express_1.Router();
exports.mainRouter.use(express.json());
exports.mainRouter.use(express.urlencoded({ extended: true }));
exports.mainRouter.use('/system', system_router_1.systemRouter);
exports.mainRouter.use('/app', app_router_1.appRouter);
exports.mainRouter.use('/codebase', codebase_router_1.codebaseRouter);
exports.mainRouter.use('/blueprints', blueprints_router_1.blueprintsRouter);
//# sourceMappingURL=main.router.js.map