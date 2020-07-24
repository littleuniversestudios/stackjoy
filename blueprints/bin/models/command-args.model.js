"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandArgs = void 0;
const minimist = require("minimist");
const util_1 = require("../lib/util");
class CommandArgs {
    /**
     * This accepts both string[] and string because passing in the command from the terminal or via a string (chained command)
     * are technically two different things. From the command line process.argv will strip away all quotes so splitting the
     * terminal command on a ' ' (space) doesn't work if there are spaces in the command argument [such as --description="some description"]
     * From the terminal (argv) that becomes --description=some description.
     * So if the command comes from the terminal we accept it as a string[]
     * If the command is from a string we accept it as a string and split it using the splitter below.
     * Note: currently all arguments that contain spaces must be wrapped in double quotes (")...not single quotes  for the splitter to work
     */
    constructor(command) {
        this.args = { arguments: null, templateVariables: null, options: null };
        // this splits the string  on spaces only if it is outside quotes by using a positive
        // lookahead that makes sure there are even number of quotes after a space
        const splitCommand = Array.isArray(command) ? command : command.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
        this.initUserArgs(minimist(splitCommand));
    }
    static getOptionsString(options) {
        const shortCommandFlags = [];
        const longCommandFlags = [];
        for (const input in options) {
            if (options.hasOwnProperty(input)) {
                input.length === 1 ? shortCommandFlags.push(input) : longCommandFlags.push(`--${input}`);
            }
        }
        const shortCommands = shortCommandFlags.length > 0 ? `-${shortCommandFlags.join('')}` : '';
        const longCommands = longCommandFlags.length > 0 ? `${longCommandFlags.join(' ')}` : '';
        return `${shortCommands} ${longCommands}`;
    }
    ;
    initUserArgs(parsedArgs) {
        this.args.arguments = parsedArgs._;
        delete parsedArgs._;
        this.filterCommandLineInputs(parsedArgs);
    }
    ;
    filterCommandLineInputs(inputs) {
        const templateVariables = [];
        const options = {};
        for (const input in inputs) {
            if (typeof inputs[input] === 'boolean') {
                options[input] = !!inputs[input];
                templateVariables.push({ name: input, value: `${options[input]}` });
            }
            else {
                const inputStr = (`${inputs[input] || ''}`).toLowerCase();
                if (inputStr === 'true' || inputStr === 'false') {
                    options[input] = inputStr === 'true';
                    templateVariables.push({ name: input, value: `${options[input]}` });
                }
                else {
                    templateVariables.push({ name: input, value: `${inputs[input]}` });
                }
            }
        }
        this.args.templateVariables = templateVariables;
        this.args.options = options;
    }
    ;
    get commandOptionsString() {
        return CommandArgs.getOptionsString(this.args.options);
    }
    ;
    getTemplateVariable(name) {
        return this.args.templateVariables.find(v => v.name === name);
    }
    get commandName() {
        return this.args.arguments[0];
    }
    ;
    get chainName() {
        return this.sourceTemplateName;
    }
    get numLogEntries() {
        return !isNaN(parseInt(this.args.arguments[1], 10)) ? parseInt(this.args.arguments[1], 10) : undefined;
    }
    get collectionName() {
        return this.args.arguments[1];
    }
    get newTemplateName() {
        return this.args.arguments[2];
    }
    get noLink() {
        return !!this.args.options['noLink'] || this.args.options['links'] === false;
    }
    get noOnSuccess() {
        return !!this.args.options['noOnSuccess'] || this.args.options['onSuccess'] === false;
    }
    get templateVariables() {
        return this.args.templateVariables;
    }
    get options() {
        return this.args.options;
    }
    get isChain() {
        return this.isTemplateOfType('chain');
    }
    get isSnippet() {
        return this.isTemplateOfType('snippet');
    }
    get hasSourceTemplateName() {
        return !!this.args.arguments[1];
    }
    get sourceTemplateName() {
        return this.getItemNameWithoutType(this.args.arguments[1]);
    }
    get isPreviewMode() {
        var _a;
        return ['p', 'preview'].includes(((_a = this.args.arguments[0]) !== null && _a !== void 0 ? _a : '').toLowerCase());
    }
    get isRunByAPI() {
        const runSource = this.getTemplateVariable('runSource');
        return runSource && runSource.value.toLowerCase() === 'api';
    }
    isTemplateOfType(type = '') {
        var _a;
        const templateNameParts = util_1.Util.safeSplit(this.args.arguments[1], ':');
        return templateNameParts && ((_a = templateNameParts[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === type.toLowerCase();
    }
    ;
    setSourceTemplateName(name) {
        this.args.arguments[1] = name;
    }
    setTemplateVariables(name, value) {
        const currentVariable = this.args.templateVariables.find(v => v.name === name);
        currentVariable ? currentVariable.value = value : this.args.templateVariables.push({ name, value });
    }
    getItemNameWithoutType(itemId) {
        const nameParts = util_1.Util.safeSplit(itemId, ':');
        return nameParts ? nameParts[nameParts.length - 1] : itemId;
    }
    getOption(name) {
        return this.args.options[name];
    }
    storeOption(name, value) {
        this.args.options[name] = value;
    }
    storeVariable(name, value) {
        this.templateVariables.push({ name, value });
    }
    /** API Arguments **/
    get APICommand() {
        return this.args.arguments[1];
    }
    get APITemplate() {
        return this.getItemNameWithoutType(this.args.arguments[2]);
    }
    get APIChain() {
        return this.getItemNameWithoutType(this.args.arguments[2]);
    }
    get APIItem() {
        return this.args.arguments[2];
    }
    get APICollection() {
        return this.args.arguments[2];
    }
    get APISeed() {
        return this.args.arguments[2];
    }
}
exports.CommandArgs = CommandArgs;
//# sourceMappingURL=command-args.model.js.map