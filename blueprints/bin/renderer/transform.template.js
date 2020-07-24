"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTemplate = void 0;
const text_transform_1 = require("../lib/text-transform");
function transformTemplate(template, templateVariables, templateRepeaters, delimiter) {
    template.elements.forEach(element => {
        let allVariables = templateVariables;
        if (element.hasAttribute('repeater')) {
            const repeater = templateRepeaters.find(r => r.name === element.attributes['repeater']);
            allVariables = [...templateVariables, ...repeater.templateVariables];
        }
        element.attributeList.forEach(attribute => element.attributes[attribute] = _replaceText(element.attributes[attribute], allVariables, delimiter));
        element.originalText = _replaceText(element.originalText, allVariables, delimiter);
        transformTemplate(element, allVariables, templateRepeaters, delimiter);
    });
}
exports.transformTemplate = transformTemplate;
function _replaceText(textToReplace, templateVariables, delimiter) {
    return text_transform_1.TextTransform.replaceText(textToReplace, templateVariables, delimiter);
}
//# sourceMappingURL=transform.template.js.map