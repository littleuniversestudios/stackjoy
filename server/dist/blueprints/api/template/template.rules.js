"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forPUT = exports.forDELETE = exports.forPOST = exports.forGET = exports.forLIST = void 0;
const check_1 = require("express-validator/check");
/**
 * Rules for validating requests for Template model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [];
exports.forGET = [];
exports.forPOST = [
    check_1.body('templateName').exists().withMessage(`Missing value`),
    check_1.body('collectionName').exists().withMessage(`Missing value`),
    check_1.body('files').optional().isArray().withMessage(`Template file paths must be an array`),
    check_1.body('isSeed').optional().isBoolean().withMessage(`Value must be a boolean`),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=template.rules.js.map