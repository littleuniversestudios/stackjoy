"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateTemplate = void 0;
function evaluateTemplate(template) {
    template.elements.forEach(element => {
        evaluateIfAttribute(element);
        evaluateIfExists(element);
        evaluateIfNotExists(element);
        evaluateIgnore(element);
        evaluateTemplate(element);
    });
}
exports.evaluateTemplate = evaluateTemplate;
function evaluateIgnore(templatePart) {
    if (templatePart.attributes['ignore']) {
        templatePart.isHidden = true;
    }
}
function evaluateIfAttribute(templatePart) {
    const ifAttribute = templatePart.attributes['if'];
    if (ifAttribute) {
        let isTrue = true;
        try {
            isTrue = eval(ifAttribute);
        }
        catch (e) {
            throw (`IF statement syntax error: ${ifAttribute}`);
        }
        templatePart.isHidden = !isTrue;
    }
}
function evaluateIfExists(templatePart) {
    const ifExistsValue = templatePart.attributes['ifexists'];
    if (ifExistsValue !== undefined) {
        let isTrue = true;
        try {
            isTrue = !['', null, 'null', 'NULL', undefined, 'undefined'].includes(ifExistsValue);
        }
        catch (e) {
            throw (`IF EXISTS statement syntax error: ${ifExistsValue}`);
        }
        templatePart.isHidden = !isTrue;
    }
}
function evaluateIfNotExists(templatePart) {
    const value = templatePart.attributes['ifnotexists'];
    if (value !== undefined) {
        let isTrue = true;
        try {
            isTrue = ['', null, 'null', 'NULL', undefined, 'undefined'].includes(value);
        }
        catch (e) {
            throw (`IF EXISTS statement syntax error: ${value}`);
        }
        templatePart.isHidden = !isTrue;
    }
}
//# sourceMappingURL=evaluate.template.js.map