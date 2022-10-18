"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bluSystemFunctions = void 0;
function bluSystemFunctions(fnContext) {
    return [
        {
            "id": "system_fn_1",
            "name": "camelCase",
            "execFunc": "s => changeCase.camelCase(s)",
            "description": "my-test-component => myTestComponent"
        },
        {
            "id": "system_fn_2",
            "name": "constantCase",
            "execFunc": "s => changeCase.constantCase(s)",
            "description": "my-test-component => MY_TEST_COMPONENT"
        },
        {
            "id": "system_fn_3",
            "name": "dotCase",
            "execFunc": "s => changeCase.dotCase(s)",
            "description": "my-test-component => my.test.component"
        },
        {
            "id": "system_fn_4",
            "name": "paramCase",
            "execFunc": "s => changeCase.paramCase(s)",
            "description": "my-test-component => my-test-component"
        },
        {
            "id": "system_fn_5",
            "name": "pascalCase",
            "execFunc": "s => changeCase.pascalCase(s)",
            "description": "my-test-component => MyTestComponent"
        },
        {
            "id": "system_fn_6",
            "name": "pathCase",
            "execFunc": "s => changeCase.pathCase(s)",
            "description": "my-test-component => my/test/component"
        },
        {
            "id": "system_fn_7",
            "name": "sentenceCase",
            "execFunc": "s => changeCase.sentenceCase(s)",
            "description": "my-test-component => My test component"
        },
        {
            "id": "system_fn_8",
            "name": "snakeCase",
            "execFunc": "s => changeCase.snakeCase(s)",
            "description": "my-test-component => my_test_component"
        },
        {
            "id": "system_fn_9",
            "name": "titleCase",
            "execFunc": "s => changeCase.titleCase(s)",
            "description": "my-test-component => My Test Component"
        },
        {
            "id": "system_fn_9_1",
            "name": "upperCase",
            "execFunc": "s => (s??'').toUpperCase()",
            "description": "my-test-component => MY-TEST-COMPONENT"
        },
        {
            "id": "system_fn_9_2",
            "name": "lowerCase",
            "execFunc": "s => (s??'').toLowerCase()",
            "description": "my-test-component => my-test-component"
        },
        {
            "id": "system_fn_10",
            "name": "relativeTo",
            "execFunc": "(from,to) => path.relative(from,to)",
            "description": "relative path from a given path to another path"
        },
        {
            "id": "system_fn_11",
            "name": "relativeToCodebase",
            "execFunc": `(from) => path.relative(from,"${fnContext.CODEBASE_PATH}")`,
            "description": "relative path from a given path to the CODEBASE_PATH"
        },
        {
            "id": "system_fn_12",
            "name": "join",
            "execFunc": "(...paths) => path.join(...paths)",
            "description": "join multiple paths together"
        },
    ];
}
exports.bluSystemFunctions = bluSystemFunctions;
//# sourceMappingURL=blu.system.functions.js.map