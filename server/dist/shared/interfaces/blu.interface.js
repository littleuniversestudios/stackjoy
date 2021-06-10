"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLU = void 0;
var BLU;
(function (BLU) {
    let Origin;
    (function (Origin) {
        let Type;
        (function (Type) {
            Type["Collection"] = "collection";
            Type["Template"] = "template";
            Type["Chain"] = "chain";
            Type["Snippet"] = "snippet";
            Type["Workspace"] = "workspace";
            Type["User"] = "user";
            Type["CMD"] = "command";
            Type["System"] = "system";
        })(Type = Origin.Type || (Origin.Type = {}));
    })(Origin = BLU.Origin || (BLU.Origin = {}));
    let Item;
    (function (Item) {
        let Type;
        (function (Type) {
            Type["Collection"] = "collection";
            Type["Template"] = "template";
            Type["Chain"] = "chain";
            Type["Snippet"] = "snippet";
            Type["Workspace"] = "workspace";
        })(Type = Item.Type || (Item.Type = {}));
    })(Item = BLU.Item || (BLU.Item = {}));
    let Config;
    (function (Config) {
        let ErrorType;
        (function (ErrorType) {
            ErrorType["Parse"] = "onParse";
            ErrorType["Stringify"] = "onStringify";
            ErrorType["Load"] = "onLoad";
            ErrorType["Store"] = "onStore";
        })(ErrorType = Config.ErrorType || (Config.ErrorType = {}));
    })(Config = BLU.Config || (BLU.Config = {}));
    let Execute;
    (function (Execute) {
        let ErrorType;
        (function (ErrorType) {
            ErrorType["circularChain"] = "circularChain";
            ErrorType["fileExists"] = "fileExists";
            ErrorType["parseError"] = "parseError";
            ErrorType["missingInput"] = "missingInput";
        })(ErrorType = Execute.ErrorType || (Execute.ErrorType = {}));
        let ErrorLocation;
        (function (ErrorLocation) {
            ErrorLocation["item"] = "item";
            ErrorLocation["file"] = "file";
            ErrorLocation["onSuccess"] = "onSuccess";
            ErrorLocation["config"] = "config";
        })(ErrorLocation = Execute.ErrorLocation || (Execute.ErrorLocation = {}));
        let ErrorSection;
        (function (ErrorSection) {
            ErrorSection["settings"] = "settings";
            ErrorSection["commands"] = "commands";
            ErrorSection["inputs"] = "inputs";
            ErrorSection["links"] = "links";
            ErrorSection["variables"] = "variables";
            ErrorSection["readme"] = "readme";
            ErrorSection["functions"] = "functions";
            ErrorSection["snippets"] = "snippets";
        })(ErrorSection = Execute.ErrorSection || (Execute.ErrorSection = {}));
    })(Execute = BLU.Execute || (BLU.Execute = {}));
    let Parser;
    (function (Parser) {
        let ErrorType;
        (function (ErrorType) {
            ErrorType["Tokenizer"] = "tokenizerError";
            ErrorType["Parser"] = "parserError";
            ErrorType["Context"] = "contextError";
        })(ErrorType = Parser.ErrorType || (Parser.ErrorType = {}));
    })(Parser = BLU.Parser || (BLU.Parser = {}));
})(BLU = exports.BLU || (exports.BLU = {}));
//# sourceMappingURL=blu.interface.js.map