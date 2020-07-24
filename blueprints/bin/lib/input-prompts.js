"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPrompts = void 0;
const chalk_1 = require("chalk");
const enquirer_1 = require("enquirer");
const text_transform_1 = require("./text-transform");
const handler_1 = require("./handler");
const print_1 = require("./print");
const inputArgHasChoices = (inputArg) => inputArg.choices && Array.isArray(inputArg.choices) && inputArg.choices.length > 0;
const argsHaveChoices = (inputArgs) => inputArgs.some(i => inputArgHasChoices(i));
const sanitizeInputArgChoices = (argChoices) => argChoices.map(c => isInputArgChoice(c) ? c : ({ value: `${c}`, description: '' }));
const isInputArgChoice = (choice) => typeof choice !== 'string' && 'value' in choice && 'description' in choice;
const OPTIONAL_VALUE_STR = '--NONE--';
class InputPrompts {
    static async formPrompt(inputArgs, message = 'Following arguments are required for this template.') {
        const choiceInputArgs = inputArgs.filter(a => a.choices && a.choices.length > 0);
        const simpleInputArgs = inputArgs.filter(a => !(a.choices && a.choices.length > 0));
        const allValues = [];
        if (simpleInputArgs.length > 0) {
            const simpleInputValues = await handler_1.Handle.asyncResponse(simpleArgsPrompt(simpleInputArgs, message));
            allValues.push(...simpleInputValues);
        }
        if (choiceInputArgs.length > 0) {
            const choiceInputValues = await handler_1.Handle.asyncResponse(autoCompleteArgsPrompt(choiceInputArgs));
            allValues.push(...choiceInputValues);
        }
        return allValues;
    }
    static async getRepeaterArguments(repeater) {
        repeater.values = [];
        let addEntry = true;
        while (addEntry) {
            let repeaterValues = await handler_1.Handle.asyncResponse(getRepeaterValues(repeater));
            repeaterValues = stripOptionalArgs(repeaterValues);
            const isLastEntryBlank = InputPrompts.allValuesBlank(repeaterValues);
            if (!isLastEntryBlank) {
                repeater.values.push([...repeaterValues]);
                printRepeater(repeater);
                addEntry = await handler_1.Handle.asyncResponse(addAnotherRepeaterEntry(repeater.name));
            }
            else {
                printRepeater(repeater);
                addEntry = false;
            }
        }
        /**
         * By this point the repeater went thru the user input and the user may have not added any values
         * as they could be optional so we set the canBeBlank property to true in case this repeater comes
         * up again in another template that is part of the chain. Basically, even though the repeater is
         * in the config, the user has decided (at run time) that it can be blank.
         */
        if (repeater.values.length === 0) {
            repeater.canBeBlank = true;
        }
        return repeater;
    }
    static allValuesBlank(args) {
        let allBlank = true;
        args.forEach(a => allBlank = allBlank && (!!a.value) === false);
        return allBlank;
    }
}
exports.InputPrompts = InputPrompts;
async function autoCompleteArgsPrompt(inputArgs) {
    for (const arg of inputArgs) {
        const promptChoices = getAutoCompletePromptChoices(arg);
        const message = `Select choice for ${arg.name} ${arg.description ? `(${arg.description})` : ''}`;
        const autoCompleteResult = await handler_1.Handle.asyncResponse(autoCompletePrompt(promptChoices, message));
        arg.value = autoCompleteResult.value;
    }
    return stripOptionalArgs(inputArgs);
}
async function simpleArgsPrompt(inputArgs, message = 'Following arguments are required for this template.') {
    const choices = inputArgs.map(arg => ({ optional: !!arg.optional, name: arg.name, message: `${arg.name} ${arg.description ? `(${arg.description})` : ``} ${arg.optional ? '[optional - press ENTER to skip]' : ''}` }));
    const instructions = choices.length > 1 ? `(press TAB for next, ENTER to submit)` : ``;
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt({
        type: 'form',
        name: 'args',
        message: `${message} ${instructions}`,
        choices,
        validate(value) {
            const failedInputs = choices.filter(choice => value[choice.name] === '' && choice.optional !== true);
            return failedInputs.length > 0 ? `${failedInputs.map(i => i.name).join(',')} cannot be blank.` : true;
        },
    }));
    return inputArgs.map(arg => ({ name: arg.name, description: arg.description, value: response.args[arg.name], choices: arg.choices }));
}
async function autoCompletePrompt(promptChoices, message = 'Please select a choice') {
    const question = {
        type: 'autocomplete',
        name: 'choice',
        message,
        limit: 10,
        suggest(input, choices) {
            const searchExpression = new RegExp(input, 'gi');
            return choices.filter(choice => searchExpression.test(choice.message));
        },
        choices: promptChoices,
    };
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt(question));
    return response.choice;
}
/**
 * REPEATERS
 */
async function addAnotherRepeaterEntry(repeaterName) {
    const question = {
        type: 'confirm',
        name: 'confirm',
        message: `Add another entry to ${repeaterName}?`,
    };
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt(question));
    return response.confirm;
}
async function getRepeaterValues(repeater) {
    var _a;
    let repeaterValues = [];
    if (argsHaveChoices(repeater.args)) {
        for (const arg of repeater.args) {
            if (arg.choices && arg.choices.length > 0) {
                const promptChoices = getAutoCompletePromptChoices(arg);
                const message = `${(_a = repeater.description) !== null && _a !== void 0 ? _a : repeater.name}: select choice for ${arg.name} ${arg.description ? `(${arg.description})` : ''}`;
                const autoCompleteResult = await handler_1.Handle.asyncResponse(autoCompletePrompt(promptChoices, message));
                repeaterValues.push(Object.assign({}, arg, { value: autoCompleteResult.value }));
            }
            else {
                const formResult = await handler_1.Handle.asyncResponse(InputPrompts.formPrompt([arg], repeater.description));
                repeaterValues.push(Object.assign({}, formResult[0]));
            }
        }
    }
    else {
        repeaterValues = await handler_1.Handle.asyncResponse(InputPrompts.formPrompt(repeater.args, repeater.description));
    }
    return repeaterValues;
}
function printRepeater(repeater) {
    console.log('');
    console.log(chalk_1.default.green(`Current values for repeater: ${repeater.name}`));
    if (repeater.values.length > 0) {
        const repeaterValueTable = [repeater.args.map(a => a.name), repeater.args.map(a => print_1.Print.underline(a.name.length)), ...repeater.values.map(row => row.map(i => i.value))];
        console.log(chalk_1.default.green(text_transform_1.TextTransform.makeTable(repeaterValueTable, 5)));
    }
    else {
        console.log('[empty]');
    }
    console.log('');
}
function stripOptionalArgs(args) {
    args.forEach(a => a.value = a.value === OPTIONAL_VALUE_STR ? '' : a.value);
    return args;
}
function getAutoCompletePromptChoices(arg) {
    const argChoices = sanitizeInputArgChoices(arg.choices);
    const promptChoices = argChoices.map(c => ({
        name: c.value,
        value: c,
    }));
    if (arg.optional) {
        promptChoices.unshift({ name: 'NONE', value: { value: OPTIONAL_VALUE_STR, description: 'Value is optional' } });
    }
    return promptChoices;
}
//# sourceMappingURL=input-prompts.js.map