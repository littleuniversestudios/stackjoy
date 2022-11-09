"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemRouter = void 0;
const express_1 = require("express");
const system_info_router_1 = require("./info/system-info.router");
exports.systemRouter = (0, express_1.Router)();
exports.systemRouter.use('/info', system_info_router_1.systemInfoRouter);
//# sourceMappingURL=system.router.js.map