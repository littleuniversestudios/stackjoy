"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle = void 0;
const logger_1 = require("./logger");
const blu_interface_1 = require("../interfaces/blu.interface");
class Handle {
}
exports.Handle = Handle;
/**
 * This processes an asynchronous action and determines if there was an error somewhere
 * along the way. It is a graceful way of closing the blu process without throwing a
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
/**
 * Sends the error and immediately kills the blu process
 * @param errorMessage string
 * @param code APIErrorCode
 * @param data any payload
 */
Handle.apiError = (errorMessage, code = blu_interface_1.BLU.API.ErrorCode.GenericError, data) => {
    Handle.apiResponse({ message: errorMessage, code, data }, null);
    process.exit();
};
/**
 * Sends the response back. Process continues until everything completes
 * NOTE: There was an issue here with killing the process right after the stdout.write
 * By killing the process right after the stdout.write the write stream would never complete
 * if it was more than 8192 characters long.
 * @param error
 * @param data
 */
Handle.apiResponse = (error, data) => {
    process.stdout.write(JSON.stringify({ result: { error, data } }));
};
/**
 * If a fatal error is encountered, kill the process completely. To be used as a last measure only.
 */
Handle.fatalError = () => {
    process.exit();
};
//# sourceMappingURL=handler.js.map