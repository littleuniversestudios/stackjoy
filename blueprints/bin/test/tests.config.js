"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConfig = void 0;
const path_1 = require("path");
const globals_1 = require("../context/globals");
const file_system_1 = require("../lib/file-system");
const projectRootPath = file_system_1.FileSystem.findProjectRootDir();
const testOutputPath = path_1.join(projectRootPath, globals_1.TESTS_DIRECTORY, globals_1.TESTS_OUTPUT_DIRECTORY);
const testMasterPath = path_1.join(projectRootPath, globals_1.TESTS_DIRECTORY, globals_1.TESTS_MASTER_DIRECTORY);
exports.testConfig = [
    {
        name: 'Test 1',
        command: `g test-1 test-1`,
        description: `basic test with one file, no .config.json file and it should not create a folder`,
        compare: [
            {
                filename: 'main.txt',
                generatedFilePath: `${path_1.join(testOutputPath, './main.txt')}`,
                masterFilePath: `${path_1.join(testMasterPath, 'test-1', './main.txt')}`,
            }
        ]
    },
    {
        name: 'Test 2',
        description: `basic test with 2 files, no .config.json file, should create a directory by default because there are multiple files`,
        command: `g test-2 test-2`,
        outputDir: 'test-2'
    },
    {
        name: 'Test 3',
        description: `basic test with 1 file that has a .config.json file and 'wrapInFolder:true' which should create a folder with the name of the template`,
        command: `g test-3 test-3`,
        outputDir: 'test-3'
    },
    {
        name: 'Test 4',
        description: `Test  with 2 file that has a .config.json file and 'wrapInFolder:false' which should NOT create a folder with the name of the template`,
        command: `g test-4 test-4`,
        compare: [
            {
                filename: 'test4.txt',
                generatedFilePath: `${path_1.join(testOutputPath, './test4.txt')}`,
                masterFilePath: `${path_1.join(testMasterPath, 'test-4', './test4.txt')}`,
            },
            {
                filename: 'test4.1.txt',
                generatedFilePath: `${path_1.join(testOutputPath, './test4.1.txt')}`,
                masterFilePath: `${path_1.join(testMasterPath, 'test-4', './test4.1.txt')}`,
            }
        ]
    },
    {
        name: 'Test 5',
        description: `basic test with 1 file that has a .config.json file and 'wrapInFolder:false' BUT 'destination:test-5'
        which should create a folder with the name of the template even though wrapInFolder is false`,
        command: `g test-5 test-5`,
        outputDir: 'test-5'
    },
    {
        name: 'Test 6',
        description: `this is a basic test with one file, no .config.json file but --wrapInFolder is set on
        the command line so it should create a folder even though there's only one template file`,
        command: `g test-6 test-6 --wrapInFolder`,
        outputDir: 'test-6'
    },
    {
        name: 'Test 7',
        description: `tests destination:'test-7' in .config.json. should create files in a 'test-7' folder even though the given template name is different`,
        command: `g test-7 some-irrelevant-name`,
        outputDir: 'test-7'
    },
    {
        name: 'Test 8',
        description: `tests that template variables can be added on the command line ie. command line args`,
        command: `g test-8 test-8 --myVariable=test-component-name`,
        outputDir: 'test-8'
    },
    {
        name: 'Test 9',
        description: `test that global constants work from the .config.json file`,
        command: `g test-9 test-9`,
        outputDir: 'test-9'
    },
    {
        name: 'Test 10',
        description: `test that default formatters work`,
        command: `g test-10 test-10 --myVariable=test-component-name`,
        outputDir: 'test-10'
    },
    {
        name: 'Test 11',
        description: `test that globals, cmd line args/variables and default formatters work together`,
        command: `g test-11 test-11 --myVariable=test-component-name`,
        outputDir: 'test-11'
    },
    {
        name: 'Test 12',
        description: `test multiple files with different file extensions`,
        command: `g test-12 test-12`,
        outputDir: 'test-12'
    },
    {
        name: 'Test 13',
        description: `tests different delimiter chars`,
        command: `g test-13 test-13`,
        outputDir: 'test-13'
    },
    {
        name: 'Test 14',
        description: `tests different delimiter chars #2`,
        command: `g test-14 test-14 --myVariable=test-component-name`,
        outputDir: 'test-14'
    },
    {
        name: 'Test 15',
        description: `tests that folder structure is preserved`,
        command: `g test-15 test-15`,
        outputDir: 'test-15'
    },
    {
        name: 'Test 16',
        description: `tests input args with a (default) value present in the .config.json file`,
        command: `g test-16 test-16`,
        outputDir: 'test-16'
    },
    {
        name: 'Test 17',
        description: `override a default value present in the .config.json file with a command line arg of the same name`,
        command: `g test-17 test-17 --colorName=Red`,
        outputDir: 'test-17'
    },
    {
        name: 'Test 18',
        description: `test basic repeater with repeater value provided as a command line argument`,
        command: `g test-18 test-18 --colors="blue,50|yellow,30|red,70|green,55"`,
        outputDir: 'test-18'
    },
    {
        name: 'Test 19',
        description: `test chaining multiple commands`,
        command: `g chain:test-chain-1`,
        outputDir: 'test-19'
    },
    {
        name: 'Test 20',
        description: `test changing filename`,
        command: `g test-20 test-20`,
        outputDir: 'test-20'
    },
    {
        name: 'Test 21',
        description: `Test that a boolean arg value 'true' is resolved to a string representation `,
        command: `g test-21 test-21`,
        outputDir: 'test-21'
    },
    {
        name: 'Test 22',
        description: `Test that a boolean arg value 'false' is resolved to a string representation `,
        command: `g test-22 test-22`,
        outputDir: 'test-22'
    },
    {
        name: 'Test 23',
        description: `Test that a config file boolean arg value 'false' is overwritten by command line arg true `,
        command: `g test-23 test-23 --boolean=true`,
        outputDir: 'test-23'
    },
    {
        name: 'Test 24',
        description: `Test that a config file boolean arg value 'true' is overwritten by command line arg false `,
        command: `g test-24 test-24 --boolean=false`,
        outputDir: 'test-24'
    },
    {
        name: 'Test 25',
        description: `Test that a boolean arg value 'true' is resolved with an blu if statement `,
        command: `g test-25 test-25`,
        outputDir: 'test-25'
    },
    {
        name: 'Test 26',
        description: `Test that a boolean arg value 'false' is NOT resolved with an blu if statement `,
        command: `g test-26 test-26`,
        outputDir: 'test-26'
    },
    {
        name: 'Test 27',
        description: `test chaining multiple commands`,
        command: `g chain:test-chain-2`,
        outputDir: 'test-27'
    },
    {
        name: 'Test 28',
        description: `test chaining multiple commands that generate the same template with a different name`,
        command: `g chain:test-chain-3`,
        outputDir: 'test-28'
    },
    {
        name: 'Test 29',
        description: `test ifExists attribute`,
        command: `g test-29 test-29`,
        outputDir: 'test-29'
    },
    {
        name: 'Test 30',
        description: `test ifTrue/ifFalse attribute`,
        command: `g test-30 test-30`,
        outputDir: 'test-30'
    },
];
//# sourceMappingURL=tests.config.js.map