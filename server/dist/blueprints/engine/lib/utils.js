"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const blu_interface_1 = require("../../../shared/interfaces/blu.interface");
class Utils {
    static parseItemName(name) {
        let type = blu_interface_1.BLU.Item.Type.Template;
        let collection;
        let parts = name.split(':');
        if (parts.length > 1) {
            const typeName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
            type = blu_interface_1.BLU.Item.Type[typeName];
            name = parts.slice(1).join(':');
        }
        parts = name.split('.');
        if (parts.length > 1) {
            collection = parts[0];
            name = parts.slice(1).join('.');
        }
        return { type, collection, name };
    }
    static UUID() {
        return Utils.UUIDv4('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
    }
    static UUIDShort() {
        return Utils.UUIDv4('xxxxxxxx');
    }
    static UUIDv4(format) {
        return format.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map