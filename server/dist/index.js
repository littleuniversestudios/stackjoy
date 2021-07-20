"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const main_router_1 = require("./main.router");
const path = require("path");
const error_handler_1 = require("./shared/middlewares/error-handler");
const globals_1 = require("./globals");
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('*.*', express.static(_app_folder, { maxAge: '1y' })); // serve static files
app.use('/api', main_router_1.mainRouter); //serve API Routes
app.all('*', (req, res) => res.status(200).sendFile(`/`, { root: _app_folder })); // SERVE APPLICATION PATHS
app.use(error_handler_1.serverErrorHandler);
app.listen(port, () => {
    globals_1.initApp(process.cwd());
    // console.log(`http://127.0.0.1:${port}`);
    // console.log('operating from: ', APP_ENVIRONMENT.codebasePath)
    if (process.send)
        process.send({ event: 'started', data: { url: `http://127.0.0.1:${port}`, root: globals_1.APP_ENVIRONMENT.codebasePath } });
    const blueprints = globals_1.APP_ENVIRONMENT.getBlueprints();
    const i = blueprints.allItems();
    // const blueprints = new Blueprints(ROOT_DIR);
    // const p = blueprints.preview(
    //     'template:angular.loop',
    //     {
    //       "colors": [
    //         "red",
    //       ],
    //       "name": "pet"
    //     },
    //     '/Users/nvitas/lus/git/stackjoy/server/tmp/tts'
    //     );
    // console.log('',p)
    // const treeService = new TreeService();
    // const tree = treeService.getTree(ROOT_DIR)
    // console.log('tree', tree)
    // const pl = path.join('/test','./boo');
    //
    // console.log('path: ',pl)
    // console.log('=========================')
});
//# sourceMappingURL=index.js.map