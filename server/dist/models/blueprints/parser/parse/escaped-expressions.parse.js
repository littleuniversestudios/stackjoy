"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEscapedExpressions = exports.stripEscapedExpressions = void 0;
const tag_model_1 = require("../models/tag.model");
const escapeTag = new tag_model_1.BluTag('^^~', '~^^');
function stripEscapedExpressions(originalText) {
    const regex = /\^\^~[\s\S]*?~\^\^/gi;
    let result;
    let hits = [];
    let escapedText = '';
    let absoluteIndex = 0;
    let escapedExpressions = [];
    while ((result = regex.exec(originalText))) {
        hits.push({ hit: result[0], sanitizedText: stripTag(escapeTag, result[0]), index: result.index, id: rndString() });
    }
    hits.forEach(item => {
        escapedText += originalText.substring(absoluteIndex, item.index);
        escapedText += item.id;
        escapedExpressions.push({ text: item.sanitizedText, id: item.id });
        absoluteIndex = (item.index + item.hit.length);
    });
    escapedText += originalText.substring(absoluteIndex);
    return { escapedText, escapedExpressions };
}
exports.stripEscapedExpressions = stripEscapedExpressions;
function addEscapedExpressions(text, escapedExpressions = []) {
    escapedExpressions.forEach(expression => {
        const regex = new RegExp(expression.id, 'g');
        text = text.replace(regex, expression.text);
    });
    return text;
}
exports.addEscapedExpressions = addEscapedExpressions;
function stripTag(tag, text) {
    return text.substring(tag.start.length, text.length - tag.end.length);
}
function rndString() {
    return (Math.random().toString(16) + "000000000").substr(2, 8);
}
//# sourceMappingURL=escaped-expressions.parse.js.map