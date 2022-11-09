"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRoute = void 0;
/**
 * Handles all the errors that the route might throw (syntax errors, wrong variable names, exceptions from external libraries)
 * If no errors, proceeds to route handler
 * If any errors, returns error, does not break the server
 * @param requestHandler
 */
const handleRoute = (requestHandler) => (req, res, next) => Promise.resolve(requestHandler(req, res, next)).catch(next);
exports.handleRoute = handleRoute;
//# sourceMappingURL=route-handler.js.map