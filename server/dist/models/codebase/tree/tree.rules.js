"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
/**
 * Rules for validating requests for Tree model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [
    check_1.query('ignoreList').optional().customSanitizer(value => value.split(',')).isArray().withMessage("Invalid Array List"),
    check_1.query('foldersOnly').optional().toBoolean(true).isBoolean().withMessage('Must be boolean value')
];
exports.forGET = [];
exports.forPOST = [];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=tree.rules.js.map