#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
const path = require("path");
const commands_1 = require("./commands/commands");
const minimist = require("minimist");
const user_args_1 = require("./core/user-args");
const http_1 = require("./lib/http");
const globals_1 = require("./core/globals");
const chalk = require("chalk");
const open = require('open');
user_args_1.UserArgs.initUserArgs(minimist(process.argv.slice(2)));
// console.log('args:', UserArgs.parsedArgs);
async function runScript(scriptPath, args = [], callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    let invoked = false;
    const process = childProcess.fork(scriptPath, args);
    // listen for errors as they may prevent the exit event from firing
    process.on('message', async (message) => {
        switch (message.event) {
            case 'started':
                http_1.HTTP.serverHOST = message.data.url;
                await commands_1.setBLUFolder();
                await commands_1.runCommand(user_args_1.UserArgs.parsedArgs);
                console.log(chalk.green('------------------------------------------------------------------------------------'));
                console.log(chalk.green(`|   Opening Stackjoy in your default browser. If it doesn't automatically open     |`));
                console.log(chalk.green('|   you can click or copy the link below and paste it in your browser of choice:   |'));
                console.log(chalk.green('|  '), chalk.green(`${http_1.HTTP.serverHOST}${globals_1.Globals.startURL}`));
                console.log(chalk.green('------------------------------------------------------------------------------------'));
                open(`${http_1.HTTP.serverHOST}${globals_1.Globals.startURL}`);
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
const port = user_args_1.UserArgs.port() || `${Math.floor(Math.random() * 9000) + 4000}`;
runScript(path.join(__dirname, '../../server/dist/index.js'), [port], (err) => {
    if (err)
        throw err;
}).then(null);
//# sourceMappingURL=index.js.map