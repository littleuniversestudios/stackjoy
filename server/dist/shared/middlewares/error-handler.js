"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorHandler = void 0;
exports.serverErrorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    let errorBody = {
        message: err.message || err,
        code: err.code || null,
        data: err.data || null
    };
    console.log('========== ERROR =============');
    console.log(errorBody);
    console.log('========== /ERROR =============');
    res.status(status).json(errorBody);
};
//# sourceMappingURL=error-handler.js.map