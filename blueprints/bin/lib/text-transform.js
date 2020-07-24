"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTransform = void 0;
const template_variable_formats_1 = require("./template-variable-formats");
class TextTransform {
}
exports.TextTransform = TextTransform;
TextTransform.replaceText = (textToReplace, textReplacements, delimiter) => {
    textReplacements.forEach(textReplacement => {
        template_variable_formats_1.variableFormatList.forEach(caseFormat => {
            const delimitedTextReplacement = getTemplateDelimitedString(textReplacement.name, caseFormat.name, delimiter);
            const regex = new RegExp(TextTransform.escapeRegExp(delimitedTextReplacement), 'g');
            textToReplace = textToReplace.replace(regex, caseFormat.format(textReplacement.value));
        });
    });
    return textToReplace;
};
TextTransform.escapeRegExp = (s) => {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
TextTransform.padText = (text, length, ellipsisText = '...') => {
    return text.length > length ? TextTransform.ellipsis(text, length, ellipsisText) : text.padEnd(length);
};
TextTransform.ellipsis = (text, length, ellipsisText = '...') => {
    return text.length > length ? `${text.substring(0, length - ellipsisText.length)}${ellipsisText}` : text;
};
TextTransform.trimTrailingSlash = (str) => str.replace(/\/$/, '');
TextTransform.capitalizeText = (text) => text ? text.replace(text[0], text[0].toUpperCase()) : text;
TextTransform.makeTable = (grid, paddingSpaces = 2) => {
    const colWidths = new Array(grid[0].length).fill(-Infinity);
    grid.forEach(rows => rows.forEach((column, index) => colWidths[index] = Math.max(colWidths[index], column.length)));
    const formattedGrid = grid.map(row => row.map((col, index) => TextTransform.padText(col, colWidths[index])));
    const strGrid = formattedGrid.map(row => row.join(' '.repeat(paddingSpaces)));
    return strGrid.join('\n');
};
TextTransform.extractTextBetweenIndices = (text, start, end) => {
    return text.substring(start, end);
};
TextTransform.replaceTextBetweenIndices = (text, replacementText, start, end) => {
    return text.substring(0, start) + replacementText + text.substring(end);
};
TextTransform.strReplace = (text, strToReplace, replaceWith) => text.replace(new RegExp(strToReplace, 'g'), replaceWith);
TextTransform.getLocationBetweenStrings = (text, startStr, endStr) => {
    let endIndex = text.indexOf(endStr);
    endIndex = endIndex === -1 ? endIndex : endIndex + endStr.length;
    return { start: text.indexOf(startStr), end: endIndex };
};
function getTemplateDelimitedString(key, caseFormatName = null, delimiter) {
    const startDelimiter = delimiter.start;
    const endDelimiter = delimiter.end;
    const caseFormatString = caseFormatName ? `.${caseFormatName}` : ``;
    return `${startDelimiter}${key}${caseFormatString}${endDelimiter}`;
}
//# sourceMappingURL=text-transform.js.map