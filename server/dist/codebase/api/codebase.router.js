"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codebaseRouter = void 0;
const express_1 = require("express");
const tree_router_1 = require("./tree/tree.router");
exports.codebaseRouter = express_1.Router();
exports.codebaseRouter.use('/tree', tree_router_1.treeRouter);
//# sourceMappingURL=codebase.router.js.map