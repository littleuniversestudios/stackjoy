"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateTemplate = void 0;
function evaluateTemplate(template) {
    template.elements.forEach(element => {
        evaluateIfAttribute(element);
        evaluateIfExists(element);
        evaluateIfNotExists(element);
        evaluateIfTrue(element);
        evaluateIfFalse(element);
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
        let exists = true;
        try {
            exists = !['', null, 'null', 'NULL', undefined, 'undefined'].includes(ifExistsValue);
        }
        catch (e) {
            throw (`IF EXISTS statement syntax error: ${ifExistsValue}`);
        }
        templatePart.isHidden = !exists;
    }
}
function evaluateIfNotExists(templatePart) {
    const value = templatePart.attributes['ifnotexists'];
    if (value !== undefined) {
        let exists = true;
        try {
            exists = ['', null, 'null', 'NULL', undefined, 'undefined'].includes(value);
        }
        catch (e) {
            throw (`IF EXISTS statement syntax error: ${value}`);
        }
        templatePart.isHidden = !exists;
    }
}
function evaluateIfTrue(templatePart) {
    const ifExistsValue = templatePart.attributes['iftrue'];
    if (ifExistsValue !== undefined) {
        let isTrue = false;
        try {
            isTrue = ['true', true].includes(ifExistsValue);
        }
        catch (e) {
            throw (`IF TRUE statement syntax error: ${ifExistsValue}`);
        }
        templatePart.isHidden = !isTrue;
    }
}
function evaluateIfFalse(templatePart) {
    const value = templatePart.attributes['iffalse'];
    if (value !== undefined) {
        let isFalse = false;
        try {
            isFalse = ['false', false].includes(value);
        }
        catch (e) {
            throw (`IF FALSE statement syntax error: ${value}`);
        }
        templatePart.isHidden = !isFalse;
    }
}
//# sourceMappingURL=evaluate.template.js.map