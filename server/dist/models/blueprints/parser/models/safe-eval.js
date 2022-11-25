"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeEval = void 0;
const vm = require("vm");
/**
 * There are some vulnerabilities with safe-eval. Look into using vm2 instead of vm to mitigate those risks.
 * Issue: https://github.com/advisories/GHSA-9pcf-h8q9-63f6
 * @param code
 * @param context
 * @param opts
 */
function safeEval(code, context, opts) {
    const sandbox = {};
    const resultKey = 'SAFE_EVAL_' + Math.floor(Math.random() * 1000000);
    sandbox[resultKey] = {};
    const clearContext = `
    (function() {
      Function = undefined;
      const keys = Object.getOwnPropertyNames(this).concat(['constructor']);
      keys.forEach((key) => {
        const item = this[key];
        if (!item || typeof item.constructor !== 'function') return;
        this[key].constructor = undefined;
      });
    })();
  `;
    code = clearContext + resultKey + '=' + code;
    if (context) {
        Object.keys(context).forEach(function (key) {
            sandbox[key] = context[key];
        });
    }
    vm.runInNewContext(code, sandbox, opts);
    return sandbox[resultKey];
}
exports.safeEval = safeEval;
//# sourceMappingURL=safe-eval.js.map