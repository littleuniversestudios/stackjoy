"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blueprintsRouter = void 0;
const express_1 = require("express");
const parse_router_1 = require("./parse/parse.router");
const template_router_1 = require("./template/template.router");
const template_file_router_1 = require("./template-file/template-file.router");
const preview_router_1 = require("./preview/preview.router");
const item_router_1 = require("./item/item.router");
const generate_router_1 = require("./generate/generate.router");
const log_router_1 = require("./log/log.router");
const collection_router_1 = require("./collection/collection.router");
const config_router_1 = require("./config/config.router");
exports.blueprintsRouter = express_1.Router();
exports.blueprintsRouter.use('/preview', preview_router_1.previewRouter);
exports.blueprintsRouter.use('/generate', generate_router_1.generateRouter);
exports.blueprintsRouter.use('/config', config_router_1.configRouter);
exports.blueprintsRouter.use('/item', item_router_1.itemRouter);
exports.blueprintsRouter.use('/log', log_router_1.logRouter);
exports.blueprintsRouter.use('/collection', collection_router_1.collectionRouter);
// these should be nested under /template route
exports.blueprintsRouter.use('/template', template_router_1.templateRouter);
exports.blueprintsRouter.use('/template-file', template_file_router_1.templateFileRouter);
// these are test routes and should be removed
exports.blueprintsRouter.use('/parse', parse_router_1.parseRouter);
//# sourceMappingURL=blueprints.router.js.map