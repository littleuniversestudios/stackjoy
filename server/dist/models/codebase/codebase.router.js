"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tree_router_1 = require("./tree/tree.router");
const root_router_1 = require("./root/root.router");
const fs_router_1 = require("./fs/fs.router");
exports.codebaseRouter = express_1.Router();
exports.codebaseRouter.use('/tree', tree_router_1.treeRouter);
exports.codebaseRouter.use('/root', root_router_1.rootRouter);
exports.codebaseRouter.use('/fs', fs_router_1.fsRouter);
//# sourceMappingURL=codebase.router.js.map