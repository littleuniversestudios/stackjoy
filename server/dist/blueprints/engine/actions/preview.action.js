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
    prepareItem(item, inputs, parent = null) {
        return this.generate(item, inputs, parent);
    }
    /**
     * context is the final context after the hierarchical context and execution contexts have been combined
     * @param item
     * @param inputs
     * @param parent
     */
    generate(item, inputs, parent = null) {
        const executeItem = new execute_item_model_1.ExecuteItemModel(item, parent, inputs, this.ROOT_DESTINATION);
        switch (item.type) {
            case blu_interface_1.BLU.Item.Type.Template:
                this.evaluateVariables(executeItem);
                this.generateTemplate(executeItem);
                this.generateOnSuccess(executeItem);
                break;
            case blu_interface_1.BLU.Item.Type.Chain:
                this.evaluateVariables(executeItem);
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
                    executeItem.errors.push(...renderResult.errors.map(e => ({
                        executeContextId: executeItem.execId,
                        type: blu_interface_1.BLU.Execute.ErrorType.parseError,
                        message: `Error while parsing variable "${variable.name}" found in config -> variables of ${variable.origin.type}:${variable.origin.name}`,
                        data: e,
                        origin: {
                            location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                            section: blu_interface_1.BLU.Execute.ErrorSection.variables,
                            property: variable.name
                        },
                    })));
                }
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
                message: 'Error while parsing onSuccess text',
                data: e,
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                    section: blu_interface_1.BLU.Execute.ErrorSection.settings,
                    property: blu_interface_1.BLU.Execute.ErrorLocation.onSuccess
                }
            })));
        }
    }
    generateChain(chain, executeItem) {
        const executeList = executeItem.executeList;
        if (!executeList.includes(executeItem.item.info.id)) {
            chain.commands.forEach(command => {
                const items = this.api.getItemByNamespace(command.command);
                if (items.length !== 1) {
                    const errorType = items.length === 0 ? blu_interface_1.BLU.Execute.ErrorType.itemNotFound : blu_interface_1.BLU.Execute.ErrorType.multipleItemsFound;
                    const errorMessage = items.length === 0 ? `Item '${command.command}' not found` : `Multiple '${command.command}' items found, unsure which to use`;
                    executeItem.errors.push({
                        type: errorType,
                        message: errorMessage,
                        data: { itemId: executeItem.item.info.id, command: command.command },
                        executeContextId: executeItem.execId,
                        origin: {
                            location: blu_interface_1.BLU.Execute.ErrorLocation.chain,
                            section: blu_interface_1.BLU.Execute.ErrorSection.commands,
                        }
                    });
                }
                else {
                    executeItem.children.push(this.prepareItem(items[0], command.inputs, executeItem));
                }
            });
        }
        else {
            executeItem.errors.push({
                type: blu_interface_1.BLU.Execute.ErrorType.circularChain,
                message: 'Circular chain detected',
                data: { chainOrder: [...executeList, executeItem.item.info.id], itemId: executeItem.item.info.id, command: executeItem.item.info.id },
                executeContextId: executeItem.execId,
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.chain,
                    section: blu_interface_1.BLU.Execute.ErrorSection.commands,
                }
            });
        }
    }
    renderFiles(folder, executeItem) {
        const allErrors = [];
        folder.files.forEach((file, index) => {
            const allFileErrors = [];
            let { filename, basename, extname, filenameErrors } = this.getFilename(executeItem, file);
            allFileErrors.push(...filenameErrors);
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
                message: 'Destination exists and will be overwritten.',
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.file,
                },
                data: {
                    destination
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
                message: 'Error while parsing Config > Settings > filenames',
                origin: {
                    location: blu_interface_1.BLU.Execute.ErrorLocation.config,
                    section: blu_interface_1.BLU.Execute.ErrorSection.settings,
                    property: 'filenames'
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
0;
//# sourceMappingURL=preview.action.js.map