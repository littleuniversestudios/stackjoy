"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../context/globals");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const path_1 = require("path");
const tests_run_1 = require("./tests.run");
const file_system_1 = require("../lib/file-system");
const path = require("path");
const projectRootPath = file_system_1.FileSystem.findProjectRootDir();
const testOutputPath = path_1.join(projectRootPath, globals_1.TESTS_DIRECTORY, globals_1.TESTS_OUTPUT_DIRECTORY);
init();
function init() {
    const bluExecPath = path.join(process.cwd(), `./bin/index.js`);
    fs_extra_1.removeSync(testOutputPath);
    fs_1.mkdirSync(testOutputPath);
    process.chdir(testOutputPath);
    tests_run_1.runTests(bluExecPath);
}
/**
 * Check if there is outputDir or compare array in test config
 *
 * IF outputDir present in test config:
 *   - check if outputDir exists in generated folder
 *   - check if outputDir exists in master folder
 *   FOR EACH file in generated folder
 *     - check if file exists in master folder
 *     - check if file in generated folder IS THE SAME as the file in master folder
 *     - IF NOT:
 *       - run a diff on the two files to indicate where things don't match
 *   - ADD results to results array
 *
 * IF compare array present in test config:
 *   FOR EACH file in compare array object
 *     - check if file exists in master path
 *     - check if file exists in generated path
 *     - check if file in generated path IS THE SAME as the file in master path
 *     - IF NOT:
 *       - run a diff on the two files to indicate where things don't match
 *   - ADD results to results array
 *
 *  Show user how many tests passed 11/12
 *  Display all failed tests w/diff mismatches
 */
//# sourceMappingURL=index.js.map