"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateAST = void 0;
/**
 * Collection of all chunks of the original text. Splits the original text into chunks by parsing the text,
 * checks for errors, and renders all chunks into a final rendered text.
 */
class TemplateAST {
    constructor(originalText, headChunk) {
        this.originalText = originalText;
        this.headChunk = headChunk;
    }
    get hasErrors() {
        return this.headChunk.hasErrors;
    }
    get errors() {
        const errors = [];
        const chunkErrors = this.headChunk.errors;
        chunkErrors.forEach(error => {
            const index = this.originalText.indexOf(error.badText);
            errors.push(Object.assign({}, error, { index }));
        });
        return errors;
    }
    validate() {
        this.headChunk.validate();
    }
    render(context) {
        let renderedText = '';
        renderedText += this.headChunk.evaluate(context);
        return renderedText;
    }
}
exports.TemplateAST = TemplateAST;
//# sourceMappingURL=template-ast.model.js.map