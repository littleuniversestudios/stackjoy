"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const api_metadata_command_1 = require("./api/api.metadata.command");
const api_collection_command_1 = require("./api/api.collection.command");
const api_template_command_1 = require("./api/api.template.command");
const api_log_command_1 = require("./api/api.log.command");
const handler_1 = require("../lib/handler");
const api_seed_command_1 = require("./api/api.seed.command");
const blu_interface_1 = require("../interfaces/blu.interface");
const api_chain_command_1 = require("./api/api.chain.command");
const api_item_command_1 = require("./api/api.item.command");
class API {
    static async run(runContext) {
        const apiCommand = runContext.commandArgs.APICommand || '';
        let result;
        switch (apiCommand.toLowerCase()) {
            case 'log':
                result = api_log_command_1.APILog.get(runContext);
                break;
            case 'metadata':
                result = api_metadata_command_1.APIMetadata.get(runContext);
                break;
            case 'collection-list':
                result = api_collection_command_1.APICollection.list(runContext);
                break;
            case 'collection':
                result = api_collection_command_1.APICollection.get(runContext);
                break;
            case 'seed':
                result = api_seed_command_1.APISeed.get(runContext);
                break;
            case 'template-list':
                result = api_template_command_1.APITemplate.list(runContext);
                break;
            case 'template':
                result = api_template_command_1.APITemplate.get(runContext);
                break;
            case 'chain-list':
                result = api_chain_command_1.APIChain.list(runContext);
                break;
            case 'chain':
                result = api_chain_command_1.APIChain.get(runContext);
                break;
            case 'item-list':
                result = api_item_command_1.APIItem.list(runContext);
                break;
            case 'item':
                result = api_item_command_1.APIItem.get(runContext);
                break;
            default:
                apiCommand === '' ?
                    handler_1.Handle.apiError(`No API command provided`, blu_interface_1.BLU.API.ErrorCode.CommandMissing) :
                    handler_1.Handle.apiError(`Blu API command '${apiCommand}' does not exist.`, blu_interface_1.BLU.API.ErrorCode.CommandNotCorrect);
                break;
        }
        return result;
    }
}
exports.API = API;
//# sourceMappingURL=api.commands.js.map