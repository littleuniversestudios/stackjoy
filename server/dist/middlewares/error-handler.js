"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    let errorBody = {
        message: err.message || err,
        code: err.code || null,
        data: err.data || null
    };
    res.status(status).json(errorBody);
};
//# sourceMappingURL=error-handler.js.map