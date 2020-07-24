"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBLUFolder = exports.runCommand = void 0;
const http_1 = require("../lib/http");
const globals_1 = require("../core/globals");
const path = require("path");
const fs = require("fs");
const install_1 = require("./install");
async function runCommand(parsedArgs) {
    // console.log('------------------');
    // console.log(parsedArgs);
    // console.log('------------------');
    if (parsedArgs._.length > 0) {
        await determineCommand(parsedArgs);
    }
}
exports.runCommand = runCommand;
function getCommand(parsedArgs) {
    return parsedArgs._[0];
}
function getStackjoyItems(parsedArgs) {
    return parsedArgs._.slice(1);
}
async function determineCommand(parsedArgs) {
    const command = (getCommand(parsedArgs) || '').toLowerCase();
    switch (command) {
        case 'i':
        case 'install':
            await install_1.installItems(getStackjoyItems(parsedArgs));
            break;
        default:
            break;
    }
}
async function setBLUFolder() {
    const result = await http_1.HTTP.get('/api/blu/metadata');
    if (result.error) {
        console.log(result.error);
        process.exit();
    }
    else {
        const bluMetadata = result.data;
        if (!bluMetadata.bluPath) {
            const newBluPath = path.join(bluMetadata.cwd, bluMetadata.bluDir);
            if (!fs.existsSync(newBluPath)) {
                fs.mkdirSync(newBluPath);
            }
            bluMetadata.bluPath = newBluPath;
        }
        else {
            globals_1.Globals.usingExistingBluFolder = true;
        }
        globals_1.Globals.bluMetadata = bluMetadata;
    }
}
exports.setBLUFolder = setBLUFolder;
//# sourceMappingURL=commands.js.map