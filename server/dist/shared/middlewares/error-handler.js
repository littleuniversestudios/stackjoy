"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorHandler = void 0;
const globals_1 = require("../../globals");
const serverErrorHandler = (err, req, res, next) => {
    var _a, _b, _c, _d;
    let status = (_a = err.status) !== null && _a !== void 0 ? _a : 500;
    let errorBody = {
        message: (_b = err.message) !== null && _b !== void 0 ? _b : err,
        code: (_c = err.code) !== null && _c !== void 0 ? _c : null,
        data: (_d = err.data) !== null && _d !== void 0 ? _d : null
    };
    globals_1.logger.error(errorBody);
    res.status(status).json(errorBody);
};
exports.serverErrorHandler = serverErrorHandler;
//# sourceMappingURL=error-handler.js.map