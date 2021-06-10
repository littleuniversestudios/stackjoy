"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandsRouter = void 0;
const express_1 = require("express");
const commandsRules = require("./commands.rules");
const route_validation_1 = require("../../../../../shared/middlewares/route-validation");
const route_handler_1 = require("../../../../../shared/middlewares/route-handler");
const commands_service_1 = require("./commands.service");
exports.commandsRouter = express_1.Router();
const commandsService = new commands_service_1.CommandsService();
exports.commandsRouter.get('/', route_validation_1.validateRequest(commandsRules.forLIST), route_handler_1.handleRoute(async (req, res, next) => {
    const commands = commandsService.findAll();
    return res.json(commands);
}));
exports.commandsRouter.get('/:commandsId', route_validation_1.validateRequest(commandsRules.forGET), route_handler_1.handleRoute(async (req, res, next) => {
    const commands = commandsService.findById(parseInt(`${req.params.commandsId}`));
    return res.json(commands);
}));
exports.commandsRouter.post('/', route_validation_1.validateRequest(commandsRules.forPOST), route_handler_1.handleRoute(async (req, res) => {
    const commands = commandsService.create(req.body);
    return res.json(commands);
}));
exports.commandsRouter.put('/:commandsId', route_validation_1.validateRequest(commandsRules.forPUT), route_handler_1.handleRoute(async (req, res, next) => {
    const commands = await commandsService.update(parseInt(`${req.params.commandsId}`), req.body);
    return commands ? res.json(commands) : next({ status: 400, message: "Entity does not exist" });
}));
exports.commandsRouter.delete('/:commandsId', route_validation_1.validateRequest(commandsRules.forDELETE), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ success: true });
}));
//# sourceMappingURL=commands.router.js.map