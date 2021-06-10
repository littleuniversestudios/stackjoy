"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
const path = require('path');
const os = require('os');
const homedir = os.homedir();
const { env } = process;
const macos = (name) => {
    const library = path.join(homedir, 'Library');
    return {
        name: 'macos',
        platform: process.platform,
        path: {
            data: path.join(library, 'Application Support', name),
        }
    };
};
const windows = (name) => {
    const localAppData = env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local');
    return {
        name: 'windows',
        platform: process.platform,
        path: {
            data: path.join(localAppData, name),
        }
    };
};
const linux = (name) => {
    return {
        name: 'linux',
        platform: process.platform,
        path: {
            data: path.join(env.XDG_DATA_HOME || path.join(homedir, '.local', 'share'), name),
        }
    };
};
exports.environment = (name) => {
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
//# sourceMappingURL=environment.js.map