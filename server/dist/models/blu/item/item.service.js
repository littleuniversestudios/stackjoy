"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
class ItemService {
    findAll() {
        return blu_handler_1.bluHandler('api item-list');
    }
    findById(itemId) {
        return blu_handler_1.bluHandler(`api item '${itemId}'`);
    }
}
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map