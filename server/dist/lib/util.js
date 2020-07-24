"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const crypto = require("crypto");
function commonPrefix(array) {
    const A = array.concat().sort();
    const a1 = A[0];
    const a2 = A[A.length - 1];
    const L = a1.length;
    let i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i)) {
        i++;
    }
    return a1.substring(0, i);
}
exports.commonPrefix = commonPrefix;
exports.isDirectorySync = path => fs_extra_1.lstatSync(path).isDirectory();
exports.getLastDirectoryName = (filePath) => filePath.split(path_1.sep).reverse()[0];
exports.checksum = (str, algorithm = 'md5', encoding = 'hex') => {
    return crypto.createHash(algorithm).update(str, 'utf8').digest(encoding);
};
//# sourceMappingURL=util.js.map