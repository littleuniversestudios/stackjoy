"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateDoc = void 0;
const parse_template_1 = require("../parse.template");
const evaluate_template_1 = require("../evaluate.template");
const compose_template_1 = require("../compose.template");
const transform_template_1 = require("../transform.template");
/**
 * Four stages of template
 * 1) parse template
 * 2) compose template [this is where the repeaters, spaces... are extrapolated]
 * 3) transform template [change template variables to user values]
 * 4) evaluate template [if statements, ignores]
 * 5) render template [put the evaluated template back together]
 */
class TemplateDoc {
    constructor(text, templateVariables, templateRepeaters, fileConfig, templatePath) {
        this.text = text;
        this.templateVariables = templateVariables;
        this.templateRepeaters = templateRepeaters;
        this.fileConfig = fileConfig;
        this.templatePath = templatePath;
        this.doc = null;
        this.parseDoc();
    }
    parseDoc() {
        parse_template_1.setParseTemplateSourcePath(this.templatePath);
        this.doc = parse_template_1.parseTemplate(this.text);
        compose_template_1.composeTemplate(this.doc, this.templateRepeaters);
        transform_template_1.transformTemplate(this.doc, this.templateVariables, this.templateRepeaters, this.fileConfig.delimiter);
        evaluate_template_1.evaluateTemplate(this.doc);
    }
    render() {
        return this.doc.render();
    }
}
exports.TemplateDoc = TemplateDoc;
//# sourceMappingURL=template-doc.model.js.map