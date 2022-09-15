"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testContext = exports.testFuncs = void 0;
exports.testFuncs = [];
// export const testFuncs: BLU.Config.Function[] = [
//     { name: 'bad', execFunc: "s => {throw new Error('bad stuff')}", description: '' },
//     { name: 'negate', execFunc: ' s => !s', description: 'my-test-component => myTestComponent,' },
//     { name: 'timesTwo', execFunc: ' s => s*2', description: 'my-test-component => myTestComponent,' },
//     { name: 'test', execFunc: "s => s+'aaaaaaaa'", description: 'my-test-component => myTestComponent,' },
//     { name: 'camelCase', execFunc: ' s => changeCase.camelCase(s)', description: 'my-test-component => myTestComponent,' },
//     { name: 'constantCase', execFunc: ' s => changeCase.constantCase(s)', description: 'my-test-component => MY_TEST_COMPONENT' },
//     { name: 'dotCase', execFunc: ' s => changeCase.dotCase(s)', description: 'my-test-component => my.test.component' },
//     // { name: 'headerCase', execFunc:'s => changeCase.headerCase(s), description: 'my-test-component => My-Test-Component' },
//     // { name: 'lowerCase', execFunc:'s => changeCase.lowerCase(s), description: 'my-test-component => my-test-component' },
//     // { name: 'lowerCaseFirst', execFunc:'s => changeCase.lowerCaseFirst(s), description: 'my-test-component => my-test-component' },
//     { name: 'paramCase', execFunc: ' s => changeCase.paramCase(s)', description: 'my-test-component => my-test-component' },
//     { name: 'pascalCase', execFunc: ' s => changeCase.pascalCase(s)', description: 'my-test-component => MyTestComponent' },
//     { name: 'pathCase', execFunc: ' s => changeCase.pathCase(s)', description: 'my-test-component => my/test/component' },
//     { name: 'sentenceCase', execFunc: ' s => changeCase.sentenceCase(s)', description: 'my-test-component => My test component' },
//     { name: 'snakeCase', execFunc: ' s => changeCase.snakeCase(s)', description: 'my-test-component => my_test_component' },
//     // { name: 'swapCase', execFunc:'s => changeCase.swapCase(s), description: 'my-test-component => MY-TEST-COMPONENT' },
//     { name: 'titleCase', execFunc: ' s => changeCase.titleCase(s)', description: 'my-test-component => My Test Component' },
//     // { name: 'upperCase', execFunc:'s => changeCase.upperCase(s), description: 'my-test-component => MY-TEST-COMPONENT' },
//     // { name: 'capitalize', execFunc:'s => changeCase.upperCaseFirst(s), description: 'my-test-component => My-test-component' },
// ];
exports.testContext = {
    inputs: {
        name: 'stackjoy-title',
        names: ['nik', 'bob', 'max', 'fred']
    },
    functions: exports.testFuncs
};
//# sourceMappingURL=test-context.js.map