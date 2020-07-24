"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk = require("chalk");
class Logger {
}
exports.Logger = Logger;
Logger.logError = (error) => console.log(chalk.red('Error Occurred \n'), error);
Logger.logWarning = (warning) => console.log(chalk.red(warning));
//# sourceMappingURL=logger.js.map