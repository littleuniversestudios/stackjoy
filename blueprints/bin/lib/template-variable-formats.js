"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFormatters = exports.setFormat = exports.getFormat = exports.variableFormatList = void 0;
const changeCase = require("change-case");
const path = require("path");
const globals_1 = require("../context/globals");
const global_context_1 = require("../context/global-context");
exports.variableFormatList = [
    { name: null, format: s => s, description: '' },
    { name: 'camelCase', format: s => changeCase.camelCase(s), description: 'my-test-component => myTestComponent,' },
    { name: 'constantCase', format: s => changeCase.constantCase(s), description: 'my-test-component => MY_TEST_COMPONENT' },
    { name: 'dotCase', format: s => changeCase.dotCase(s), description: 'my-test-component => my.test.component' },
    { name: 'headerCase', format: s => changeCase.headerCase(s), description: 'my-test-component => My-Test-Component' },
    { name: 'lowerCase', format: s => changeCase.lowerCase(s), description: 'my-test-component => my-test-component' },
    { name: 'lowerCaseFirst', format: s => changeCase.lowerCaseFirst(s), description: 'my-test-component => my-test-component' },
    { name: 'paramCase', format: s => changeCase.paramCase(s), description: 'my-test-component => my-test-component' },
    { name: 'pascalCase', format: s => changeCase.pascalCase(s), description: 'my-test-component => MyTestComponent' },
    { name: 'pathCase', format: s => changeCase.pathCase(s), description: 'my-test-component => my/test/component' },
    { name: 'sentenceCase', format: s => changeCase.sentenceCase(s), description: 'my-test-component => My test component' },
    { name: 'snakeCase', format: s => changeCase.snakeCase(s), description: 'my-test-component => my_test_component' },
    { name: 'swapCase', format: s => changeCase.swapCase(s), description: 'my-test-component => MY-TEST-COMPONENT' },
    { name: 'titleCase', format: s => changeCase.titleCase(s), description: 'my-test-component => My Test Component' },
    { name: 'upperCase', format: s => changeCase.upperCase(s), description: 'my-test-component => MY-TEST-COMPONENT' },
    { name: 'capitalize', format: s => changeCase.upperCaseFirst(s), description: 'my-test-component => My-test-component' },
    { name: 'relativePathToRoot', format: s => path.relative(s, globals_1.ROOT_PATH), description: 'relative path to ROOT => ../../..' },
    { name: 'relativePath', format: (s, dest = global_context_1.GlobalContext.getGlobalVariable('DESTINATION_DIR')) => dest ? path.relative(dest.value, s) : '', description: 'relative path to variable =>../../..' },
];
exports.getFormat = (name) => {
    const caseFormat = exports.variableFormatList.find(cf => cf.name === name);
    return caseFormat ? caseFormat.format : undefined;
};
exports.setFormat = (name, format) => {
    exports.variableFormatList.push({ name, format });
};
exports.setFormatters = (formats) => {
    exports.variableFormatList.push(...formats);
};
//# sourceMappingURL=template-variable-formats.js.map