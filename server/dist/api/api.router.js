"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const codebase_router_1 = require("./codebase/codebase.router");
const blueprints_router_1 = require("./blueprints/blueprints.router");
const app_router_1 = require("./app/app.router");
const system_router_1 = require("./system/system.router");
const express = require("express");
const globals_1 = require("../globals");
const sj_server_model_1 = require("../models/SJServer/sj.server.model");
exports.apiRouter = (0, express_1.Router)();
// Has to be first so it doesn't parse any body content
exports.apiRouter.use(sj_server_model_1.SJServerModel.PROXY_PREFIX, ...sj_server_model_1.SJServerModel.proxy(globals_1.SJ_SERVER_API_URL, `/api${sj_server_model_1.SJServerModel.PROXY_PREFIX}`));
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