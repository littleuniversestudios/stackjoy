"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This needs to be first to all the other imports have it loaded.
const auth_service_1 = require("./app/api/auth/auth.service");
require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const main_router_1 = require("./main.router");
const error_handler_1 = require("./shared/middlewares/error-handler");
const globals_1 = require("./globals");
const upload_router_1 = require("./blueprints/upload/upload.router");
const compression = require("compression");
const app = express();
const clientFolder = path.join(__dirname, '../../client/dist');
/**
 * When stackjoy is in dev mode, freeze the port to 9999
 * so that the client can be run separately and know where to hit the server.
 */
const devPort = process.argv[2];
const port = devPort || Math.floor(Math.random() * 9000) + 4000; // assign a random port if port not provided, should fix it to a default port
app.use(compression());
app.use(helmet());
app.use(cors());
app.get('*.*', express.static(clientFolder, { maxAge: '1y' })); // serve client files
app.use('/api', main_router_1.mainRouter); // serve API Routes
app.use('/upload', upload_router_1.uploadRouter); // upload files
app.all('*', (req, res) => res.status(200).sendFile(`/`, { root: clientFolder })); // SERVE APPLICATION PATHS
app.use(error_handler_1.serverErrorHandler);
app.listen(port, async () => {
    globals_1.initStackjoy();
    const codebasePath = process.cwd();
    // const codebasePath = `/Users/Shared/stackjoy/angular-demo`;
    globals_1.APP_SERVICE.init(codebasePath);
    // for dev purpose only
    await autoLogin();
    if (process.send)
        process.send({ event: 'started', data: { url: `http://127.0.0.1:${port}`, root: codebasePath } });
});
/**
 * For development purposes only. if the env variables are set for user email/password
 * automatically, log the user into the system
 */
async function autoLogin() {
    const email = process.env.USER_EMAIL;
    const password = process.env.USER_PASSWORD;
    if (email && password) {
        console.log('\n!!!!!!!!!!!!!!!!!!!!!!!!!  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('! You are using credentials set in the environment variables !');
        console.log('!                                                            !');
        console.log('! EMAIL: ', email);
        console.log('! PASSWORD: ', password);
        console.log('!                                                            !');
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!! /WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
        await auth_service_1.AuthService.login({ email, password });
    }
}
//# sourceMappingURL=index.js.map