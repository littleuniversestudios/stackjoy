"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLU = void 0;
var BLU;
(function (BLU) {
    /**
     * BLUEPRINT Item
     */
    let Item;
    (function (Item) {
        let Type;
        (function (Type) {
            Type["Template"] = "template";
            Type["Chain"] = "chain";
            Type["Snippet"] = "snippet";
        })(Type = Item.Type || (Item.Type = {}));
    })(Item = BLU.Item || (BLU.Item = {}));
    let API;
    (function (API) {
        let ErrorCode;
        (function (ErrorCode) {
            ErrorCode["GenericError"] = "GENERIC_ERROR";
            ErrorCode["FileExists"] = "FILE_EXISTS";
            ErrorCode["CommandMissing"] = "COMMAND_MISSING";
            ErrorCode["CommandNotCorrect"] = "COMMAND_NOT_CORRECT";
            ErrorCode["TemplateNameMissing"] = "TEMPLATE_NAME_MISSING";
            ErrorCode["TemplateNameNotCorrect"] = "TEMPLATE_NAME_NOT_CORRECT";
            ErrorCode["MultipleTemplates"] = "MULTIPLE_TEMPLATES";
            ErrorCode["ChainNameMissing"] = "CHAIN_NAME_MISSING";
            ErrorCode["ChainNameNotCorrect"] = "CHAIN_NAME_NOT_CORRECT";
            ErrorCode["ItemIDMissing"] = "ITEM_ID_MISSING";
            ErrorCode["RepeaterMissing"] = "REPEATER_MISSING";
            ErrorCode["ArgMissing"] = "ARG_MISSING";
        })(ErrorCode = API.ErrorCode || (API.ErrorCode = {}));
    })(API = BLU.API || (BLU.API = {}));
})(BLU = exports.BLU || (exports.BLU = {}));
//# sourceMappingURL=blu.interface.js.map