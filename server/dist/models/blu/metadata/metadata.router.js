"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metadataRules = require("./metadata.rules");
const route_validation_1 = require("../../../middlewares/route-validation");
const route_handler_1 = require("../../../middlewares/route-handler");
const metadata_service_1 = require("./metadata.service");
exports.metadataRouter = express_1.Router();
const metadataService = new metadata_service_1.MetadataService();
exports.metadataRouter.get('/', route_validation_1.validateRequest(metadataRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const result = metadataService.getBLUMetadata();
    result.error ? next(result.error) : res.json(result.data);
}));
exports.metadataRouter.post('/', route_validation_1.validateRequest(metadataRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    const result = metadataService.setBLUMetadata(req.body);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=metadata.router.js.map