"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAction = void 0;
const fs_1 = require("fs");
const globals_1 = require("../../../globals");
const fs_extra_1 = require("fs-extra");
const LOG_FILE_ROW_LIMIT = 25;
class LogAction {
    static getLogEntries(numLogEntries = 20) {
        const logEntriesToShow = Math.min(numLogEntries, LOG_FILE_ROW_LIMIT);
        return getLastEntries(logEntriesToShow);
    }
    static saveLogEntry({ sessionData }) {
        const logEntries = getLogContents();
        if (!this.sameEntryAsLast(sessionData, logEntries[0])) {
            logEntries.push(sessionData);
            storeLogContents(logEntries);
        }
        return { error: null, data: { success: true } };
    }
    static sameEntryAsLast(newLogEntry, lastLogEntry) {
        let isSame = false;
        if (lastLogEntry) {
            try {
                isSame = JSON.stringify(newLogEntry) === JSON.stringify(lastLogEntry);
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
}
exports.LogAction = LogAction;
const getLogContents = () => {
    var _a;
    if (!fs_1.existsSync(globals_1.APP_ENVIRONMENT.logPath)) {
        fs_extra_1.writeJSONSync(globals_1.APP_ENVIRONMENT.logPath, []);
    }
    try {
        return (_a = fs_extra_1.readJSONSync(globals_1.APP_ENVIRONMENT.logPath)) !== null && _a !== void 0 ? _a : [];
    }
    catch (error) {
        return [];
    }
};
const storeLogContents = (logContents) => {
    logContents = logContents.slice(Math.max(0, logContents.length - LOG_FILE_ROW_LIMIT));
    const logPath = globals_1.APP_ENVIRONMENT.logPath;
    try {
        const contents = JSON.stringify(logContents);
        fs_1.writeFileSync(logPath, contents);
    }
    catch (e) {
        globals_1.logger.error('Error trying to store log contents.');
    }
};
const getLastEntries = (numRows = 25) => {
    const logContents = getLogContents();
    return logContents.slice(Math.max(0, logContents.length - numRows)).reverse();
};
//# sourceMappingURL=log.action.js.map