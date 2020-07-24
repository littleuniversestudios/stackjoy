"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("express-validator/check");
/**
 * Rules for validating requests for StackjoyProject model
 * Based on express-validator which extends validator.js:
 * A library of string validators and sanitizers.
 */
exports.forLIST = [];
exports.forGET = [];
exports.forPOST = [];
exports.forDELETE = [];
exports.forPUT = [];
exports.forDOWNLOAD = [
    check_1.param('projectId').exists().withMessage(`Missing value`),
    check_1.query('name').exists().withMessage(`Missing value`),
    check_1.query('version').exists().withMessage(`Missing value`),
    check_1.query('overwrite').optional().isBoolean().toBoolean(true),
    check_1.query('isSeed').exists().isBoolean().toBoolean(true).withMessage(`Missing value`)
];
//# sourceMappingURL=stackjoy-project.rules.js.map