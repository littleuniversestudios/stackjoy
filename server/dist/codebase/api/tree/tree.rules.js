"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forPUT = exports.forDELETE = exports.forPOST = exports.forGET = exports.forLIST = void 0;
const check_1 = require("express-validator/check");
exports.forLIST = [
    check_1.query('ignoreList').optional().customSanitizer(value => value.split(',')).isArray().withMessage("Invalid Array List"),
    check_1.query('foldersOnly').optional().toBoolean(true).isBoolean().withMessage('Must be boolean value'),
    check_1.query('deep').optional().toBoolean(true).isBoolean().withMessage('Must be boolean value')
];
exports.forGET = [];
exports.forPOST = [];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=tree.rules.js.map