"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripComments = void 0;
const os_1 = require("os");
function stripComments(originalText) {
    const regex = /\^\^![\s\S]*?!\^\^/gi;
    let result;
    let hits = [];
    let strippedText = '';
    let absoluteIndex = 0;
    while ((result = regex.exec(originalText))) {
        hits.push({ hit: result[0], index: result.index });
    }
    hits.forEach(item => {
        const { startIndex, endIndex } = trueIndex(item, originalText);
        strippedText += originalText.substring(absoluteIndex, startIndex);
        absoluteIndex = endIndex;
    });
    strippedText += originalText.substring(absoluteIndex);
    return strippedText;
}
exports.stripComments = stripComments;
/**
 * Figure out if the comment is on its own line or embedded in other text
 *   case 1)
 *   a
 *      ^^!comment!^^
 *   b
 *   =>:
 *   a
 *   b
 *
 *   case 2)
 *   a ^^!comment!^^ b => a  b
 *
 *   case 3)
 *
 *   a ^^!comment!^^
 *   b
 *   =>
 *   a
 *   b
 *
 *   case 4)
 *   a
 *      ^^!comment!^^ cc
 *   b
 *   =>
 *   a
 *      cc
 *   b
 *
 * @param item
 * @param originalText
 */
function trueIndex(item, originalText) {
    let startIndex = item.index;
    let endIndex = item.index + item.hit.length;
    let emptyBefore, emptyAfter = false;
    const textAfter = originalText.substring(endIndex);
    const textBefore = originalText.substring(0, item.index);
    const previousEOLIndex = textBefore.lastIndexOf(os_1.EOL) + 1;
    const nextEOLIndex = textAfter.indexOf(os_1.EOL);
    if (nextEOLIndex !== -1) {
        const nextEOLText = originalText.substring(endIndex, (endIndex + nextEOLIndex)).trim();
        if (nextEOLText === '') {
            endIndex = (endIndex + nextEOLIndex);
            emptyAfter = true;
        }
    }
    if (emptyAfter && previousEOLIndex > 0) {
        const previousEOLText = originalText.substring(previousEOLIndex, item.index).trim();
        if (previousEOLText === '') {
            startIndex = previousEOLIndex;
            emptyBefore = true;
        }
    }
    return { startIndex, endIndex: emptyBefore ? endIndex + 1 : endIndex };
}
//# sourceMappingURL=comments.parse.js.map