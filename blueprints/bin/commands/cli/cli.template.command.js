"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const enquirer_1 = require("enquirer");
const blu_interface_1 = require("../../interfaces/blu.interface");
const globals_1 = require("../../context/globals");
const file_system_1 = require("../../lib/file-system");
const text_transform_1 = require("../../lib/text-transform");
const handler_1 = require("../../lib/handler");
const chalk_1 = require("chalk");
const global_context_1 = require("../../context/global-context");
const template_context_1 = require("../../context/template-context");
const template_model_1 = require("../../models/template.model");
class Template {
    /**
     * Run the template generation process.
     * @param runContext
     */
    static async run(runContext) {
        const templateContext = new template_context_1.TemplateContext();
        runContext.itemContext = templateContext;
        templateContext.command = runContext.CLICommand;
        templateContext.template = await handler_1.Handle.asyncResponse(findTemplate(runContext.commandArgs.sourceTemplateName));
        templateContext.newTemplateName = await handler_1.Handle.asyncResponse(getNewTemplateName(runContext));
        await handler_1.Handle.asyncResponse(renderTemplate(runContext));
        templateContext.subCommands = templateContext.template.getCommands();
    }
}
exports.Template = Template;
/**
 * Find the specific template the user intends to generate
 * @param sourceTemplateName
 */
async function findTemplate(sourceTemplateName) {
    const templates = globals_1.BLUEPRINT.getTemplates(sourceTemplateName);
    let templateMetadata;
    if (templates.length === 1) {
        templateMetadata = templates[0];
    }
    else if (templates.length > 1) {
        const errorMessageManyTemplates = `Multiple templates with name/alias '${sourceTemplateName}'`;
        if (global_context_1.GlobalContext.isRunByAPI()) {
            handler_1.Handle.apiError(errorMessageManyTemplates, blu_interface_1.BLU.API.ErrorCode.MultipleTemplates);
        }
        else {
            templateMetadata = await handler_1.Handle.asyncResponse(selectTemplate(templates, `${errorMessageManyTemplates}. Select one:`));
        }
    }
    else {
        if (global_context_1.GlobalContext.isRunByAPI()) {
            sourceTemplateName ?
                handler_1.Handle.apiError(`Must provide template name/alias.`, blu_interface_1.BLU.API.ErrorCode.TemplateNameMissing) :
                handler_1.Handle.apiError(`Template with name/alias '${sourceTemplateName}' does not exist.`, blu_interface_1.BLU.API.ErrorCode.TemplateNameNotCorrect);
        }
        else {
            if (sourceTemplateName) {
                console.log(chalk_1.default.green(`Template with name/alias '${sourceTemplateName}' does not exist. Please select another one.`));
            }
            templateMetadata = await handler_1.Handle.asyncResponse(selectTemplate(globals_1.BLUEPRINT.allTemplates, `Select template to generate:`));
        }
    }
    return new template_model_1.BlueprintTemplate(templateMetadata);
}
/**
 * Get the new template name either form the command line or prompt user to enter
 * a nw name if not found in the CLI arguments
 * @param runContext
 */
async function getNewTemplateName(runContext) {
    let newTemplateName = runContext.commandArgs.newTemplateName;
    if (!newTemplateName) {
        if (global_context_1.GlobalContext.isRunByAPI()) {
            handler_1.Handle.apiError(`Template must have a name.`, blu_interface_1.BLU.API.ErrorCode.TemplateNameMissing);
        }
        else {
            newTemplateName = await handler_1.Handle.asyncResponse(getComponentName(runContext.itemContext.template));
        }
    }
    return newTemplateName;
}
/**
 * Render the template files
 * @param templateContext
 */
async function renderTemplate(runContext) {
    await handler_1.Handle.asyncResponse(runContext.itemContext.template.render(runContext));
}
/**
 * If no template was provided let user choose a template from the list of installed collections.
 * Applies only to CLI mode
 * @param templates
 * @param message
 */
async function selectTemplate(templates, message) {
    const question = {
        type: 'autocomplete',
        name: 'template',
        message,
        limit: 6,
        suggest(input, choices) {
            const searchExpression = new RegExp(input, 'gi');
            return choices.filter(choice => searchExpression.test(choice.message));
        },
        choices: getChoices(templates),
    };
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt(question));
    return response.template;
}
/**
 * Create searchable template choices by combining the name, collection and the description
 * of the template. User can then find a specific template even if the search term is
 * only found in the description.
 * Applies only to CLI mode
 * @param templates
 */
function getChoices(templates) {
    return templates.map(template => {
        const name = text_transform_1.TextTransform.padText(template.templateName, 25);
        const description = template.description ? ` ${text_transform_1.TextTransform.ellipsis(template.description, 50)}` : '';
        const collection = description ? text_transform_1.TextTransform.padText(`[${template.collectionName}]\u221e`, 20) : `[${text_transform_1.TextTransform.ellipsis(template.collectionName, 18)}]`;
        return { name: `${name} ${collection}${description}`, value: template };
    });
}
/**
 * Provide the user with a suggestion for the new template name. Use the directory
 * name where the command was run from as the suggestion.
 * Applies only to CLI mode
 * @param template
 */
async function getComponentName(template) {
    const currentDirName = file_system_1.FileSystem.getLastDirectoryName(globals_1.CURRENT_WORKING_DIR);
    const response = await handler_1.Handle.asyncResponse(enquirer_1.prompt({
        type: 'input',
        name: 'name',
        initial: currentDirName,
        message: `Name for the '${template.templateName}' template?`,
    }));
    return response.name;
}
//# sourceMappingURL=cli.template.command.js.map