"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionChunk = exports.BluBlockChunk = exports.Chunk = void 0;
const parser_interface_1 = require("../parser.interface");
const ast_model_1 = require("./ast.model");
class Chunk {
    constructor(properties) {
        this.properties = Object.assign({}, {
            type: parser_interface_1.BLUParser.Chunk.Type.PlainText,
            originalText: '',
            sanitizedText: '',
            parseResult: null,
            error: null,
            children: [],
        }, properties);
        this.properties.children.forEach(child => child.parent = this);
        this.state = this.getCleanState();
    }
    evaluate(context, state = this.state) {
        let renderedText = this.properties.originalText;
        this.children.forEach(child => renderedText += child.evaluate(context, state));
        return renderedText;
    }
    get hasChildren() {
        return this.properties.children.length > 0;
    }
    get hasError() {
        return !!this.properties.error;
    }
    get hasErrors() {
        let hasError = this.hasError;
        this.children.forEach(child => hasError = hasError || child.hasErrors);
        return hasError;
    }
    get errors() {
        const errors = !!this.properties.error ? [this.properties.error] : [];
        this.children.forEach(child => child.hasErrors ? errors.push(...child.errors) : null);
        return errors;
    }
    get children() {
        return this.properties.children;
    }
    isType(type) {
        return this.properties.type === type;
    }
    get ast() {
        var _a, _b;
        return (_b = (_a = this.properties.parseResult) === null || _a === void 0 ? void 0 : _a.ast) !== null && _b !== void 0 ? _b : [];
    }
    evaluateASTNode(node, context, badTextToStore = 'original') {
        let error;
        let result;
        if (!!node) {
            const nodeResponse = ast_model_1.AST.evaluateNode(node, context);
            error = nodeResponse.error;
            result = nodeResponse.result;
        }
        else {
            error = {
                message: 'Error parsing BLU language syntax'
            };
        }
        if (error) {
            this.properties.error = {
                type: parser_interface_1.BLUParser.Chunk.ErrorType.Context,
                badText: badTextToStore === 'original' ? this.properties.originalText : this.properties.sanitizedText,
                message: error.message,
                syntaxError: error
            };
        }
        return { error, result };
    }
    getPreviousSiblingByType(chunk, type) {
        const index = this.parent.children.findIndex(c => c === chunk);
        return this.parent.children.slice(0, Math.max(0, index - 1)).reverse().find(c => c.isType(type));
    }
    getNextSiblingByType(chunk, type) {
        const index = this.parent.children.findIndex(c => c === chunk);
        return this.parent.children.slice(Math.min(this.parent.children.length, index + 1)).find(c => c.isType(type));
    }
    getPreviousSibling(chunk) {
        const index = this.parent.children.findIndex(c => c === chunk);
        return this.parent.children[index - 1];
    }
    getNextSibling(chunk) {
        const index = this.parent.children.findIndex(c => c === chunk);
        return this.parent.children[index + 1];
    }
    hasASTNodeByName(name) {
        return !!this.ast.find(node => node.name === name);
    }
    validate() {
        this.validateChunk();
        this.children.forEach(child => child.validate());
    }
    validateChunk() {
    }
    getCleanState() {
        return {
            ifStatementResolved: false,
            switchStatementResolved: false,
            switchStatementValue: undefined
        };
    }
}
exports.Chunk = Chunk;
class BluBlockChunk extends Chunk {
    constructor(properties) {
        properties.type = parser_interface_1.BLUParser.Chunk.Type.BluBlock;
        super(properties);
    }
    evaluate(context, state = this.state) {
        let renderedText = '';
        if (this.ast.length === 0) {
            // blu block [blu] [/blu] w/no statements present so we just render the children
            this.children.forEach(chunk => renderedText += chunk.evaluate(context, state));
        }
        else {
            this.ast.forEach(node => {
                const { result } = this.evaluateASTNode(node, context, 'sanitized');
                switch (node.name) {
                    case 'if':
                        state.ifStatementResolved = false;
                    case 'elseIf':
                    case 'else':
                        if (result && !state.ifStatementResolved) {
                            state.ifStatementResolved = true;
                            const cleanState = this.getCleanState();
                            this.children.forEach(chunk => {
                                renderedText += chunk.evaluate(context, cleanState);
                            });
                        }
                        break;
                    case 'forEach':
                        if (result) {
                            result.itemToIterate.forEach((value, index) => {
                                const cleanState = this.getCleanState();
                                context.inputs[result.key] = value;
                                context.inputs[result.indexName] = index;
                                this.children.forEach(chunk => renderedText += chunk.evaluate(context, cleanState));
                            });
                        }
                        break;
                    case 'switch':
                        const cleanState = this.getCleanState();
                        cleanState.switchStatementValue = result;
                        this.children.forEach(chunk => renderedText += chunk.evaluate(context, cleanState));
                        break;
                    case 'switchCase':
                        if (state.switchStatementValue === result) {
                            state.switchStatementResolved = true;
                            const cleanState = this.getCleanState();
                            this.children.forEach(chunk => renderedText += chunk.evaluate(context, cleanState));
                        }
                        break;
                    case 'switchDefault':
                        if (!state.switchStatementResolved) {
                            const cleanState = this.getCleanState();
                            this.children.forEach(chunk => renderedText += chunk.evaluate(context, cleanState));
                        }
                        break;
                }
            });
        }
        return renderedText;
    }
    validateChunk() {
        const ast = this.properties.parseResult.ast;
        ast.forEach(node => {
            var _a;
            const nodeName = node.name;
            switch (nodeName) {
                case 'elseIf':
                case 'else':
                    const sibling = this.getPreviousSiblingByType(this, this.properties.type);
                    if (!((sibling === null || sibling === void 0 ? void 0 : sibling.hasASTNodeByName('elseIf')) || (sibling === null || sibling === void 0 ? void 0 : sibling.hasASTNodeByName('if')))) {
                        this.properties.error = {
                            type: parser_interface_1.BLUParser.Chunk.ErrorType.Parser,
                            badText: this.properties.sanitizedText,
                            message: `'${nodeName}' block must be preceded by an 'if' block or an 'elseIf' block.`
                        };
                    }
                    break;
                case 'switchCase':
                case 'switchDefault':
                    if (!((_a = this.parent) === null || _a === void 0 ? void 0 : _a.hasASTNodeByName('switch'))) {
                        this.properties.error = {
                            type: parser_interface_1.BLUParser.Chunk.ErrorType.Parser,
                            badText: this.properties.sanitizedText,
                            message: `'${nodeName}' block must be inside of a 'switch' block`
                        };
                    }
                    break;
            }
        });
    }
}
exports.BluBlockChunk = BluBlockChunk;
class ExpressionChunk extends Chunk {
    constructor(properties) {
        properties.type = parser_interface_1.BLUParser.Chunk.Type.Expression;
        super(properties);
    }
    evaluate(context) {
        const ast = this.properties.parseResult.ast;
        const { error, result } = this.evaluateASTNode(ast[0], context);
        return !!error ? '' : result;
    }
}
exports.ExpressionChunk = ExpressionChunk;
//# sourceMappingURL=chunk.model.js.map