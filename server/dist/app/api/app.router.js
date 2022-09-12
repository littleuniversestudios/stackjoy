"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const stack_router_1 = require("./stack/stack.router");
const workspace_router_1 = require("./workspace/workspace.router");
const app_environment_router_1 = require("./app-environment/app-environment.router");
const app_state_router_1 = require("./app-state/app-state.router");
const auth_router_1 = require("./auth/auth.router");
exports.appRouter = express_1.Router();
exports.appRouter.use('/environment', app_environment_router_1.appEnvironmentRouter);
exports.appRouter.use('/workspace', workspace_router_1.workspaceRouter);
exports.appRouter.use('/stack', stack_router_1.stackRouter);
exports.appRouter.use('/state', app_state_router_1.appStateRouter);
exports.appRouter.use('/auth', auth_router_1.authRouter);
//# sourceMappingURL=app.router.js.map