"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJSON = void 0;
exports.validateJSON = (err, req, res, next) => err ? next({ status: 422, message: "Invalid JSON format" }) : next();
//# sourceMappingURL=json-validation.js.map