"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
/**
 * Rules for validating requests for Fs model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [];
exports.forGET = [];
exports.forPOST = [];
exports.forPOSTFolder = [
    check_1.body('path').exists().isString().withMessage(`Missing value`),
    check_1.body('name').exists().isString().withMessage(`Missing value`),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=fs.rules.js.map