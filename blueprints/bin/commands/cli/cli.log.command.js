"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const globals_1 = require("../../context/globals");
const fs_1 = require("fs");
const chalk_1 = require("chalk");
const file_system_1 = require("../../lib/file-system");
const logger_1 = require("../../lib/logger");
class Log {
    static run(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, globals_1.LOG_FILE_ROW_LIMIT);
        const logFileRows = Log.getLogCommands(logEntriesToShow);
        console.log(chalk_1.default.green(`Showing last ${logEntriesToShow} log entries: \n`));
        console.log(logFileRows.join('\n'));
    }
    static getLogCommands(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, globals_1.LOG_FILE_ROW_LIMIT);
        return getLastCommands(logEntriesToShow);
    }
    static getLogEntries(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, globals_1.LOG_FILE_ROW_LIMIT);
        return getLastEntries(logEntriesToShow);
    }
    static storeCommands(commands) {
        const mainCommand = commands[0];
        if (![undefined, null].includes(mainCommand)) {
            const logContents = getLogContents();
            const logEntry = {
                command: mainCommand,
                subCommands: commands.length > 1 ? commands.slice(1) : []
            };
            if (!this.sameEntryAsLast(logEntry, logContents)) {
                logContents.push(logEntry);
                storeLogContents(logContents);
            }
        }
    }
    static sameEntryAsLast(logEntry, logContents) {
        let isSame = false;
        if (logContents.length > 0) {
            const lastLogEntry = logContents[logContents.length - 1];
            try {
                isSame = JSON.stringify(logEntry) === JSON.stringify(lastLogEntry);
            }
            catch (e) {
                /*
                * do nothing with error just let it pass thru.
                * This is here in case there's a circular structure in the object that's being stringified.
                * Instead of breaking the entire process forget about the comparison and store the last executed command
                */
            }
        }
        return isSame;
    }
    static init() {
        const logPath = getLogFilename();
        if (!file_system_1.FileSystem.fileExistsSync(logPath)) {
            fs_1.writeFileSync(logPath, `[]`);
        }
    }
}
exports.Log = Log;
const getLogFilename = () => {
    return `${globals_1.USER_BLUEPRINTS_PATH}/${globals_1.LOG_FILE_NAME}`;
};
const getLogContents = () => {
    const logPath = getLogFilename();
    const logFileContents = fs_1.readFileSync(logPath, 'utf-8');
    try {
        return JSON.parse(logFileContents);
    }
    catch (e) {
        logger_1.Logger.logError('Error trying to retrieve log contents');
    }
};
const storeLogContents = (logContents) => {
    logContents = logContents.slice(Math.max(0, logContents.length - 100)); // only store 100 entries max
    const logPath = getLogFilename();
    try {
        const contents = JSON.stringify(logContents);
        fs_1.writeFileSync(logPath, contents);
    }
    catch (e) {
        logger_1.Logger.logError('Error trying to store log contents.');
    }
};
const getLastEntries = (numRows = 20) => {
    const logContents = getLogContents();
    return logContents.slice(Math.max(0, logContents.length - numRows));
};
const getLastCommands = (numRows = 20) => {
    const logContents = getLastEntries(numRows);
    const logEntries = logContents.slice(Math.max(0, logContents.length - numRows));
    return logEntries.map(logEntry => `blu ${logEntry.command.command} ${logEntry.command.commandArgs}`);
};
//# sourceMappingURL=cli.log.command.js.map