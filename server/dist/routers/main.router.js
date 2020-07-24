"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const codebase_router_1 = require("../models/codebase/codebase.router");
const stackjoy_router_1 = require("../models/stackjoy/stackjoy.router");
const blu_router_1 = require("../models/blu/blu.router");
exports.mainRouter = express_1.Router();
exports.mainRouter.use('/stackjoy', stackjoy_router_1.stackjoyRouter);
exports.mainRouter.use('/blu', blu_router_1.bluRouter);
exports.mainRouter.use('/codebase', codebase_router_1.codebaseRouter);
//# sourceMappingURL=main.router.js.map