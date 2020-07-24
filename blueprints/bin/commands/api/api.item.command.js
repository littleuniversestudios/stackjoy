"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIItem = void 0;
const globals_1 = require("../../context/globals");
const blu_interface_1 = require("../../interfaces/blu.interface");
const handler_1 = require("../../lib/handler");
class APIItem {
    static get(runContext) {
        const itemId = runContext.commandArgs.APIItem;
        if (!itemId) {
            handler_1.Handle.apiError('Must provide item id', blu_interface_1.BLU.API.ErrorCode.ItemIDMissing);
        }
        return globals_1.BLUEPRINT.allItems.find(i => i.id === itemId);
    }
    static list(runContext) {
        return globals_1.BLUEPRINT.allItems;
    }
}
exports.APIItem = APIItem;
//# sourceMappingURL=api.item.command.js.map