"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const main_router_1 = require("./routers/main.router");
const path = require("path");
const error_handler_1 = require("./middlewares/error-handler");
require("./lib/firebase");
const globals_1 = require("./globals");
const compression = require("compression");
const app = express();
const _app_folder = path.join(__dirname, '../../client/dist');
/**
 * Since the blueprints were baked into the stackjoy repo we need to keep track where the app is being run so that
 * we can invoke the blueprints in its own shell. Here we get the absolute path of the stackjoy server so that we know
 * the path where to invoke the blueprints.
 */
global['absoluteServerPath'] = path.resolve(__dirname);
/**
 * When stackjoy is in dev mode, freeze the port to 9999
 * so that the client can be run separately and know where to hit the server.
 */
const devPort = process.argv[2];
const port = devPort || Math.floor(Math.random() * 9000) + 4000;
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('*.*', express.static(_app_folder, { maxAge: '1y' })); // serve static files
app.use('/api', main_router_1.mainRouter); //serve API Routes
app.all('*', (req, res) => res.status(200).sendFile(`/`, { root: _app_folder })); // SERVE APPLICATION PATHS
app.use(error_handler_1.serverErrorHandler);
app.listen(port, () => {
    if (process.send)
        process.send({ event: 'started', data: { url: `http://127.0.0.1:${port}`, root: process.cwd() } });
    globals_1.setRootDir(process.cwd());
});
//# sourceMappingURL=index.js.map