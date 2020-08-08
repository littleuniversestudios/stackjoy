"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTests = void 0;
const child_process_1 = require("child_process");
const globals_1 = require("../context/globals");
const fs_1 = require("fs");
const tests_config_1 = require("./tests.config");
const path_1 = require("path");
const chalk_1 = require("chalk");
const os_1 = require("os");
const diff_1 = require("diff");
const tests_print_1 = require("./tests.print");
const file_system_1 = require("../lib/file-system");
const dirExists = (path, errorMessage) => !file_system_1.FileSystem.dirExistsSync(path) ? { message: errorMessage } : null;
const fileExists = (path, errorMessage) => !file_system_1.FileSystem.fileExistsSync(path) ? { message: errorMessage } : null;
const filesAreEqual = (file1, file2) => file1.equals(file2);
const pruneErrors = (testErrors) => testErrors.filter(error => error !== null);
const hasNoErrors = (testErrors) => testErrors.length === 0;
const projectRootPath = file_system_1.FileSystem.findProjectRootDir();
const testOutputPath = path_1.join(projectRootPath, globals_1.TESTS_DIRECTORY, globals_1.TESTS_OUTPUT_DIRECTORY);
const testMasterPath = path_1.join(projectRootPath, globals_1.TESTS_DIRECTORY, globals_1.TESTS_MASTER_DIRECTORY);
const allTests = tests_config_1.testConfig;
const allTestResults = [];
exports.runTests = (bluExecPath) => {
    allTests.forEach((test, index) => {
        console.log('', chalk_1.default.green(`Running test ${index + 1}`));
        const fullCommand = `node ${bluExecPath} ${test.command}`;
        child_process_1.execSync(fullCommand);
        const testResult = test.outputDir ? checkOutputDir(test) : compareTestFiles(test);
        testResult.passed ? console.log(chalk_1.default.green('...passed')) : console.log(chalk_1.default.red('...failed'));
        allTestResults.push(testResult);
    });
    tests_print_1.showResults(allTestResults);
};
function checkOutputDir(test) {
    const outputPath = path_1.join(testOutputPath, test.outputDir);
    const masterPath = path_1.join(testMasterPath, test.outputDir);
    let testErrors = [];
    let testFiles = [];
    testErrors.push(dirExists(outputPath, `Output directory '${outputPath}' does not exist`));
    testErrors.push(dirExists(masterPath, `Expected directory '${masterPath}' does not exist`));
    testErrors = pruneErrors(testErrors);
    if (testErrors.length === 0) {
        const generatedFiles = file_system_1.FileSystem.listAllFiles(outputPath);
        generatedFiles.forEach(file => {
            const masterFilePath = path_1.join(masterPath, file.relativePath, file.filename);
            const generatedFilePath = file.absolutePath;
            const fileErrors = checkFiles(masterFilePath, generatedFilePath);
            testFiles.push({ errors: fileErrors, passed: fileErrors.length === 0, filename: file.filename, generatedFilePath, masterFilePath });
        });
    }
    return {
        testName: test.name,
        command: test.command,
        description: test.description,
        files: testFiles,
        errors: testErrors,
        passed: hasNoErrors([].concat.apply([], testFiles.map(file => file.errors))) && hasNoErrors(testErrors)
    };
}
function checkFiles(masterFilePath, generatedFilePath) {
    let fileErrors = [];
    fileErrors.push(fileExists(masterFilePath, `Expected file '${masterFilePath}' does not exist`));
    fileErrors.push(fileExists(generatedFilePath, `Generated file '${generatedFilePath}' does not exist'`));
    fileErrors = pruneErrors(fileErrors);
    if (fileErrors.length === 0) {
        const fileMaster = fs_1.readFileSync(masterFilePath);
        const fileGenerated = fs_1.readFileSync(generatedFilePath);
        const equalFiles = filesAreEqual(fileMaster, fileGenerated);
        if (!equalFiles) {
            const difference = diff_1.diffChars(fileGenerated.toString('utf-8'), fileMaster.toString('utf-8'));
            let text = '';
            difference.forEach((part) => {
                // green for additions, red for deletions, grey for common parts
                const color = part.added ? chalk_1.default.green : part.removed ? chalk_1.default.red : chalk_1.default.grey;
                text += color(part.value);
            });
            text = `${os_1.EOL}${text}${os_1.EOL}`;
            fileErrors.push({ message: `Generated file contents DO NOT match Expected file contents:`, text });
        }
    }
    return fileErrors;
}
function compareTestFiles(test) {
    let testErrors = [];
    let testFiles = [];
    test.compare.forEach(compareFiles => {
        const masterFilePath = compareFiles.masterFilePath;
        const generatedFilePath = compareFiles.generatedFilePath;
        const fileErrors = checkFiles(masterFilePath, generatedFilePath);
        testFiles.push({ errors: fileErrors, passed: fileErrors.length === 0, filename: compareFiles.filename, generatedFilePath, masterFilePath });
    });
    return {
        testName: test.name,
        command: test.command,
        description: test.description,
        files: testFiles,
        errors: testErrors,
        passed: hasNoErrors([].concat.apply([], testFiles.map(file => file.errors))) && hasNoErrors(testErrors)
    };
}
//# sourceMappingURL=tests.run.js.map