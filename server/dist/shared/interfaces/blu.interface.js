"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLU = void 0;
var BLU;
(function (BLU) {
    let Origin;
    (function (Origin) {
        let Types;
        (function (Types) {
            Types["User"] = "user";
            Types["CMD"] = "command";
            Types["System"] = "system";
        })(Types = Origin.Types || (Origin.Types = {}));
    })(Origin = BLU.Origin || (BLU.Origin = {}));
    let Item;
    (function (Item) {
        let Type;
        (function (Type) {
            Type["Collection"] = "collection";
            Type["Template"] = "template";
            Type["Chain"] = "chain";
            Type["Workspace"] = "workspace";
            Type["Stack"] = "stack";
        })(Type = Item.Type || (Item.Type = {}));
    })(Item = BLU.Item || (BLU.Item = {}));
    let Data;
    (function (Data) {
        let Type;
        (function (Type) {
            Type["input"] = "input";
            Type["model"] = "model";
            Type["schema"] = "schema";
        })(Type = Data.Type || (Data.Type = {}));
    })(Data = BLU.Data || (BLU.Data = {}));
    let Execute;
    (function (Execute) {
        let ErrorType;
        (function (ErrorType) {
            ErrorType["circularChain"] = "circularChain";
            ErrorType["fileExists"] = "fileExists";
            ErrorType["parseError"] = "parseError";
            ErrorType["missingInput"] = "missingInput";
            ErrorType["itemNotFound"] = "itemNotFound";
            ErrorType["multipleItemsFound"] = "multipleItemsFound";
        })(ErrorType = Execute.ErrorType || (Execute.ErrorType = {}));
        let ErrorLocation;
        (function (ErrorLocation) {
            ErrorLocation["item"] = "item";
            ErrorLocation["chain"] = "chain";
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
        })(ErrorSection = Execute.ErrorSection || (Execute.ErrorSection = {}));
    })(Execute = BLU.Execute || (BLU.Execute = {}));
    let Parser;
    (function (Parser) {
        let ErrorType;
        (function (ErrorType) {
            ErrorType["Tokenizer"] = "tokenizerError";
            ErrorType["Parser"] = "parserError";
            ErrorType["Context"] = "contextError";
            ErrorType["MergeConflict"] = "mergeError";
        })(ErrorType = Parser.ErrorType || (Parser.ErrorType = {}));
    })(Parser = BLU.Parser || (BLU.Parser = {}));
})(BLU = exports.BLU || (exports.BLU = {}));
//# sourceMappingURL=blu.interface.js.map