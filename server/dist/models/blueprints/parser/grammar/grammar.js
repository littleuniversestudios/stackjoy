"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moo = require("moo");
// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
    function id(x) { return x[0]; }
    const lexer = moo.compile({
        ws: /[ \t]+/,
        number: /0|[1-9][0-9]*/,
        string: { match: /"(?:\\["\\]|[^\n"\\])*"/, value: v => v.slice(1, -1) },
        comparisonOperator: ["===", "==", ">", "<", ">=", "<=", "!==", "!="],
        logicalOperator: ["&&", "||"],
        identifier: { match: /[a-zA-Z_$][a-zA-Z0-9_$]*/, type: moo.keywords({
                ifKey: 'if',
                elseIfKey: 'elseIf',
                elseKey: 'else',
                indexKey: 'index',
                nullElement: 'null',
                inKey: 'in',
                forEach: 'forEach',
                bTrue: 'true',
                bFalse: 'false',
                switchKey: 'switch',
                switchCaseKey: 'switchCase',
                switchDefaultKey: 'switchDefault'
            }) },
        assign: '=',
        lParen: '(',
        rParen: ')',
        colon: ':',
        semiColon: ';',
        comma: ',',
        dot: '.',
        exclamation: '!',
    });
    var grammar = {
        Lexer: lexer,
        ParserRules: [
            { "name": "value", "symbols": [] },
            { "name": "value", "symbols": ["_", "expression", "_"], "postprocess": data => [data[1]] },
            { "name": "value", "symbols": ["_", "statements", "_"], "postprocess": data => [...data[1]] },
            { "name": "statements", "symbols": ["statement"] },
            { "name": "statements", "symbols": ["statements", "_", "statement"], "postprocess": data => [...data[0], data[2]] },
            { "name": "statement", "symbols": ["ifStatement"], "postprocess": id },
            { "name": "statement", "symbols": ["elseIfStatement"], "postprocess": id },
            { "name": "statement", "symbols": ["elseStatement"], "postprocess": id },
            { "name": "statement", "symbols": ["forEachStatement"], "postprocess": id },
            { "name": "statement", "symbols": ["switchStatement"], "postprocess": id },
            { "name": "statement", "symbols": ["switchCaseStatement"], "postprocess": id },
            { "name": "statement", "symbols": ["switchDefaultStatement"], "postprocess": id },
            { "name": "ifStatement", "symbols": [(lexer.has("ifKey") ? { type: "ifKey" } : ifKey), "_", (lexer.has("lParen") ? { type: "lParen" } : lParen), "_", "logicalStatement", "_", (lexer.has("rParen") ? { type: "rParen" } : rParen)], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "if",
                        conditions: data[4]
                    };
                }
            },
            { "name": "elseIfStatement", "symbols": [(lexer.has("elseIfKey") ? { type: "elseIfKey" } : elseIfKey), "_", (lexer.has("lParen") ? { type: "lParen" } : lParen), "_", "logicalStatement", "_", (lexer.has("rParen") ? { type: "rParen" } : rParen)], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "elseIf",
                        conditions: data[4]
                    };
                }
            },
            { "name": "elseStatement", "symbols": [(lexer.has("elseKey") ? { type: "elseKey" } : elseKey)], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "else"
                    };
                }
            },
            { "name": "logicalStatement", "symbols": ["conditionalStatement"] },
            { "name": "logicalStatement", "symbols": ["logicalStatement", "_", "logicalOperator", "_", "conditionalStatement"], "postprocess": data => [...data[0], data[2], data[4]]
            },
            { "name": "conditionalStatement$ebnf$1$subexpression$1", "symbols": ["_", "comparisonOperator", "_", "condition"] },
            { "name": "conditionalStatement$ebnf$1", "symbols": ["conditionalStatement$ebnf$1$subexpression$1"], "postprocess": id },
            { "name": "conditionalStatement$ebnf$1", "symbols": [], "postprocess": function (d) { return null; } },
            { "name": "conditionalStatement", "symbols": ["condition", "conditionalStatement$ebnf$1"], "postprocess": data => {
                    return {
                        type: "conditionalStatement",
                        condition1: data[0],
                        operator: data[1] ? data[1][1].value : null,
                        condition2: data[1] ? data[1][3] : null,
                    };
                }
            },
            { "name": "logicalOperator", "symbols": [(lexer.has("logicalOperator") ? { type: "logicalOperator" } : logicalOperator)], "postprocess": id },
            { "name": "comparisonOperator", "symbols": [(lexer.has("comparisonOperator") ? { type: "comparisonOperator" } : comparisonOperator)], "postprocess": id },
            { "name": "condition", "symbols": ["expression"], "postprocess": id },
            { "name": "forEachStatement$ebnf$1$subexpression$1", "symbols": ["forEachIndex"] },
            { "name": "forEachStatement$ebnf$1", "symbols": ["forEachStatement$ebnf$1$subexpression$1"], "postprocess": id },
            { "name": "forEachStatement$ebnf$1", "symbols": [], "postprocess": function (d) { return null; } },
            { "name": "forEachStatement", "symbols": [(lexer.has("forEach") ? { type: "forEach" } : forEach), (lexer.has("lParen") ? { type: "lParen" } : lParen), "_", (lexer.has("identifier") ? { type: "identifier" } : identifier), "__", (lexer.has("inKey") ? { type: "inKey" } : inKey), "__", "Identifier", "_", (lexer.has("rParen") ? { type: "rParen" } : rParen), "forEachStatement$ebnf$1"], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "forEach",
                        property: data[3],
                        operator: data[5],
                        value: data[7],
                        indexName: data[10] ? data[10][0] : "index"
                    };
                }
            },
            { "name": "forEachIndex", "symbols": [(lexer.has("colon") ? { type: "colon" } : colon), "_", (lexer.has("identifier") ? { type: "identifier" } : identifier), "_", (lexer.has("assign") ? { type: "assign" } : assign), "_", (lexer.has("indexKey") ? { type: "indexKey" } : indexKey)], "postprocess": data => data[2].value
            },
            { "name": "switchStatement", "symbols": [(lexer.has("switchKey") ? { type: "switchKey" } : switchKey), "_", (lexer.has("lParen") ? { type: "lParen" } : lParen), "_", "expression", "_", (lexer.has("rParen") ? { type: "rParen" } : rParen)], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "switch",
                        identifier: data[4]
                    };
                }
            },
            { "name": "switchCaseStatement", "symbols": [(lexer.has("switchCaseKey") ? { type: "switchCaseKey" } : switchCaseKey), "_", (lexer.has("assign") ? { type: "assign" } : assign), "_", "expression"], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "switchCase",
                        identifier: data[4]
                    };
                }
            },
            { "name": "switchDefaultStatement", "symbols": [(lexer.has("switchDefaultKey") ? { type: "switchDefaultKey" } : switchDefaultKey)], "postprocess": data => {
                    return {
                        type: "statement",
                        category: "structural",
                        name: "switchDefault"
                    };
                }
            },
            { "name": "expression", "symbols": ["basicExpression"], "postprocess": data => {
                    return Object.assign(Object.assign({}, data[0]), { nagate: false, doubleNegate: false });
                }
            },
            { "name": "expression$ebnf$1", "symbols": ["logicalNOT"] },
            { "name": "expression$ebnf$1", "symbols": ["logicalNOT", "expression$ebnf$1"], "postprocess": function arrconcat(d) { return [d[0]].concat(d[1]); } },
            { "name": "expression", "symbols": ["expression$ebnf$1", "basicExpression"], "postprocess": data => {
                    return Object.assign(Object.assign({}, data[1]), { negate: data[0].length % 2 !== 0, doubleNegate: data[0].length % 2 === 0 });
                }
            },
            { "name": "basicExpression", "symbols": [(lexer.has("indexKey") ? { type: "indexKey" } : indexKey)], "postprocess": data => ({ type: "identifier", value: "index" }) },
            { "name": "basicExpression", "symbols": ["Identifier"], "postprocess": id },
            { "name": "basicExpression", "symbols": ["Transformation"], "postprocess": data => {
                    return {
                        type: "transformation",
                        property: data[0][0],
                        function: { name: data[0][2].value }
                    };
                }
            },
            { "name": "basicExpression", "symbols": ["Function"], "postprocess": id },
            { "name": "basicExpression", "symbols": ["Literal"], "postprocess": id },
            { "name": "Transformation", "symbols": ["expression", (lexer.has("colon") ? { type: "colon" } : colon), "Identifier"] },
            { "name": "Function$ebnf$1$subexpression$1", "symbols": ["argument_list", "_"] },
            { "name": "Function$ebnf$1", "symbols": ["Function$ebnf$1$subexpression$1"], "postprocess": id },
            { "name": "Function$ebnf$1", "symbols": [], "postprocess": function (d) { return null; } },
            { "name": "Function", "symbols": [(lexer.has("identifier") ? { type: "identifier" } : identifier), (lexer.has("lParen") ? { type: "lParen" } : lParen), "_", "Function$ebnf$1", (lexer.has("rParen") ? { type: "rParen" } : rParen)], "postprocess": data => {
                    return {
                        type: "function",
                        name: data[0].value,
                        args: data[3] ? data[3][0] : []
                    };
                }
            },
            { "name": "argument_list", "symbols": ["argument"], "postprocess": data => [data[0]] },
            { "name": "argument_list", "symbols": ["argument_list", "_", (lexer.has("comma") ? { type: "comma" } : comma), "_", "argument"], "postprocess": data => [...data[0], data[4]] },
            { "name": "argument", "symbols": ["expression"], "postprocess": id },
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
            { "name": "logicalNOT", "symbols": [(lexer.has("exclamation") ? { type: "exclamation" } : exclamation)], "postprocess": id },
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
        ParserStart: "value"
    };
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = grammar;
    }
    else {
        window.grammar = grammar;
    }
})();
//# sourceMappingURL=grammar.js.map