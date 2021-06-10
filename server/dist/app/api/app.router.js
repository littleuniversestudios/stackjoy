"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const app_environment_router_1 = require("./app-environment/app-environment.router");
exports.appRouter = express_1.Router();
exports.appRouter.use('/environment', app_environment_router_1.appEnvironmentRouter);
//# sourceMappingURL=app.router.js.map