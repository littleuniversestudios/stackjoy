"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showResults = void 0;
const chalk_1 = require("chalk");
const os_1 = require("os");
const print_1 = require("../lib/print");
const text_transform_1 = require("../lib/text-transform");
exports.showResults = (allTestResults) => {
    const totalTests = allTestResults.length;
    const passedTests = allTestResults.filter(result => result.passed).length;
    const failedTests = totalTests - passedTests;
    if (failedTests) {
        showFailedTests(allTestResults);
    }
    console.log('');
    console.log(chalk_1.default.green('--------------------------------------------'));
    console.log(chalk_1.default.green(`Total tests: ${totalTests} - Passed: ${passedTests}/${totalTests}`), print_1.Print.getChalkColor(failedTests > 0 ? 'red' : 'green')(` Failed:${failedTests}/${totalTests}`));
    console.log(chalk_1.default.green('--------------------------------------------'));
    console.log('');
};
function showFailedTests(allTestResults) {
    const failedTests = allTestResults.filter(result => !result.passed);
    print_1.Print.printHeader('Failed Tests', true, 120, 'red');
    failedTests.forEach(test => showTestErrors(test));
}
function showTestErrors(testResult) {
    const errorData = [];
    errorData.push(['Test', chalk_1.default.red(testResult.testName)]);
    errorData.push(['Command', testResult.command]);
    errorData.push(['Description', testResult.description]);
    if (testResult.errors.length > 0) {
        let testErrors = '';
        testResult.errors.forEach(error => {
            testErrors += `${chalk_1.default.red(error.message)}${os_1.EOL}`;
        });
        errorData.push(['Test Errors', testErrors]);
    }
    const failedFiles = testResult.files.filter(file => !file.passed);
    if (failedFiles.length > 0) {
        errorData.push([`File Errors`, `${failedFiles.length}/${testResult.files.length} files failed`]);
    }
    failedFiles.forEach(file => {
        let fileErrors = '';
        file.errors.forEach(error => {
            fileErrors += `${chalk_1.default.red(error.message)}${os_1.EOL} ${error.text ? error.text : ''}`;
        });
        fileErrors += text_transform_1.TextTransform.makeTable([
            ['Generated File Path', `file://${file.generatedFilePath}`],
            ['Master File Path', `file://${file.masterFilePath}`],
        ]);
        errorData.push([`${file.filename}`, fileErrors]);
    });
    console.log(print_1.Print.printTable(errorData));
    console.log('');
}
//# sourceMappingURL=tests.print.js.map