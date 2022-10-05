"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const codebase_router_1 = require("./codebase/codebase.router");
const blueprints_router_1 = require("./blueprints/blueprints.router");
const app_router_1 = require("./app/app.router");
const system_router_1 = require("./system/system.router");
const express = require("express");
exports.apiRouter = express_1.Router();
exports.apiRouter.use(express.json({ limit: '50mb' }));
exports.apiRouter.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 150000 }));
exports.apiRouter.use('/app', app_router_1.appRouter);
exports.apiRouter.use('/system', system_router_1.systemRouter);
exports.apiRouter.use('/codebase', codebase_router_1.codebaseRouter);
exports.apiRouter.use('/blueprints', blueprints_router_1.blueprintsRouter);
/**
 * NOTE: /upload is on its own (it is not /api/upload) because it does not use json
 * it is provided directly in the index.ts file and not in the api router
 */
//# sourceMappingURL=api.router.js.map