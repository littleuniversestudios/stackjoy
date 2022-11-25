"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutableFunction = void 0;
const changeCase = require("change-case");
const path = require("path");
const safe_eval_1 = require("./safe-eval");
class ExecutableFunction {
    constructor(funcString) {
        this.funcString = funcString;
        this.evaluateFunc();
    }
    evaluateFunc() {
        try {
            const func = (0, safe_eval_1.safeEval)(this.funcString, { changeCase, path });
            if (typeof func === 'function') {
                this.func = func;
            }
            else {
                this.errorMessage = 'It is not a function.';
                this.error = 'Must be a function.';
            }
        }
        catch (e) {
            this.errorMessage = 'Invalid syntax';
            this.error = e.toString() + e.stack.toString().substr(0, e.stack.toString().indexOf('^^'));
        }
    }
}
exports.ExecutableFunction = ExecutableFunction;
//# sourceMappingURL=function.model.js.map