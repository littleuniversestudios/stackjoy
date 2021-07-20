"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const app_environment_router_1 = require("./app-environment/app-environment.router");
const stack_router_1 = require("./stack/stack.router");
exports.appRouter = express_1.Router();
exports.appRouter.use('/environment', app_environment_router_1.appEnvironmentRouter);
exports.appRouter.use('/stack', stack_router_1.stackRouter);
//# sourceMappingURL=app.router.js.map