"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AST = void 0;
const jsonpath = require("jsonpath");
const function_model_1 = require("./function.model");
/**
 * TODO:
 *  => clean up /n with blu blocks
 *  => Appearance Statements
 *      - add these
 *      - can have more than one (unique) appearance statement but no duplicate statements
 */
class AST {
    static evaluateNode(node, context) {
        switch (node.type) {
            case 'identifier':
                return AST.evaluateIdentifier(node, context);
            case 'string':
                return AST.evaluateString(node, context);
            case 'operator':
                return AST.evaluateOperator(node.value, context);
            case 'number':
                return AST.evaluateNumber(node, context);
            case 'boolean':
                return AST.evaluateBoolean(node, context);
            case 'nullElement':
                return AST.evaluateNull(node, context);
            case 'transformation':
                return AST.evaluateTransformation(node, context);
            case 'function':
                return AST.evaluateFunction(node, context);
            case 'statement':
                switch (node.name) {
                    case "if":
                    case "elseIf":
                        return AST.evaluateIfStatement(node, context);
                    case "else":
                        return AST.evaluateElseStatement(node, context);
                    case "forEach":
                        return AST.evaluateForEachStatement(node, context);
                    case "switch":
                    case "switchCase":
                        return AST.evaluateSwitchStatement(node, context);
                    case "switchDefault":
                        return AST.evaluateSwitchDefaultStatement(node, context);
                    default:
                        return { error: { message: `AST statement instruction '${node.name}' not found`, context }, result: null };
                }
            default:
                return { error: { message: `AST instruction '${node.type}' not found`, context }, result: null };
        }
    }
    static handleNegation(value, negate, doubleNegate) {
        if (negate) {
            return !value;
        }
        else if (doubleNegate) {
            return !!value;
        }
        else {
            return value;
        }
    }
    static evaluateIdentifier(node, context) {
        const identifier = node.value;
        let result;
        try {
            result = jsonpath.value(context, `$.inputs.${identifier}`);
        }
        catch (e) {
            // do nothing here, if json path craps out because of a syntax error not much we can do,
            // a bad input identifier is a bad input identifier no matter how you slice it
        }
        const error = result !== undefined ? null : { message: `'${identifier}' not found`, context, type: 'identifierNotFound', suggestedName: identifier };
        return { error, result: AST.handleNegation(result, node.negate, node.doubleNegate) };
    }
    static evaluateString(node, context) {
        return { error: null, result: AST.handleNegation(`${node.value}`, node.negate, node.doubleNegate) };
    }
    static evaluateOperator(value, context) {
        return AST.evaluateString(value, context);
    }
    static evaluateBoolean(node, context) {
        return { error: null, result: AST.handleNegation(node.value, node.negate, node.doubleNegate) };
    }
    static evaluateNull(node, context) {
        return { error: null, result: AST.handleNegation(node.value, node.negate, node.doubleNegate) };
    }
    static evaluateNumber(node, context) {
        return { error: null, result: AST.handleNegation(parseFloat(`${node.value}`), node.negate, node.doubleNegate) };
    }
    static getFunction(name, context) {
        var _a, _b;
        const allFunctions = (_a = context === null || context === void 0 ? void 0 : context.functions) !== null && _a !== void 0 ? _a : [];
        const funcObj = allFunctions.find(f => f.name === name);
        const result = (_b = funcObj === null || funcObj === void 0 ? void 0 : funcObj.execFunc) !== null && _b !== void 0 ? _b : null;
        const error = !!result ? null : { message: `function '${name}' not found`, context, type: 'functionNotFound', suggestedName: name };
        return { error, result, funcObj };
    }
    static evaluateTransformation(node, context) {
        const functionName = node.function.name;
        const nodeResponse = AST.evaluateNode(node.property, context);
        if (nodeResponse.error) {
            return { error: nodeResponse.error, result: nodeResponse.result };
        }
        let getFuncResponse = AST.getFunction(functionName, context);
        if (getFuncResponse.error) {
            return { error: getFuncResponse.error, result: getFuncResponse.result };
        }
        let execFuncResponse = AST.executeFunction(getFuncResponse.result, [nodeResponse.result], getFuncResponse.funcObj, context);
        if (execFuncResponse.error) {
            return { error: execFuncResponse.error, result: execFuncResponse.result };
        }
        return { error: null, result: AST.handleNegation(execFuncResponse.result, node.negate, node.doubleNegate) };
    }
    static evaluateFunction(node, context) {
        var _a;
        const functionName = node.name;
        let getFuncResponse = AST.getFunction(functionName, context);
        if (getFuncResponse.error) {
            return { error: getFuncResponse.error, result: getFuncResponse.result };
        }
        const args = [];
        let argError;
        ((_a = node === null || node === void 0 ? void 0 : node.args) !== null && _a !== void 0 ? _a : []).forEach(arg => {
            const nodeResponse = AST.evaluateNode(arg, context);
            if (nodeResponse.error) {
                argError = { error: nodeResponse.error, result: nodeResponse.result };
            }
            else {
                args.push(nodeResponse.result);
            }
        });
        if (argError) {
            return argError;
        }
        let execFuncResponse = AST.executeFunction(getFuncResponse.result, args, getFuncResponse.funcObj, context);
        if (execFuncResponse.error) {
            return { error: execFuncResponse.error, result: execFuncResponse.result };
        }
        return { error: null, result: AST.handleNegation(execFuncResponse.result, node.negate, node.doubleNegate) };
    }
    static evaluateElseStatement(node, context) {
        return { error: null, result: true };
    }
    static evaluateIfStatement(node, context) {
        var _a;
        let currentState = true;
        let currentLogicalOperator = '&&';
        let error = null;
        const conditions = (_a = node === null || node === void 0 ? void 0 : node.conditions) !== null && _a !== void 0 ? _a : [];
        conditions.forEach(item => {
            if (error) {
                currentState = false;
            }
            else {
                if (item.type === 'conditionalStatement') {
                    const condition1Response = item.condition1 ? AST.evaluateNode(item.condition1, context) : null;
                    const condition2Response = item.condition2 ? AST.evaluateNode(item.condition2, context) : null;
                    const conditionalOperator = item.operator;
                    if (condition1Response === null || condition1Response === void 0 ? void 0 : condition1Response.error) {
                        error = condition1Response.error;
                    }
                    else if (condition2Response === null || condition2Response === void 0 ? void 0 : condition2Response.error) {
                        error = condition2Response.error;
                    }
                    else {
                        // evaluate the conditional statement: 5 < 10, "a" === "b"
                        const conditionState = AST.evaluateConditions(condition1Response === null || condition1Response === void 0 ? void 0 : condition1Response.result, conditionalOperator, condition2Response === null || condition2Response === void 0 ? void 0 : condition2Response.result);
                        // evaluate the logical statement: currentState || conditionState, currentState && conditionState
                        currentState = AST.evaluateConditions(currentState, currentLogicalOperator, conditionState);
                    }
                }
                if (item.type === 'logicalOperator') {
                    currentLogicalOperator = item.value;
                }
            }
        });
        return { error, result: !!currentState };
    }
    static evaluateConditions(condition1, operator, condition2) {
        // "===" , "==" , ">" , "<" , ">=" , "<=" , "!==","!=", "&&", "||"
        switch (operator) {
            case '===':
                return condition1 === condition2;
            case '==':
                return condition1 == condition2;
            case '>':
                return condition1 > condition2;
            case '>=':
                return condition1 >= condition2;
            case '<':
                return condition1 < condition2;
            case '<=':
                return condition1 <= condition2;
            case '!=':
                return condition1 != condition2;
            case '!==':
                return condition1 !== condition2;
            case '||':
                return condition1 || condition2;
            case '&&':
                return condition1 && condition2;
            default:
                // there was no operator so it was only a single condition statement
                // in this case just return the truthy representation of condition1
                return !!condition1;
        }
    }
    static evaluateForEachStatement(node, context) {
        const key = node.property.value;
        const operator = node.operator.value;
        const nodeResponse = AST.evaluateNode(node.value, context);
        if (nodeResponse.error) {
            return { error: nodeResponse.error, result: null };
        }
        let itemToIterate = nodeResponse.result;
        if (!Array.isArray(itemToIterate)) {
            // try turning the item into an array
            try {
                itemToIterate = itemToIterate.split(',');
            }
            catch (error) {
                return { error: { message: `${node.value.value} is not an array`, context }, result: null };
            }
        }
        return { error: null, result: { key, operator, itemToIterate, indexName: node.indexName } };
    }
    static evaluateSwitchStatement(node, context) {
        return AST.evaluateNode(node.identifier, context);
    }
    static evaluateSwitchDefaultStatement(node, context) {
        return { error: null, result: true };
    }
    static executeFunction(funcString, args, funcObj, context) {
        const executableFunction = new function_model_1.ExecutableFunction(funcString);
        if (executableFunction.error) {
            const error = { message: `Error executing function: '${funcObj.name}'. ${executableFunction.errorMessage}`, error: executableFunction.error, context, args, type: 'functionError' };
            return { error, result: null };
        }
        else {
            try {
                const result = executableFunction.func(...args);
                return { error: null, result };
            }
            catch (e) {
                const error = { message: `Error executing function: '${funcObj.name}'`, error: e.toString(), context, args, funcObj, type: 'functionError' };
                return { error, result: null };
            }
        }
    }
}
exports.AST = AST;
//# sourceMappingURL=ast.model.js.map