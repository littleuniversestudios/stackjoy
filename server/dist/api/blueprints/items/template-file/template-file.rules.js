"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forPUT = exports.forDELETE = exports.forPOST = exports.forGET = exports.forLIST = void 0;
const express_validator_1 = require("express-validator");
/**
 * Rules for validating requests for TemplateFile model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [];
exports.forGET = [];
exports.forPOST = [
    (0, express_validator_1.body)('absolutePath').exists().withMessage("absolutePath must be present."),
    (0, express_validator_1.body)('overwrite').optional().toBoolean(true).isBoolean().withMessage('Must be boolean value'),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=template-file.rules.js.map