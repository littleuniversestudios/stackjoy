"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDv4 = exports.UUIDLong = exports.UUIDMedium = exports.UUIDShort = exports.UUID = exports.getLastDirectoryName = exports.isDirectorySync = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
exports.isDirectorySync = path => fs_extra_1.lstatSync(path).isDirectory();
exports.getLastDirectoryName = (filePath) => filePath.split(path_1.sep).reverse()[0];
exports.UUID = () => {
    return exports.UUIDv4('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
};
exports.UUIDShort = () => {
    return exports.UUIDv4('xxxxxxxx');
};
exports.UUIDMedium = () => {
    return exports.UUIDv4('xxxxxxxxxxxx');
};
exports.UUIDLong = () => {
    return exports.UUIDv4('xxxxxxxxxxxxxxxx');
};
exports.UUIDv4 = (format) => {
    return format.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map