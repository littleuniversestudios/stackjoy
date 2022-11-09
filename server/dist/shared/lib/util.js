"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDv4 = exports.UUIDLong = exports.UUIDMedium = exports.UUIDShort = exports.UUID = exports.getLastDirectoryName = exports.isDirectorySync = void 0;
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const isDirectorySync = (path) => {
    try {
        return (0, fs_extra_1.lstatSync)(path).isDirectory();
    }
    catch (e) {
        return false;
    }
};
exports.isDirectorySync = isDirectorySync;
const getLastDirectoryName = (filePath) => filePath.split(path_1.sep).reverse()[0];
exports.getLastDirectoryName = getLastDirectoryName;
const UUID = () => {
    return (0, exports.UUIDv4)('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
};
exports.UUID = UUID;
const UUIDShort = () => {
    return (0, exports.UUIDv4)('xxxxxxxx');
};
exports.UUIDShort = UUIDShort;
const UUIDMedium = () => {
    return (0, exports.UUIDv4)('xxxxxxxxxxxx');
};
exports.UUIDMedium = UUIDMedium;
const UUIDLong = () => {
    return (0, exports.UUIDv4)('xxxxxxxxxxxxxxxx');
};
exports.UUIDLong = UUIDLong;
const UUIDv4 = (format) => {
    return format.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
exports.UUIDv4 = UUIDv4;
//# sourceMappingURL=util.js.map