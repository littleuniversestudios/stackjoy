"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutableFunction = void 0;
const changeCase = require("change-case");
const path = require("path");
EvalScope.prototype.changeCase = changeCase;
EvalScope.prototype.path = path;
function EvalScope() {
    "use strict";
    this.eval = function (s) {
        return eval(s);
    };
}
class ExecutableFunction {
    constructor(funcString) {
        this.funcString = funcString;
        this.evaluateFunc();
    }
    evaluateFunc() {
        const scope = new EvalScope();
        try {
            const func = scope.eval(this.funcString);
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
            this.error = e;
        }
    }
}
exports.ExecutableFunction = ExecutableFunction;
//# sourceMappingURL=function.model.js.map