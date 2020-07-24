"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIMetadata = void 0;
const globals_1 = require("../../context/globals");
class APIMetadata {
    static get(runContext) {
        return {
            bluPath: globals_1.USER_BLUEPRINTS_PATH,
            bluDir: globals_1.BLUEPRINTS_DIR_NAME,
            cwd: globals_1.CURRENT_WORKING_DIR
        };
    }
}
exports.APIMetadata = APIMetadata;
//# sourceMappingURL=api.metadata.command.js.map