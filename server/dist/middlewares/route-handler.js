"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handles all the errors that the route might throw (syntax errors, wrong variable names, exceptions from external libraries)
 * If no errors, proceeds to route handler
 * If any errors, returns error, does not break the server
 * @param requestHandler
 */
exports.handleRoute = (requestHandler) => (req, res, next) => Promise.resolve(requestHandler(req, res, next)).catch(next);
//# sourceMappingURL=route-handler.js.map