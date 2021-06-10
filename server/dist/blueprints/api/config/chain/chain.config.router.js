"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainConfigRouter = void 0;
const express_1 = require("express");
const readme_router_1 = require("./readme/readme.router");
const commands_router_1 = require("./commands/commands.router");
exports.chainConfigRouter = express_1.Router();
exports.chainConfigRouter.use('/readme', readme_router_1.readmeRouter);
exports.chainConfigRouter.use('/commands', commands_router_1.commandsRouter);
//# sourceMappingURL=chain.config.router.js.map