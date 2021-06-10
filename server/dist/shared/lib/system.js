"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.system = void 0;
const path = require('path');
const os = require('os');
const { env } = process;
const homedir = os.homedir();
const tmpdir = os.tmpdir();
const macos = (name) => {
    const library = path.join(homedir, 'Library');
    return {
        name: 'macos',
        platform: process.platform,
        path: {
            data: path.join(library, 'Application Support', name),
            temp: path.join(tmpdir, name)
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
            temp: path.join(tmpdir, name)
        }
    };
};
const linux = (name) => {
    const username = path.basename(homedir);
    return {
        name: 'linux',
        platform: process.platform,
        path: {
            data: path.join(env.XDG_DATA_HOME || path.join(homedir, '.local', 'share'), name),
            temp: path.join(tmpdir, username, name)
        }
    };
};
exports.system = (name) => {
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
//# sourceMappingURL=system.js.map