"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBLU = void 0;
const nearley = require("nearley");
const parser_interface_1 = require("./parser.interface");
const globals_1 = require("../../globals");
const grammar = require('./grammar/grammar.js');
function parseBLU(text) {
    let result = { outcome: parser_interface_1.BLUParser.Parser.Outcome.success, ast: [], error: null };
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), { keepHistory: false });
    try {
        parser.feed(text);
        if (parser.results.length > 1) {
            console.warn("AMBIGUOUS GRAMMAR!");
            globals_1.logger.error(parser.results);
        }
        result.ast = parser.results[0];
    }
    catch (e) {
        result.error = e;
        result.outcome = parser_interface_1.BLUParser.Parser.Outcome.error;
    }
    return result;
}
exports.parseBLU = parseBLU;
//# sourceMappingURL=parser.js.map