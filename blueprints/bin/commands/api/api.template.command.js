"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APITemplate = void 0;
const globals_1 = require("../../context/globals");
const file_system_1 = require("../../lib/file-system");
const handler_1 = require("../../lib/handler");
const blu_interface_1 = require("../../interfaces/blu.interface");
class APITemplate {
    static get(runContext) {
        const templateName = runContext.commandArgs.APITemplate;
        if (!templateName) {
            handler_1.Handle.apiError('Must provide template name', blu_interface_1.BLU.API.ErrorCode.TemplateNameMissing);
        }
        const template = globals_1.BLUEPRINT.getTemplates(templateName)[0];
        const templateFiles = file_system_1.FileSystem.listAllFiles(template.templatePath);
        return Object.assign({}, template, { isSeed: template.isSeed }, { templateFiles });
    }
    static list(runContext) {
        return globals_1.BLUEPRINT.allTemplates;
    }
}
exports.APITemplate = APITemplate;
//# sourceMappingURL=api.template.command.js.map