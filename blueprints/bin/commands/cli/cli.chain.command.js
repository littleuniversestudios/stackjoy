"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
const enquirer_1 = require("enquirer");
const blu_interface_1 = require("../../interfaces/blu.interface");
const globals_1 = require("../../context/globals");
const text_transform_1 = require("../../lib/text-transform");
const handler_1 = require("../../lib/handler");
const chalk_1 = require("chalk");
const global_context_1 = require("../../context/global-context");
const chain_context_1 = require("../../context/chain-context");
class Chain {
    static async run(runContext) {
        const chainContext = new chain_context_1.ChainContext(runContext);
        runContext.itemContext = chainContext;
        chainContext.command = runContext.CLICommand;
        chainContext.chain = await handler_1.Handle.asyncResponse(findChain(runContext.commandArgs.chainName));
        await handler_1.Handle.asyncResponse(setChainCommands(runContext));
    }
}
exports.Chain = Chain;
/**
 * Find the specific chain the user intends to generate
 * @param chainName
 */
async function findChain(chainName) {
    const chains = globals_1.BLUEPRINT.getChains(chainName);
    let chain;
    if (chains.length === 1) {
        chain = chains[0];
    }
    else if (chains.length > 1) {
        chain = await handler_1.Handle.asyncResponse(selectChain(chains, `Multiple chains with name/alias '${chainName}'. Select one:`));
    }
    else {
        if (global_context_1.GlobalContext.isRunByAPI()) {
            chainName ?
                handler_1.Handle.apiError(`Must provide chain name/alias.`, blu_interface_1.BLU.API.ErrorCode.ChainNameMissing) :
                handler_1.Handle.apiError(`Chain with name/alias '${chainName}' does not exist.`, blu_interface_1.BLU.API.ErrorCode.ChainNameNotCorrect);
        }
        else {
            if (chainName) {
                console.log(chalk_1.default.green(`Chain with name/alias '${chainName}' does not exist. Please select another one.`));
            }
            chain = await handler_1.Handle.asyncResponse(selectChain(globals_1.BLUEPRINT.allChains, `Select chain to run:`));
        }
    }
    return chain;
}
/**
 * Extract the chained commands (this will also look at the input args that are part of the chain
 * and extract them, or will prompt the user that they are missing and needed)
 * @param runContext
 */
async function setChainCommands(runContext) {
    const chainContext = runContext.itemContext;
    chainContext.subCommands = await handler_1.Handle.asyncResponse(chainContext.chain.getCommands(runContext));
}
/**
 * If no chain was provided (or chain could not be found) let user choose a template from the list of chains.
 * Applies only to CLI mode
 * @param chains
 * @param message
 */
async function selectChain(chains, message) {
    const question = {
        type: 'autocomplete',
        name: 'chain',
        message,
        limit: 6,
        suggest(input, choices) {
            const searchExpression = new RegExp(input, 'gi');
            return choices.filter(choice => searchExpression.test(choice.message));
        },
        choices: getChoices(chains),
    };
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt(question));
    return response.chain;
}
/**
 * Create searchable chain choices by combining the name, collection and the description
 * of the chain. User can then find a specific chain even if the search term is
 * only found in the description.
 * Applies only to CLI mode
 * @param chains
 */
function getChoices(chains) {
    return chains.map(chain => {
        const name = text_transform_1.TextTransform.padText(chain.name, 25);
        const description = chain.description ? ` ${text_transform_1.TextTransform.ellipsis(chain.description, 50)}` : '';
        const collection = description ? text_transform_1.TextTransform.padText(`[${chain.collectionName}]`, 20) : `[${text_transform_1.TextTransform.ellipsis(chain.collectionName, 18)}]`;
        return { name: `${name} ${collection}${description}`, value: chain };
    });
}
//# sourceMappingURL=cli.chain.command.js.map