"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const stack_router_1 = require("./stack/stack.router");
const workspace_router_1 = require("./workspace/workspace.router");
const environment_router_1 = require("./environment/environment.router");
const state_router_1 = require("./state/state.router");
const auth_router_1 = require("./auth/auth.router");
exports.appRouter = (0, express_1.Router)();
exports.appRouter.use('/environment', environment_router_1.environmentRouter);
exports.appRouter.use('/workspace', workspace_router_1.workspaceRouter);
exports.appRouter.use('/stack', stack_router_1.stackRouter);
exports.appRouter.use('/state', state_router_1.stateRouter);
exports.appRouter.use('/auth', auth_router_1.authRouter);
//# sourceMappingURL=app.router.js.map