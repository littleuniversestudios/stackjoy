"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decomposeBluBlock = exports.findClosingTagIndex = void 0;
const parser_interface_1 = require("../parser.interface");
const chunk_model_1 = require("../models/chunk.model");
const parser_1 = require("../parser");
const tag_model_1 = require("../models/tag.model");
const start_parse_1 = require("./start.parse");
const blockTag = new tag_model_1.BluTag('[blu', '[/blu]');
/**
 * Find the closing element index ie.
 * [blu] some text [blu] some other text [/blu] [/blu] text after
 *                                                   ^- fill find the proper closing tag index
 * of the closing tag (in nested elements as well) or it wll throw an error
 * @param text text to be searched
 * @param tag  element to find
 */
function findClosingTagIndex(text, tag) {
    const originalText = text;
    const regExp = RegExp(sanitizeRegExp(tag.start.str), "g");
    let closingTagCount = 0;
    let openingTagCount = null;
    let endIndex = text.indexOf(tag.end.str);
    let tagText = '';
    let error = null;
    while (openingTagCount !== closingTagCount && endIndex !== -1) {
        tagText += text.substring(0, endIndex + tag.end.length);
        openingTagCount = (tagText.match(regExp) || []).length;
        text = text.substring(endIndex + tag.end.length);
        endIndex = text.indexOf(tag.end.str);
        closingTagCount++;
    }
    if (openingTagCount !== closingTagCount) {
        error = {
            type: parser_interface_1.BLUParser.Chunk.ErrorType.Tokenizer,
            message: `Parse Error. No closing tag ${tag.end.str} found.`,
            badText: originalText.substring(0, 20)
        };
    }
    return { error, endIndex: tagText.length };
}
exports.findClosingTagIndex = findClosingTagIndex;
function sanitizeRegExp(str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
function decomposeBluBlock(text) {
    var _a, _b;
    const originalText = text;
    text = text.substring(0, text.lastIndexOf(blockTag.end.str)); // strip ending tag: [/blu]
    const tagChars = text.split('');
    let endIndex = -1;
    let inQuotes = false;
    let index = 0;
    let error = null;
    let chunk;
    while (endIndex === -1 && index < tagChars.length) {
        if (tagChars[index] === ']' && !inQuotes)
            endIndex = index;
        if (tagChars[index] === '"')
            inQuotes = !inQuotes;
        index++;
    }
    if (endIndex == -1) {
        error = {
            type: parser_interface_1.BLUParser.Chunk.ErrorType.Parser,
            message: `Malformed [blu] block. Missing ending ']'`,
            badText: originalText.substring(0, 30)
        };
        chunk = new chunk_model_1.BluBlockChunk({ originalText: text, error });
    }
    else {
        let blockStatements = text.substring(blockTag.start.length, endIndex).trim();
        let contents = leftTrim(text.substring(endIndex + 1));
        const children = start_parse_1.extractChunks(contents);
        const parseResult = parser_1.parseBLU(blockStatements);
        if (parseResult.error || !parseResult.ast) {
            let unexpectedValue = ((_b = (_a = parseResult.error) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.value) ? `Unexpected value '${parseResult.error.token.value}'` : '';
            error = {
                type: parser_interface_1.BLUParser.Chunk.ErrorType.Parser,
                message: `Error parsing BLU language syntax. ${unexpectedValue}`,
                badText: originalText.substring(0, 30)
            };
        }
        else {
            const structuralNodes = parseResult.ast.filter(node => node.category === 'structural').length;
            if (structuralNodes > 1) {
                error = {
                    type: parser_interface_1.BLUParser.Chunk.ErrorType.Parser,
                    message: `Only one structural statement allowed per block. Only one of [if, elseIf, else, forEach] allowed.`,
                    badText: originalText.substring(0, 30)
                };
            }
        }
        chunk = new chunk_model_1.BluBlockChunk({ originalText: `${text}${blockTag.end.str}`, sanitizedText: blockStatements, parseResult, children, error });
    }
    return chunk;
}
exports.decomposeBluBlock = decomposeBluBlock;
function leftTrim(str) {
    return str.replace(/^\s+/, "");
}
//# sourceMappingURL=blu-block.parse.js.map