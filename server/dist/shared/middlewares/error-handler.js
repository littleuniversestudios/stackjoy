"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorHandler = void 0;
exports.serverErrorHandler = (err, req, res, next) => {
    var _a, _b, _c, _d;
    let status = (_a = err.status) !== null && _a !== void 0 ? _a : 500;
    let errorBody = {
        message: (_b = err.message) !== null && _b !== void 0 ? _b : err,
        code: (_c = err.code) !== null && _c !== void 0 ? _c : null,
        data: (_d = err.data) !== null && _d !== void 0 ? _d : null
    };
    console.log('========== ERROR =============');
    console.log('', err);
    console.log(errorBody);
    console.log('========== /ERROR =============');
    res.status(status).json(errorBody);
};
//# sourceMappingURL=error-handler.js.map