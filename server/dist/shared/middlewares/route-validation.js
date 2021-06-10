"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const check_1 = require("express-validator/check");
exports.validateRequest = (rules) => [...rules, validator];
const validator = (req, res, next) => {
    const errors = check_1.validationResult(req);
    errors.isEmpty() ? next() : next({ status: 422, message: errors.array() });
};
//# sourceMappingURL=route-validation.js.map