"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatePart = void 0;
class TemplatePart {
    constructor(originalText, attributes = {}, isBlu = false, hasEOL = false, spacer = 0) {
        this.originalText = originalText;
        this.attributes = attributes;
        this.isBlu = isBlu;
        this.hasEOL = hasEOL;
        this.spacer = spacer;
        this.elements = [];
        this.isHidden = false;
    }
    addText(text) {
        if (text) {
            this.addElement(new TemplatePart(text));
        }
    }
    addPart(templatePart) {
        this.addElement(templatePart);
    }
    addElement(newElement) {
        this.elements.push(newElement);
    }
    hasAttribute(attribute) {
        return this.attributeList.includes(attribute);
    }
    get attributeList() {
        return Object.keys(this.attributes);
    }
    render() {
        return this.isHidden ? '' : this.elements.length === 0 ? this.originalText : this.elements.map(el => el.render()).join('');
    }
}
exports.TemplatePart = TemplatePart;
//# sourceMappingURL=template-part.model.js.map