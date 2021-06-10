"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseService = exports.Parser = void 0;
const parser_interface_1 = require("../../parser/parser.interface");
const nearley = require("nearley");
const cmdOptionsGrammar = require('./grammar/command-options-grammar.js');
var Parser;
(function (Parser) {
    let Outcome;
    (function (Outcome) {
        Outcome["error"] = "error";
        Outcome["success"] = "success";
    })(Outcome = Parser.Outcome || (Parser.Outcome = {}));
})(Parser = exports.Parser || (exports.Parser = {}));
class ParseService {
    constructor() {
        this.grammars = {
            cmdOptionsGrammar
        };
    }
    parse(grammarName, text) {
        var _a;
        if (grammarName === 'cmdOptionsGrammar') {
            text = ` ${text}`;
        }
        let result = { outcome: parser_interface_1.BLUParser.Parser.Outcome.success, result: [], error: null };
        const parser = new nearley.Parser(nearley.Grammar.fromCompiled(this.grammars[grammarName]), { keepHistory: false });
        try {
            parser.feed(text);
            if (parser.results.length > 1) {
                console.log(parser.results);
            }
            result.result = (_a = parser.results[0]) !== null && _a !== void 0 ? _a : [];
        }
        catch (e) {
            result.error = e;
            result.outcome = parser_interface_1.BLUParser.Parser.Outcome.error;
        }
        return result;
    }
}
exports.ParseService = ParseService;
//# sourceMappingURL=parse.service.js.map