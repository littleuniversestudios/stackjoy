"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExpressions = void 0;
const tag_model_1 = require("../models/tag.model");
const parser_interface_1 = require("../parser.interface");
const parser_1 = require("../parser");
const chunk_model_1 = require("../models/chunk.model");
const expressionTag = new tag_model_1.BluTag('^^', '^^');
function findExpressions(originalText) {
    const regex = /\^\^[\s\S]*?\^\^/gi;
    let result;
    let hits = [];
    let absoluteIndex = 0;
    const chunks = [];
    while ((result = regex.exec(originalText))) {
        hits.push({ hit: result[0], sanitizedText: stripTag(expressionTag, result[0]), index: result.index });
    }
    hits.forEach(item => {
        var _a, _b;
        const plainText = originalText.substring(absoluteIndex, item.index);
        if (plainText.length > 0) {
            chunks.push(new chunk_model_1.Chunk({ originalText: plainText, sanitizedText: plainText }));
        }
        const parseResult = parser_1.parseBLU(item.sanitizedText);
        let error = null;
        if (parseResult.error || !parseResult.ast) {
            let unexpectedValue = ((_b = (_a = parseResult.error) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.value) ? `Unexpected value '${parseResult.error.token.value}'` : '';
            error = {
                type: parser_interface_1.BLUParser.Chunk.ErrorType.Parser,
                message: `Error parsing BLU language syntax. ${unexpectedValue}`,
                badText: item.hit
            };
        }
        chunks.push(new chunk_model_1.ExpressionChunk({ originalText: item.hit, sanitizedText: item.sanitizedText, parseResult, error }));
        absoluteIndex = (item.index + item.hit.length);
    });
    const plainText = originalText.substring(absoluteIndex);
    if (plainText.length > 0) {
        chunks.push(new chunk_model_1.Chunk({ originalText: plainText, sanitizedText: plainText }));
    }
    return chunks;
}
exports.findExpressions = findExpressions;
function stripTag(tag, text) {
    return text.substring(tag.start.length, text.length - tag.end.length);
}
//# sourceMappingURL=expressions.parse.js.map