"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRouter = void 0;
const express_1 = require("express");
const itemRules = require("./parse.rules");
const route_validation_1 = require("../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../shared/middlewares/route-handler");
const parse_service_1 = require("./parse.service");
exports.parseRouter = express_1.Router();
const parseService = new parse_service_1.ParseService();
exports.parseRouter.post('/', route_validation_1.validateRequest(itemRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const text = req.body.text;
    const grammarName = req.body.grammarName;
    const parseResult = parseService.parse(grammarName, text);
    const result = {
        error: null,
        data: parseResult
    };
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=parse.router.js.map