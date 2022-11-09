"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const start_parse_1 = require("./parse/start.parse");
const test_cases_1 = require("./test/test-cases");
const test_context_1 = require("./test/test-context");
const text = test_cases_1.simpleCase;
const context = test_context_1.testContext;
const { errors, renderedText } = (0, start_parse_1.renderText)(text, context);
if (errors) {
    // console.log(errors)
}
else {
    // console.log('=============');
    // console.log(renderedText)
    // console.log('=============');
}
//# sourceMappingURL=index.js.map