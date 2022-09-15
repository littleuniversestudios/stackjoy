"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUParser = void 0;
var BLUParser;
(function (BLUParser) {
    let Chunk;
    (function (Chunk) {
        let Type;
        (function (Type) {
            Type["PlainText"] = "plainText";
            Type["Expression"] = "expression";
            Type["BluBlock"] = "bluBlock";
        })(Type = Chunk.Type || (Chunk.Type = {}));
        let ErrorType;
        (function (ErrorType) {
            ErrorType["Tokenizer"] = "tokenizerError";
            ErrorType["Parser"] = "parserError";
            ErrorType["Context"] = "contextError";
        })(ErrorType = Chunk.ErrorType || (Chunk.ErrorType = {}));
    })(Chunk = BLUParser.Chunk || (BLUParser.Chunk = {}));
    let Parser;
    (function (Parser) {
        let Outcome;
        (function (Outcome) {
            Outcome["error"] = "error";
            Outcome["success"] = "success";
        })(Outcome = Parser.Outcome || (Parser.Outcome = {}));
    })(Parser = BLUParser.Parser || (BLUParser.Parser = {}));
})(BLUParser = exports.BLUParser || (exports.BLUParser = {}));
//# sourceMappingURL=parser.interface.js.map