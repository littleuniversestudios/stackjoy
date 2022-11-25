"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forPUT = exports.forDELETE = exports.forPOST = exports.forDUPLICATE = exports.forGET = exports.forLIST = void 0;
const express_validator_1 = require("express-validator");
/**
 * Rules for validating requests for Template model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [];
exports.forGET = [];
exports.forDUPLICATE = [];
exports.forPOST = [
    (0, express_validator_1.body)('name').exists().withMessage(`Missing value`),
    (0, express_validator_1.body)('collectionId').exists().withMessage(`Missing value`),
    (0, express_validator_1.body)('files').optional().isArray().withMessage(`Template file paths must be an array`),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=template.rules.js.map