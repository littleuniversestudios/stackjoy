#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
const path = require("path");
const chalk = require("chalk");
const open = require('open');
async function runScript(scriptPath, args = [], callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    let invoked = false;
    const process = childProcess.fork(scriptPath, args);
    process.on('message', async (message) => {
        switch (message.event) {
            case 'started':
                const serverHOST = message.data.url;
                console.log(chalk.green('------------------------------------------------------------------------------------'));
                console.log(chalk.green(`|   Opening Stackjoy in your default browser. If it doesn't automatically open     |`));
                console.log(chalk.green('|   you can click or copy the link below and paste it in your browser of choice:   |'));
                console.log(chalk.green('|  '), chalk.green(`${serverHOST}`));
                console.log(chalk.green('------------------------------------------------------------------------------------'));
                await open(`${serverHOST}`);
                break;
            default:
                break;
        }
    });
    process.on('error', (err) => {
        if (invoked)
            return;
        invoked = true;
        callback(err);
    });
    // execute the callback once the process has finished running
    process.on('exit', (code) => {
        if (invoked)
            return;
        invoked = true;
        const err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });
}
// Now we can run a script and invoke a callback when complete, e.g.
const cmdLineArgs = process.argv.slice(2); // commands like `sj install stack-name` wil get picked up here and passed to agent
runScript(path.join(__dirname, '../../server/dist/index.js'), [...cmdLineArgs], (err) => {
    if (err)
        throw err;
}).then(null);
//# sourceMappingURL=index.js.map