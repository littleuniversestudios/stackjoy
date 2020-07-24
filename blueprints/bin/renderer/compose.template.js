"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeTemplate = void 0;
const os_1 = require("os");
const parse_template_1 = require("./parse.template");
function composeTemplate(template, templateRepeaters) {
    template.elements.forEach((element, index) => {
        element = composeSpaces(element);
        element = composeRepeaters(element, templateRepeaters);
        template.elements[index] = element;
        composeTemplate(element, templateRepeaters);
    });
}
exports.composeTemplate = composeTemplate;
function composeRepeaters(templatePart, templateRepeaters) {
    if (templatePart.hasAttribute('repeater')) {
        const repeaterName = templatePart.attributes['repeater'];
        const repeater = templateRepeaters.find(repeater => repeater.name === repeaterName);
        if (repeater) {
            const joiner = templatePart.hasAttribute('inline') ? '' : os_1.EOL;
            templatePart.originalText = repeater.parseText(templatePart.originalText, templatePart.spacer, joiner);
            templatePart = parse_template_1.parseTemplate(templatePart.originalText, templatePart.attributes, templatePart.isBlu, templatePart.hasEOL);
        }
        else {
            throw (`Repeater ${repeaterName} not found for this template`);
        }
    }
    return templatePart;
}
function composeSpaces(templatePart) {
    if (templatePart.hasAttribute('spaces')) {
        const spaces = parseInt(templatePart.attributes['spaces'] || '0');
        templatePart.originalText = `${' '.repeat(spaces)}${templatePart.originalText}`;
        templatePart = parse_template_1.parseTemplate(templatePart.originalText, templatePart.attributes, templatePart.isBlu, templatePart.hasEOL);
    }
    return templatePart;
}
//# sourceMappingURL=compose.template.js.map