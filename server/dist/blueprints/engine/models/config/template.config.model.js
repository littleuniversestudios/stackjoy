"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateConfig = void 0;
const template_config_1 = require("./defaults/template.config");
const base_config_model_1 = require("./base.config.model");
class TemplateConfig extends base_config_model_1.Config {
    constructor(path) {
        super(path, template_config_1.config);
    }
    get settings() {
        return this.config.settings;
    }
}
exports.TemplateConfig = TemplateConfig;
//# sourceMappingURL=template.config.model.js.map