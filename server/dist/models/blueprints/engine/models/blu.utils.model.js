"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUUtils = void 0;
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
class BLUUtils {
    static loadFile(path) {
        let fileContents = null;
        try {
            fileContents = (0, fs_1.readFileSync)(path, 'utf-8');
        }
        catch (error) {
        }
        return fileContents;
    }
    static loadJSONFile(path) {
        let fileContents = null;
        try {
            fileContents = (0, fs_extra_1.readJSONSync)(path);
        }
        catch (error) {
        }
        return fileContents;
    }
    static saveJSONFile(path, value) {
        try {
            (0, fs_extra_1.writeJSONSync)(path, value);
        }
        catch (e) {
            return { error: e, data: { success: false } };
        }
        return { error: null, data: { success: true } };
    }
    static saveFile(path, value) {
        try {
            (0, fs_1.writeFileSync)(path, value);
        }
        catch (e) {
            return { error: e, data: { success: false } };
        }
        return { error: null, data: { success: true } };
    }
}
exports.BLUUtils = BLUUtils;
//# sourceMappingURL=blu.utils.model.js.map