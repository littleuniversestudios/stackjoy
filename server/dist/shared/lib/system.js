"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSystem = void 0;
const path = require('path');
const os = require('os');
const { env } = process;
const homedir = os.homedir();
const tmpdir = os.tmpdir();
const macos = (name) => {
    var _a;
    const library = path.join(homedir, 'Library');
    return {
        name: 'macos',
        platform: process.platform,
        path: {
            homedir,
            data: (_a = process.env.STACKJOY_DATA_DIR) !== null && _a !== void 0 ? _a : path.join(library, 'Application Support', name),
            temp: path.join(tmpdir, name)
        }
    };
};
const windows = (name) => {
    var _a;
    const localAppData = env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local');
    return {
        name: 'windows',
        platform: process.platform,
        path: {
            homedir,
            data: (_a = process.env.STACKJOY_DATA_DIR) !== null && _a !== void 0 ? _a : path.join(localAppData, name),
            temp: path.join(tmpdir, name)
        }
    };
};
const linux = (name) => {
    var _a;
    const username = path.basename(homedir);
    return {
        name: 'linux',
        platform: process.platform,
        path: {
            homedir,
            data: (_a = process.env.STACKJOY_DATA_DIR) !== null && _a !== void 0 ? _a : path.join(env.XDG_DATA_HOME || path.join(homedir, '.local', 'share'), name),
            temp: path.join(tmpdir, username, name)
        }
    };
};
const initSystem = (name = 'stackjoy') => {
    if (process.platform === 'darwin') {
        return macos(name);
    }
    else if (process.platform === 'win32') {
        return windows(name);
    }
    else {
        return linux(name);
    }
};
exports.initSystem = initSystem;
//# sourceMappingURL=system.js.map