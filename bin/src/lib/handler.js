"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle = void 0;
const logger_1 = require("./logger");
class Handle {
}
exports.Handle = Handle;
/**
 * This processes an asynchronous action and determines if there was an error somewhere
 * along the way. It is a graceful way of closing the stackjoy process without throwing a
 * file system error (if a file does not exist) or any other issues that may occur.
 * It is accompanied by an error that the user can read without having to go through
 * a system stack dump.
 * @param p
 */
Handle.asyncResponse = (p) => {
    return p
        .then((response) => response)
        .catch(error => {
        if (error !== '') {
            logger_1.Logger.logError(error);
        }
        process.exit();
        return null;
    });
};
//# sourceMappingURL=handler.js.map