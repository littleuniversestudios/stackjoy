"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APILog = void 0;
const cli_log_command_1 = require("../cli/cli.log.command");
class APILog {
    static get(runContext) {
        return cli_log_command_1.Log.getLogEntries(100);
    }
}
exports.APILog = APILog;
//# sourceMappingURL=api.log.command.js.map