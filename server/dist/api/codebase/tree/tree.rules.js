"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forPUT = exports.forDELETE = exports.forFolderPOST = exports.forPOST = exports.forGET = exports.forLIST = void 0;
const check_1 = require("express-validator/check");
exports.forLIST = [
    (0, check_1.query)('ignoreList').optional().customSanitizer(value => value.split(',')).isArray().withMessage("Invalid Array List"),
    (0, check_1.query)('foldersOnly').optional().toBoolean(true).isBoolean().withMessage('Must be boolean value'),
    (0, check_1.query)('deep').optional().toBoolean(true).isBoolean().withMessage('Must be boolean value')
];
exports.forGET = [];
exports.forPOST = [];
exports.forFolderPOST = [
    (0, check_1.body)('rootPath').exists().withMessage(`Missing value`),
    (0, check_1.body)('newFolderName').exists().withMessage(`Missing value`),
];
exports.forDELETE = [];
exports.forPUT = [];
//# sourceMappingURL=tree.rules.js.map