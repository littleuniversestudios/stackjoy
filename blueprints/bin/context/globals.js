"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGlobals = exports.TESTS_MASTER_DIRECTORY = exports.TESTS_OUTPUT_DIRECTORY = exports.TESTS_DIRECTORY = exports.CURRENT_WORKING_DIR = exports.LOG_FILE_ROW_LIMIT = exports.LOG_FILE_NAME = exports.FORMATS_FILE_NAME = exports.CONFIG_FILE_NAME = exports.BLUEPRINTS_DIR_NAME = exports.BLUEPRINTS_EXECUTABLE_NAME = exports.RELATIVE_WORKING_DIR = exports.BLUEPRINT = exports.USER_BLUEPRINTS_PATH = exports.ROOT_PATH = void 0;
const path_1 = require("path");
const blueprint_model_1 = require("../models/blueprint.model");
const text_transform_1 = require("../lib/text-transform");
exports.BLUEPRINTS_EXECUTABLE_NAME = 'blu';
exports.BLUEPRINTS_DIR_NAME = 'blu';
exports.CONFIG_FILE_NAME = '.config.json';
exports.FORMATS_FILE_NAME = '.formats.js';
exports.LOG_FILE_NAME = '.log.json';
exports.LOG_FILE_ROW_LIMIT = 500;
exports.CURRENT_WORKING_DIR = process.cwd();
exports.TESTS_DIRECTORY = 'tests';
exports.TESTS_OUTPUT_DIRECTORY = 'generated';
exports.TESTS_MASTER_DIRECTORY = 'expected';
exports.initGlobals = (projectRootPath) => {
    exports.ROOT_PATH = text_transform_1.TextTransform.trimTrailingSlash(projectRootPath);
    exports.RELATIVE_WORKING_DIR = path_1.relative(exports.ROOT_PATH, exports.CURRENT_WORKING_DIR);
    exports.USER_BLUEPRINTS_PATH = path_1.join(projectRootPath, exports.BLUEPRINTS_DIR_NAME);
    exports.BLUEPRINT = new blueprint_model_1.Blueprint();
};
//# sourceMappingURL=globals.js.map