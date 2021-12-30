"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blueprintsRouter = void 0;
const express_1 = require("express");
const template_router_1 = require("./items/template/template.router");
const template_file_router_1 = require("./items/template-file/template-file.router");
const preview_router_1 = require("./actions/preview/preview.router");
const item_router_1 = require("./items/item/item.router");
const generate_router_1 = require("./actions/generate/generate.router");
const log_router_1 = require("./actions/log/log.router");
const collection_router_1 = require("./items/collection/collection.router");
const chain_router_1 = require("./items/chain/chain.router");
const function_router_1 = require("./items/function/function.router");
const data_router_1 = require("./items/data/data.router");
const stack_router_1 = require("./items/stack/stack.router");
exports.blueprintsRouter = express_1.Router();
/** actions */
exports.blueprintsRouter.use('/preview', preview_router_1.previewRouter);
exports.blueprintsRouter.use('/generate', generate_router_1.generateRouter);
exports.blueprintsRouter.use('/log', log_router_1.logRouter);
/** items */
exports.blueprintsRouter.use('/item', item_router_1.itemRouter);
exports.blueprintsRouter.use('/collection', collection_router_1.collectionRouter);
exports.blueprintsRouter.use('/chain', chain_router_1.chainRouter);
exports.blueprintsRouter.use('/template', template_router_1.templateRouter);
exports.blueprintsRouter.use('/template-file', template_file_router_1.templateFileRouter);
exports.blueprintsRouter.use('/function', function_router_1.functionRouter);
exports.blueprintsRouter.use('/stack', stack_router_1.stackRouter);
exports.blueprintsRouter.use('/data', data_router_1.dataRouter);
//# sourceMappingURL=blueprints.router.js.map