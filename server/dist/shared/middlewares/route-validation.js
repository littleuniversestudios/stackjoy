"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const validateRequest = (rules) => [...rules, validator];
exports.validateRequest = validateRequest;
const validator = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    errors.isEmpty() ? next() : next({ status: 422, message: errors.array() });
};
//# sourceMappingURL=route-validation.js.map