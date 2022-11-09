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
    (0, check_1.body)('name').exists().withMessage(`Missing value`),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=collection.rules.js.map