"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAction = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const globals_1 = require("../../../globals");
const LOG_FILE_ROW_LIMIT = 100;
class LogAction {
    static run(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, LOG_FILE_ROW_LIMIT);
        const logFileRows = LogAction.getLogCommands(logEntriesToShow);
        console.log(logFileRows.join('\n'));
    }
    static getLogCommands(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, LOG_FILE_ROW_LIMIT);
        return getLastCommands(logEntriesToShow);
    }
    static getLogEntries(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, LOG_FILE_ROW_LIMIT);
        return getLastEntries(logEntriesToShow);
    }
    static storeCommands(command, itemId, inputs, rootDestination) {
        const logContents = getLogContents();
        const logEntry = { command, itemId, inputs, rootDestination };
        if (!this.sameEntryAsLast(logEntry, logContents)) {
            logContents.push(logEntry);
            storeLogContents(logContents);
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
        if (!fs_1.existsSync(logPath)) {
            fs_1.writeFileSync(logPath, `[]`);
        }
    }
}
exports.LogAction = LogAction;
const getLogFilename = () => {
    return path_1.join(globals_1.APP_ENVIRONMENT.logPath);
};
const getLogContents = () => {
    const logPath = getLogFilename();
    const logFileContents = fs_1.readFileSync(logPath, 'utf-8');
    let logFileEntries = [];
    try {
        logFileEntries = JSON.parse(logFileContents);
    }
    catch (e) {
        console.log('Error trying to retrieve log contents');
    }
    return logFileEntries;
};
const storeLogContents = (logContents) => {
    logContents = logContents.slice(Math.max(0, logContents.length - 100)); // only store 100 entries max
    const logPath = getLogFilename();
    try {
        const contents = JSON.stringify(logContents);
        fs_1.writeFileSync(logPath, contents);
    }
    catch (e) {
        console.log('Error trying to store log contents.');
    }
};
const getLastEntries = (numRows = 20) => {
    const logContents = getLogContents();
    return logContents.slice(Math.max(0, logContents.length - numRows)).reverse();
};
const getLastCommands = (numRows = 20) => {
    const logContents = getLastEntries(numRows);
    return logContents.slice(Math.max(0, logContents.length - numRows));
};
//# sourceMappingURL=log.action.js.map