"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRepeater = void 0;
const os_1 = require("os");
const text_transform_1 = require("../lib/text-transform");
class TemplateRepeater {
    constructor(inputRepeater, delimiter) {
        this.inputRepeater = inputRepeater;
        this.delimiter = delimiter;
        this.templateVariables = [];
        this.isEmpty = false;
        this.setTemplateVariables();
    }
    static printValue(inputRepeater) {
        return inputRepeater.values.map(i => i.map(iArg => iArg.value).join(',')).join('|');
    }
    static toArg(inputRepeater) {
        return `--${inputRepeater.name}="${TemplateRepeater.printValue(inputRepeater)}"`;
    }
    get name() {
        return this.inputRepeater.name;
    }
    get inputArgs() {
        return this.inputRepeater.args;
    }
    get values() {
        return this.inputRepeater.values;
    }
    toString() {
        return TemplateRepeater.printValue(this.inputRepeater);
    }
    toArg() {
        return TemplateRepeater.toArg(this.inputRepeater);
    }
    parseText(text, spacer, joiner = os_1.EOL) {
        const parsedText = [];
        this.inputRepeater.values.forEach((inputArgs, index) => {
            let templateText = text;
            inputArgs.forEach(inputArg => {
                templateText = text_transform_1.TextTransform.strReplace(templateText, `${this.delimiter.start}${inputArg.name}`, `${this.delimiter.start}${inputArg.name}.${index}`);
            });
            parsedText.push(`${index > 0 ? ' '.repeat(spacer) : ''}${templateText}`);
        });
        return parsedText.join(joiner);
    }
    setTemplateVariables() {
        this.inputRepeater.values.forEach((inputArgs, index) => {
            inputArgs.forEach(arg => {
                const name = `${arg.name}.${index}`;
                const currentVariable = this.templateVariables.find(v => v.name === name);
                currentVariable ? currentVariable.value = arg.value : this.templateVariables.push({ name, value: arg.value });
            });
        });
    }
}
exports.TemplateRepeater = TemplateRepeater;
//# sourceMappingURL=template-repeater.model.js.map