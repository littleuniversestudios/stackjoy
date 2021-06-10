"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractChunks = exports.renderText = void 0;
const chunk_model_1 = require("../models/chunk.model");
const expressions_parse_1 = require("./expressions.parse");
const comments_parse_1 = require("./comments.parse");
const escaped_expressions_parse_1 = require("./escaped-expressions.parse");
const blu_block_parse_1 = require("./blu-block.parse");
const tag_model_1 = require("../models/tag.model");
const template_ast_model_1 = require("../models/template-ast.model");
const blockTag = new tag_model_1.BluTag('[blu', '[/blu]');
/**
 * 1) strip comments
 * 2) strip escaped expression
 * 3) chunk the text into expressions and blu-blu blocks
 * 4) check for errors along the way
 * 5) put the escaped expressions back in
 * 6) return errors and rendered text
 *
 * @param originalText
 * @param context
 *
 */
function renderText(originalText, context) {
    originalText = originalText !== null && originalText !== void 0 ? originalText : '';
    const { escapedText, escapedExpressions } = preProcess(originalText);
    const children = extractChunks(escapedText);
    const headChunk = new chunk_model_1.Chunk({ children: children });
    const templateAST = new template_ast_model_1.TemplateAST(originalText, headChunk);
    let renderedText = escapedText;
    let errors = null;
    if (templateAST.hasErrors) {
        errors = templateAST.errors;
    }
    else {
        // once all the ast nodes have been parsed, check for the validity of every node
        // nodes such as if statements must be in correct order
        // nodes such as switch statements must be inside a switch block
        // validating the entire template AST checks for such errors
        templateAST.validate();
        if (templateAST.hasErrors) {
            errors = templateAST.errors;
        }
        else {
            let renderedASTText = templateAST.render(context);
            if (templateAST.hasErrors) {
                errors = templateAST.errors;
            }
            else {
                renderedText = escaped_expressions_parse_1.addEscapedExpressions(renderedASTText, escapedExpressions);
            }
        }
    }
    return { errors, renderedText };
}
exports.renderText = renderText;
function preProcess(originalText) {
    let strippedText = comments_parse_1.stripComments(originalText);
    return escaped_expressions_parse_1.stripEscapedExpressions(strippedText);
}
/**
 * 1) Look for first [blu][/blu] blocks
 * 2) once found take everything before the [blu] block and look for expressions
 * 3) strip the [blu if()...] block commands, parse them
 * 4) take the blu block comments and recursively go to step 1)
 * --> this will give a nested list of chunks then can then be used to stitch a rendered template together
 *
 * @param text
 *
 */
function extractChunks(text) {
    let bluBlockIndex = 0;
    let chunks = [];
    while (bluBlockIndex !== -1) {
        bluBlockIndex = text.indexOf(blockTag.start.str);
        if (bluBlockIndex !== -1) {
            const textBeforeBluBlock = text.substring(0, bluBlockIndex);
            chunks.push(...expressions_parse_1.findExpressions(textBeforeBluBlock));
            const textAfterBluBlock = text.substring(bluBlockIndex);
            const { error, endIndex } = blu_block_parse_1.findClosingTagIndex(textAfterBluBlock, blockTag);
            const bluBlockText = textAfterBluBlock.substring(0, endIndex);
            if (error) {
                chunks.push(new chunk_model_1.BluBlockChunk({ originalText: bluBlockText, error }));
                bluBlockIndex = -1;
            }
            else {
                chunks.push(blu_block_parse_1.decomposeBluBlock(bluBlockText));
                text = textAfterBluBlock.substring(endIndex);
            }
        }
        else {
            chunks.push(...expressions_parse_1.findExpressions(text));
        }
    }
    return chunks;
}
exports.extractChunks = extractChunks;
//# sourceMappingURL=start.parse.js.map