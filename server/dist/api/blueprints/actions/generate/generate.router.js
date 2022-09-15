"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRouter = void 0;
const express_1 = require("express");
const itemRules = require("./generate.rules");
const route_validation_1 = require("../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../shared/middlewares/route-handler");
const globals_1 = require("../../../../globals");
exports.generateRouter = express_1.Router();
exports.generateRouter.post('/', route_validation_1.validateRequest(itemRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const inputs = req.body.inputs;
    const itemId = req.body.itemId;
    const rootDestination = req.body.rootDestination;
    const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
    const response = blueprints.generate(itemId, inputs, rootDestination);
    const result = {
        error: null,
        data: response
    };
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=generate.router.js.map