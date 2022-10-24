"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const error_handler_1 = require("./shared/middlewares/error-handler");
const globals_1 = require("./globals");
const upload_router_1 = require("./upload/upload.router");
const api_router_1 = require("./api/api.router");
const auto_login_1 = require("./shared/lib/auto.login");
const args_1 = require("./cmd-line/args");
const cmd_line_1 = require("./cmd-line/cmd.line");
const compression = require("compression");
const app = express();
const clientFolder = path.join(__dirname, '../../client/dist');
/**
 * When stackjoy is in dev mode, freeze the port to 9999
 * so that the client can be run separately and know where to hit the server.
 */
const cmdLineArgs = args_1.parseArgs();
const devPort = (_a = cmdLineArgs.port) === null || _a === void 0 ? void 0 : _a[0];
const port = devPort || Math.floor(Math.random() * 9000) + 4000; // assign a random port if port not provided, should fix it to a default port
app.use(compression());
app.use(helmet());
app.use(cors());
app.get('*.*', express.static(clientFolder, { maxAge: '1y' })); // serve client files
app.use('/api', api_router_1.apiRouter); // serve API Routes
app.use('/upload', upload_router_1.uploadRouter); // upload files
app.all('*', (req, res) => res.status(200).sendFile(`/`, { root: clientFolder })); // SERVE APPLICATION PATHS
app.use(error_handler_1.serverErrorHandler);
app.listen(port, async () => {
    var _a;
    // initialize stackjoy and codebase
    globals_1.initStackjoy();
    const codebasePath = (_a = process.env.CODEBASE_PATH) !== null && _a !== void 0 ? _a : process.cwd();
    globals_1.APP_SERVICE.init(codebasePath);
    //handle any command line arguments
    await cmd_line_1.handleCMDLineArgs(cmdLineArgs);
    // for dev purpose only
    await auto_login_1.autoLogin();
    if (process.send) {
        process.send({ event: 'started', data: { url: `http://127.0.0.1:${port}`, root: codebasePath } });
    }
});
//# sourceMappingURL=index.js.map