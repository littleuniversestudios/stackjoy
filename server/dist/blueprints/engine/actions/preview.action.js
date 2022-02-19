"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewAction = void 0;
const blu_interface_1 = require("../../../shared/interfaces/blu.interface");
const execute_item_model_1 = require("../models/execute/execute.item.model");
const fs_1 = require("fs");
const start_parse_1 = require("../../parser/parse/start.parse");
const path = require("path");
const os_1 = require("os");
const globals_1 = require("../../../globals");
class PreviewAction {
    constructor(api) {
        this.api = api;
    }
    executeUsingNamespace(namespace, inputs, rootDestination) {
        this.ROOT_DESTINATION = rootDestination !== null && rootDestination !== void 0 ? rootDestination : './';
        const items = this.api.getItemByNamespace(namespace);
        if (items.length !== 1) {
            const errorType = items.length === 0 ? blu_interface_1.BLU.Execute.ErrorType.itemNotFound : blu_interface_1.BLU.Execute.ErrorType.multipleItemsFound;
            const errorMessage = items.length === 0 ? `Item '${namespace}' not found` : `Multiple '${namespace}' items found, unsure which to use`;
            const errors = [{
                    type: errorType,
                    message: errorMessage,
                    data: { itemId: namespace },
                    executeContextId: null,
                    origin: {
                        location: blu_interface_1.BLU.Execute.ErrorLocation.item,
                    }
                }];
            return { errors: errors, onSuccess: '', executeContext: null };
        }
        else {
            const executeItem = this.prepareItem(items[0], Object.assign({}, inputs !== null && inputs !== void 0 ? inputs : {}, this.defaultInputs()));
            return this.getExecuteContext(executeItem);
        }
    }
    execute(itemId, inputs, rootDestination) {
        this.ROOT_DESTINATION = rootDestination !== null && rootDestination !== void 0 ? rootDestination : './';
        const item = this.api.getItemById(itemId);
        if (!item) {
            const errorType = blu_interface_1.BLU.Execute.ErrorType.itemNotFound;
            const errorMessage = `Item '${itemId}' not found`;
            const errors = [{
                    type: errorType,
                    message: errorMessage,
                    data: { itemId: itemId },
                    executeContextId: null,
                    origin: {
                        location: blu_interface_1.BLU.Execute.ErrorLocation.item,
                    }
                }];
            return { errors: errors, onSuccess: '', executeContext: null };
        }
        else {
            const executeItem = this.prepareItem(item, Object.assign({}, inputs !== null && inputs !== void 0 ? inputs : {}, this.defaultInputs()));
            return this.getExecuteContext(executeItem);
        }
    }
    defaultInputs() {
        return {
            CODEBASE_PATH: globals_1.APP_ENVIRONMENT.metadata.codebasePath,
            ROOT_DESTINATION: this.ROOT_DESTINATION,
        };
    }
    getExecuteContext(executeItem) {
        const allErrors = [...executeItem.errors];
        let onSuccess = executeItem.onSuccess;
        const ctx = {
            ROOT_DIR: globals_1.APP_ENVIRONMENT.metadata.codebasePath,
            ROOT_DESTINATION: this.ROOT_DESTINATION,
            item: executeItem.item.info,
            errors: executeItem.errors,
            itemContext: executeItem.itemContext,
            onSuccess: executeItem.onSuccess,
            renderContext: executeItem.renderContext,
            tree: executeItem.tree,
            executeContextId: executeItem.execId,
            children: []
        };
        executeItem.children.forEach(childItem => {
            let { errors, executeContext } = this.getExecuteContext(childItem);
            ctx.children.push(executeContext);
            allErrors.push(...errors);
            onSuccess += `${os_1.EOL}${childItem.onSuccess}`;
        });
        return { errors: allErrors, onSuccess, executeContext: ctx };
    }
    prepareItem(item, inputs, parent = null, extraInfo) {
        return this.generate(item, inputs, parent, extraInfo);
    }
    /**
     * context is the final context after the hierarchical context and execution contexts have been combined
     */
    generate(item, inputs, parent = null, extraInfo) {
        const executeItem = new execute_item_model_1.ExecuteItemModel(item, parent, inputs, this.ROOT_DESTINATION, extraInfo);
        switch (item.type) {
            case blu_interface_1.BLU.Item.Type.Template:
                this.evaluateVariables(executeItem);
                this.generateTemplate(executeItem);
                this.generateChain(item, executeItem);
                this.generateOnSuccess(executeItem);
                break;
        }
        return executeItem;
    }
    evaluateVariables(executeItem) {
        executeItem.itemContext.variables.forEach(variable => {
            if (typeof variable.value === "string") {
                const renderResult = start_parse_1.renderText(variable.value, executeItem.renderContext);
                variable.value = renderResult.renderedText;
                if (renderResult.errors) {
                    this.setVariableErrors(executeItem, variable, renderResult.errors);
                }
            }
        });
    }
    setVariableErrors(executeItem, variable, errors) {
        errors.forEach(error => {
            switch (variable.origin.type) {
                case blu_interface_1.BLU.Origin.Types.Chain:
                    // inputs that come from a chain originate in the parent, so we set this error in the parent
                    executeItem.parent.errors.push({
                        executeContextId: executeItem.parent.execId,
                        type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                        message: `Error parsing input "${variable.name}" in Chained Template: '${executeItem.item.name}'`,
                        data: Object.assign({}, error, { templateId: executeItem.item.id, templateName: executeItem.item.name }),
                        origin: {
                            location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                            section: blu_interface_1.BLU.Execute.ErrorSection.chainedTemplates,
                            property: variable.name
                        },
                    });
                    break;
                case blu_interface_1.BLU.Origin.Types.User:
                    // this error occurred in the main input that the user submitted
                    // so we get the top most execute item...or, the patriarch and put the error there
                    const patriarch = executeItem.patriarch;
                    const sameError = patriarch.errors.find(e => { var _a; return ((_a = e.origin) === null || _a === void 0 ? void 0 : _a.property) === variable.name; });
                    if (!sameError) {
                        patriarch.errors.push({
                            executeContextId: executeItem.execId,
                            type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                            message: `Error parsing input "${variable.name}"'`,
                            data: error,
                            origin: {
                                location: blu_interface_1.BLU.Execute.ErrorLocation.userInput,
                                property: variable.name
                            },
                        });
                    }
                    break;
                default:
                    executeItem.errors.push({
                        executeContextId: executeItem.execId,
                        type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                        message: `Error parsing variable "${variable.name}" in Config > variables`,
                        data: error,
                        origin: {
                            location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                            section: blu_interface_1.BLU.Execute.ErrorSection.variables,
                            property: variable.name
                        },
                    });
                    break;
            }
        });
    }
    generateTemplate(executeItem) {
        const templateErrors = this.renderFiles(executeItem.tree, executeItem);
        executeItem.errors.push(...templateErrors);
    }
    generateOnSuccess(executeItem) {
        const renderResult = start_parse_1.renderText(executeItem.onSuccessStr, executeItem.renderContext);
        executeItem.onSuccess = renderResult.renderedText;
        if (renderResult.errors) {
            executeItem.errors.push(...renderResult.errors.map(e => ({
                executeContextId: executeItem.execId,
                type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                message: 'Error while parsing Config > onSuccess',
                data: e,
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                    section: blu_interface_1.BLU.Execute.ErrorSection.onSuccess,
                    property: null
                }
            })));
        }
    }
    generateChain(template, executeItem) {
        const executeList = executeItem.executeList;
        if (!executeList.map(i => i.id).includes(executeItem.item.info.id)) {
            template.chainedTemplates.forEach(chainedTemplate => {
                const item = this.api.getItemById(chainedTemplate.templateId);
                if (!item) {
                    const errorType = blu_interface_1.BLU.Execute.ErrorType.itemNotFound;
                    const errorMessage = `Item '${chainedTemplate.templateId}' not found`;
                    executeItem.errors.push({
                        type: errorType,
                        message: errorMessage,
                        data: { itemId: executeItem.item.info.id, command: chainedTemplate.templateId },
                        executeContextId: executeItem.execId,
                        origin: {
                            location: blu_interface_1.BLU.Execute.ErrorLocation.chain,
                            section: blu_interface_1.BLU.Execute.ErrorSection.chainedTemplates,
                        }
                    });
                }
                else {
                    executeItem.children.push(this.prepareItem(item, chainedTemplate.inputs, executeItem, { inputsOrigin: blu_interface_1.BLU.Origin.Types.Chain }));
                }
            });
        }
        else {
            executeItem.parent.errors.push({
                type: blu_interface_1.BLU.Execute.ErrorType.circularChain,
                message: 'Circular chain detected',
                data: {
                    chainOrder: [{ id: executeItem.item.info.id, name: executeItem.item.info.name }, ...executeList,].reverse(),
                    itemId: executeItem.parent.item.info.id,
                    templateId: executeItem.item.info.id,
                    templateName: executeItem.item.info.name
                },
                executeContextId: executeItem.parent.execId,
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                    section: blu_interface_1.BLU.Execute.ErrorSection.chainedTemplates,
                }
            });
        }
    }
    renderFiles(folder, executeItem) {
        const allErrors = [];
        folder.files.forEach((file, index) => {
            const allFileErrors = [];
            let { filename, basename, extname, filenameErrors } = this.getFilename(executeItem, file);
            executeItem.errors.push(...filenameErrors);
            let { destination, destinationFolder, destinationErrors, fileExists } = this.getDestination(executeItem, file, filename);
            allFileErrors.push(...destinationErrors);
            const fileContextInputs = {
                filename,
                basename,
                extname,
                filePath: destination,
            };
            const fileContext = { inputs: Object.assign({}, executeItem.renderContext.inputs, fileContextInputs), functions: executeItem.renderContext.functions };
            let { originalText, renderedText, fileErrors } = this.renderContents(executeItem, file, fileContext);
            allFileErrors.push(...fileErrors);
            folder.files[index] = Object.assign({}, file, { text: originalText, renderedFilename: filename, renderedText: renderedText, errors: allFileErrors, renderContext: fileContext, destination, destinationFolder, fileExists });
            allErrors.push(...allFileErrors);
        });
        folder.subFolders.forEach(subFolder => allErrors.push(...this.renderFiles(subFolder, executeItem)));
        return allErrors;
    }
    renderContents(executeItem, file, fileContext) {
        const fileContents = fs_1.readFileSync(file.absolutePath, 'utf-8');
        const renderResult = start_parse_1.renderText(`${fileContents}`, fileContext);
        const errors = [];
        if (renderResult.errors) {
            errors.push(...renderResult.errors.map(e => ({
                executeContextId: executeItem.execId,
                fileId: file.id,
                type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                message: 'Error while parsing file',
                data: e,
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.file
                }
            })));
        }
        return { originalText: fileContents, renderedText: renderResult.renderedText, fileErrors: errors };
    }
    getDestination(executeItem, file, filename) {
        const forceOverwrite = executeItem.renderContext.inputs.f === true;
        const destinationFolder = path.join(executeItem.renderContext.inputs.destination, file.relativePath);
        const destination = path.join(destinationFolder, filename);
        const errors = [];
        const fileExists = fs_1.existsSync(destination);
        if (fileExists && !forceOverwrite) {
            errors.push({
                executeContextId: executeItem.execId,
                fileId: file.id,
                type: blu_interface_1.BLU.Execute.ErrorType.fileExists,
                message: 'Destination file exists and will be overwritten.',
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.file,
                },
                data: {
                    destination,
                    message: 'Destination file exists and will be overwritten.',
                }
            });
        }
        return { destination, destinationFolder, destinationErrors: errors, fileExists };
    }
    getFilename(executeItem, file) {
        var _a;
        const errors = [];
        const itemSettings = executeItem.itemSettings;
        let filename = file.filename;
        let basename = '';
        let extname = '';
        const renderResult = this.renderFilename(itemSettings.filenames, file.filename, executeItem.renderContext);
        if (((_a = renderResult.errors) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            errors.push(...renderResult.errors.map(e => ({
                executeContextId: executeItem.execId,
                fileId: file.id,
                type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                message: 'Error while parsing Config > filenames',
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                    section: blu_interface_1.BLU.Execute.ErrorSection.filenames,
                    property: null
                },
                data: e
            })));
        }
        else {
            filename = renderResult.renderedText;
            const filenameParts = this.extractFilenameParts(filename);
            basename = filenameParts.basename;
            extname = filenameParts.extname;
        }
        return { filename, basename, extname, filenameErrors: errors };
    }
    renderFilename(filenames, filename, renderContext) {
        if (!!filenames) {
            const { basename, extname } = this.extractFilenameParts(filename);
            const fileContext = { inputs: Object.assign({}, renderContext.inputs, { filename, basename, extname }), functions: renderContext.functions };
            return start_parse_1.renderText(filenames, fileContext);
        }
        else {
            return { renderedText: filename, errors: [] };
        }
    }
    extractFilenameParts(filename) {
        let basename = '';
        let extname = '';
        const index = filename.lastIndexOf('.');
        if (index >= 0) {
            basename = filename.substring(0, index);
            extname = filename.substring(index + 1);
        }
        return { basename, extname };
    }
}
exports.PreviewAction = PreviewAction;
//# sourceMappingURL=preview.action.js.map