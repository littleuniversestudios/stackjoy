"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
class Util {
    static safeSplit(str, char) {
        return !!str ? str.split(char) : undefined;
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map