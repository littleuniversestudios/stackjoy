"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = require("chalk");
class Logger {
}
exports.Logger = Logger;
Logger.logError = (error) => console.log(chalk_1.default.red('Error Occurred \n'), error);
Logger.logWarning = (warning) => console.log(chalk_1.default.red(warning));
//# sourceMappingURL=logger.js.map