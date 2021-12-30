"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const main_router_1 = require("./main.router");
const path = require("path");
const error_handler_1 = require("./shared/middlewares/error-handler");
const globals_1 = require("./globals");
const upload_router_1 = require("./blueprints/upload/upload.router");
const compression = require("compression");
const app = express();
const _app_folder = path.join(__dirname, '../../client/dist');
/**
 * When stackjoy is in dev mode, freeze the port to 9999
 * so that the client can be run separately and know where to hit the server.
 */
const devPort = process.argv[2];
const port = devPort || Math.floor(Math.random() * 9000) + 4000;
app.use(compression());
app.use(helmet());
app.use(cors());
app.get('*.*', express.static(_app_folder, { maxAge: '1y' })); // serve static files
app.use('/api', main_router_1.mainRouter); //serve API Routes
app.use('/upload', upload_router_1.uploadRouter); //serve API Routes
app.all('*', (req, res) => res.status(200).sendFile(`/`, { root: _app_folder })); // SERVE APPLICATION PATHS
app.use(error_handler_1.serverErrorHandler);
app.listen(port, () => {
    const codebasePath = process.cwd();
    // const codebasePath = '/Users/nvitas/lus/git/stackjoy/stackjoy-git'
    globals_1.initApp(codebasePath);
    // console.log(`http://127.0.0.1:${port}`);
    // console.log('operating from: ', APP_ENVIRONMENT.codebasePath)
    if (process.send)
        process.send({ event: 'started', data: { url: `http://127.0.0.1:${port}`, root: codebasePath } });
});
//# sourceMappingURL=index.js.map