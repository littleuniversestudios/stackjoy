"use strict";
// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
Object.defineProperty(exports, "__esModule", { value: true });
const moo = require("moo");
(function () {
    function id(x) { return x[0]; }
    const lexer = moo.compile({
        bluExpression: { match: /\^\^[^\^\^]*\^\^/ },
        ws: /[ \t]+/,
        number: { match: /0|[1-9][0-9]*/, value: v => parseFloat(v) },
        string: { match: /"(?:\\["\\]|[^\n"\\])*"/, value: v => v.slice(1, -1) },
        identifier: { match: /[a-zA-Z_$][a-zA-Z0-9_\-@$]*/ },
        filename: { match: /^[\^<>:;,?"*|\/]+$/ },
        assign: '=',
        colon: ':',
        dot: '.',
        dash: '-'
    });
    var grammar = {
        Lexer: lexer,
        ParserRules: [
            { "name": "params$ebnf$1", "symbols": [] },
            { "name": "params$ebnf$1", "symbols": ["args", "params$ebnf$1"], "postprocess": function arrconcat(d) { return [d[0]].concat(d[1]); } },
            { "name": "params", "symbols": ["params$ebnf$1"], "postprocess": id },
            { "name": "args$subexpression$1", "symbols": ["option"] },
            { "name": "args$subexpression$1", "symbols": ["assignment"] },
            { "name": "args$subexpression$1", "symbols": [(lexer.has("filename") ? { type: "filename" } : filename)] },
            { "name": "args", "symbols": ["__", "args$subexpression$1"], "postprocess": data => data[1][0] },
            { "name": "option", "symbols": [(lexer.has("dash") ? { type: "dash" } : dash), "Identifier"], "postprocess": data => {
                    return {
                        type: 'options',
                        value: data[1].value.split('')
                    };
                }
            },
            { "name": "assignment", "symbols": ["variableValue", "_", (lexer.has("assign") ? { type: "assign" } : assign), "_", "variableValue"], "postprocess": data => {
                    return {
                        type: 'property',
                        propertyName: data[0].value,
                        value: data[4].value
                    };
                }
            },
            { "name": "variableValue", "symbols": ["Literal"], "postprocess": id },
            { "name": "variableValue", "symbols": ["Identifier"], "postprocess": id },
            { "name": "variableValue", "symbols": ["bluExpression"], "postprocess": id },
            { "name": "bluExpression", "symbols": [(lexer.has("bluExpression") ? { type: "bluExpression" } : bluExpression)], "postprocess": data => {
                    return {
                        type: 'bluExpression',
                        value: data[0].value
                    };
                }
            },
            { "name": "Identifier$ebnf$1", "symbols": ["dotIdentifier"], "postprocess": id },
            { "name": "Identifier$ebnf$1", "symbols": [], "postprocess": function (d) { return null; } },
            { "name": "Identifier", "symbols": [(lexer.has("identifier") ? { type: "identifier" } : identifier), "Identifier$ebnf$1"], "postprocess": data => {
                    return {
                        type: "identifier",
                        value: `${data[0].value}${data[1] ? data[1] : ''}`
                    };
                }
            },
            { "name": "dotIdentifier$ebnf$1$subexpression$1", "symbols": [(lexer.has("dot") ? { type: "dot" } : dot), (lexer.has("identifier") ? { type: "identifier" } : identifier)] },
            { "name": "dotIdentifier$ebnf$1", "symbols": ["dotIdentifier$ebnf$1$subexpression$1"] },
            { "name": "dotIdentifier$ebnf$1$subexpression$2", "symbols": [(lexer.has("dot") ? { type: "dot" } : dot), (lexer.has("identifier") ? { type: "identifier" } : identifier)] },
            { "name": "dotIdentifier$ebnf$1", "symbols": ["dotIdentifier$ebnf$1$subexpression$2", "dotIdentifier$ebnf$1"], "postprocess": function arrconcat(d) { return [d[0]].concat(d[1]); } },
            { "name": "dotIdentifier", "symbols": ["dotIdentifier$ebnf$1"], "postprocess": data => {
                    return (data[0].map(d => `${d[0].value}${d[1].value}`)).join('');
                }
            },
            { "name": "Literal", "symbols": ["Number"], "postprocess": id },
            { "name": "Literal", "symbols": ["String"], "postprocess": id },
            { "name": "Literal", "symbols": ["Null"], "postprocess": id },
            { "name": "Literal", "symbols": ["Boolean"], "postprocess": id },
            { "name": "Boolean", "symbols": [(lexer.has("bTrue") ? { type: "bTrue" } : bTrue)], "postprocess": data => { return { type: 'boolean', value: true }; } },
            { "name": "Boolean", "symbols": [(lexer.has("bFalse") ? { type: "bFalse" } : bFalse)], "postprocess": data => { return { type: 'boolean', value: false }; } },
            { "name": "Number", "symbols": [(lexer.has("number") ? { type: "number" } : number)], "postprocess": id },
            { "name": "Null", "symbols": [(lexer.has("nullElement") ? { type: "nullElement" } : nullElement)], "postprocess": id },
            { "name": "String", "symbols": [(lexer.has("string") ? { type: "string" } : string)], "postprocess": id },
            { "name": "_$ebnf$1", "symbols": [] },
            { "name": "_$ebnf$1", "symbols": [(lexer.has("ws") ? { type: "ws" } : ws), "_$ebnf$1"], "postprocess": function arrconcat(d) { return [d[0]].concat(d[1]); } },
            { "name": "_", "symbols": ["_$ebnf$1"], "postprocess": id },
            { "name": "__$ebnf$1", "symbols": [(lexer.has("ws") ? { type: "ws" } : ws)] },
            { "name": "__$ebnf$1", "symbols": [(lexer.has("ws") ? { type: "ws" } : ws), "__$ebnf$1"], "postprocess": function arrconcat(d) { return [d[0]].concat(d[1]); } },
            { "name": "__", "symbols": ["__$ebnf$1"], "postprocess": id }
        ],
        ParserStart: "params"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    }
    else {
        window.grammar = grammar;
    }
})();
//# sourceMappingURL=command-options-grammar.js.map