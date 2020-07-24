"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generate = void 0;
const enquirer_1 = require("enquirer");
const blu_interface_1 = require("../../interfaces/blu.interface");
const globals_1 = require("../../context/globals");
const text_transform_1 = require("../../lib/text-transform");
const handler_1 = require("../../lib/handler");
const cli_chain_command_1 = require("./cli.chain.command");
const cli_template_command_1 = require("./cli.template.command");
class Generate {
    /**
     * Run the item generation process.
     * possible generation commands:
     * test                     - generate the test template (could have collisions with 'test' templates from other collections)
     * collection.test          - generate the test template from the 'collection' collection (no collision)
     * template:collection.test - verbose (no collision)
     * chain:test               - generate the test chain (could have collisions with 'test' chains from other collections)
     * chain:collection.test    - generate the test chain from the 'collection' collection (no collision)
     * snippet:test             - generate the test snippet (could have collisions with 'test' snippets from other collections)
     * snippet:collection.test  - generate the test snippet from the 'collection' collection (no collision)
     * @param runContext
     */
    static async run(runContext) {
        if (!runContext.commandArgs.hasSourceTemplateName) {
            const selectedItem = await handler_1.Handle.asyncResponse(selectItem(globals_1.BLUEPRINT.allItems, `Select item to generate:`));
            runContext.commandArgs.setSourceTemplateName(`${selectedItem.type}:${selectedItem.collectionName}.${selectedItem.name}`);
        }
        if (runContext.commandArgs.isChain) {
            await handler_1.Handle.asyncResponse(cli_chain_command_1.Chain.run(runContext));
        }
        else {
            await handler_1.Handle.asyncResponse(cli_template_command_1.Template.run(runContext));
        }
    }
}
exports.Generate = Generate;
/**
 * If no item was provided let user choose an item from the list of chains,templates,snippets.
 * Applies only to CLI mode
 * @param templates
 * @param message
 */
async function selectItem(items, message) {
    const question = {
        type: 'autocomplete',
        name: 'item',
        message,
        limit: 6,
        suggest(input, choices) {
            const searchExpression = new RegExp(input, 'gi');
            return choices.filter(choice => searchExpression.test(choice.message));
        },
        choices: getChoices(items),
    };
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt(question));
    return response.item;
}
/**
 * Create searchable item choices by combining the name, collection and the description
 * of the item. User can then find an item template even if the search term is
 * only found in the description.
 * Applies only to CLI mode
 * @param items
 */
function getChoices(items) {
    return items.map(item => {
        const name = text_transform_1.TextTransform.padText(item.name, 25);
        const description = item.description ? ` ${text_transform_1.TextTransform.ellipsis(item.description, 50)}` : '';
        const collection = description ? text_transform_1.TextTransform.padText(`[${item.collectionName}]${getTypeIcon(item.type)}`, 20) : `[${text_transform_1.TextTransform.ellipsis(item.collectionName, 18)}]${getTypeIcon(item.type)}`;
        return { name: `${name} ${collection}${description}`, value: item };
    });
}
function getTypeIcon(type) {
    let icon = '';
    switch (type) {
        case blu_interface_1.BLU.Item.Type.Chain:
            icon = '\u221e';
            break;
        case blu_interface_1.BLU.Item.Type.Snippet:
            icon = '\u03d5';
            break;
    }
    return icon;
}
//# sourceMappingURL=cli.generate.command.js.map