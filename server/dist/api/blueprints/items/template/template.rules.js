"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forPUT = exports.forDELETE = exports.forPOST = exports.forDUPLICATE = exports.forGET = exports.forLIST = void 0;
const check_1 = require("express-validator/check");
/**
 * Rules for validating requests for Template model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [];
exports.forGET = [];
exports.forDUPLICATE = [];
exports.forPOST = [
    (0, check_1.body)('name').exists().withMessage(`Missing value`),
    (0, check_1.body)('collectionId').exists().withMessage(`Missing value`),
    (0, check_1.body)('newCollectionName').optional().withMessage(`Missing value`),
    (0, check_1.body)('files').optional().isArray().withMessage(`Template file paths must be an array`),
    (0, check_1.body)('isSeed').optional().isBoolean().withMessage(`Value must be a boolean`),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=template.rules.js.map