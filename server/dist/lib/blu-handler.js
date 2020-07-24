"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const execSync = require('child_process').execSync;
function bluHandler(bluCommand, workingDir = './') {
    let result;
    let data;
    let error = null;
    /**
     * Since the blueprints were baked into the stackjoy repo we need to keep track where app is being run so that
     * we can invoke the blueprints in its own shell. Here we get the absolute path of the stackjoy server so that we know
     * the path where to invoke the blueprints.
     */
    const blueprintsPath = path.join(global['absoluteServerPath'], '../../blueprints/bin/index.js');
    const response = execSync(`node ${blueprintsPath} ${bluCommand}`, { cwd: workingDir, encoding: 'utf-8', maxBuffer: 25 * 1024 * 1024 });
    // const response = execSync(bluCommand, { cwd: workingDir, encoding: 'utf-8', maxBuffer: 25 * 1024 * 1024 });
    try {
        result = JSON.parse(response).result;
        data = result.data;
        error = result.error;
    }
    catch (e) {
        error = {
            message: `JSON Parse Error`,
            code: 'JSON_PARSE_ERROR',
            data: response,
        };
    }
    if (error) {
        error.status = error.status || 400;
    }
    return { error, data };
}
exports.bluHandler = bluHandler;
//# sourceMappingURL=blu-handler.js.map