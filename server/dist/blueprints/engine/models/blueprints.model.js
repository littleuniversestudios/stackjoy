"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintsModel = void 0;
const workspace_model_1 = require("./item/environment/workspace.model");
const blu_interface_1 = require("../../../shared/interfaces/blu.interface");
const actions_model_1 = require("../actions/actions.model");
const blueprints_api_1 = require("../api/blueprints.api");
const fs_extra_1 = require("fs-extra");
const template_model_1 = require("./item/template.model");
const path_1 = require("path");
const chain_model_1 = require("./item/chain.model");
class BlueprintsModel {
    constructor(path, workspaceName) {
        this.path = path;
        this.workspace = new workspace_model_1.WorkspaceModel(path, workspaceName);
        this.api = new blueprints_api_1.BlueprintsApi(this.workspace);
        this.actions = new actions_model_1.ActionsModel(this.api);
    }
    preview(itemId, inputs, rootDestination) {
        return this.actions.preview(itemId, inputs, rootDestination);
    }
    generate(itemId, inputs, rootDestination) {
        return this.actions.generate(itemId, inputs, rootDestination);
    }
    allItems() {
        return this.api.allItems.filter(i => !['workspace', 'stack'].includes(i.type)).map(i => i.info);
    }
    tree() {
        return this.api.tree;
    }
    getCollections() {
        return this.api.getCollectionsInfo();
    }
    collectionExists(name) {
        const collections = this.getCollections();
        return !!collections.find(c => c.name === name);
    }
    getItemByNamespace(namespace) {
        return this.api.getItemByNamespace(namespace);
    }
    getItemById(id) {
        return this.api.getItemById(id);
    }
    /**
     * STACKS
     */
    deleteStack(id) {
        return this.workspace.deleteStack(id);
    }
    /**
     * COLLECTIONS
     */
    getCollection(id) {
        return this.workspace.getCollection(id);
    }
    createCollection(name) {
        return this.workspace.createCollection(name);
    }
    renameCollection(id, name) {
        return this.workspace.renameCollection(id, name);
    }
    deleteCollection(id) {
        return this.workspace.deleteCollection(id);
    }
    addCollection(collection) {
        return this.workspace.addCollection(collection);
    }
    ;
    /**
     * ITEM
     */
    updateItemReadme(id, readme) {
        return this.updateItemProperty(id, readme, "readme");
    }
    updateItemVariables(id, variables) {
        return this.updateItemProperty(id, variables, "variables");
    }
    updateItemLinks(id, links) {
        return this.updateItemProperty(id, links, "links");
    }
    updateItemConfig(id, config) {
        return this.updateItemProperty(id, config, "config");
    }
    updateItemProperty(id, value, property) {
        const item = this.getItemById(id);
        if (item) {
            switch (property) {
                case "variables":
                    return item.updateVariables(value);
                case "readme":
                    return item.updateReadme(value);
                case "links":
                    return item.updateLinks(value);
                case "config":
                    return item.updateConfig(value);
            }
        }
        else {
            return { error: { status: 400, code: 'item-not-found', message: `Item with id '${id}' not found` }, data: { success: false } };
        }
    }
    /**
     * CHAINS
     */
    getChain(id) {
        return this.api.allItems.find(i => i.type === blu_interface_1.BLU.Item.Type.Chain && i.id === id);
    }
    getChains() {
        return this.api.allItems.filter(i => i.type === blu_interface_1.BLU.Item.Type.Chain);
    }
    createChain(name, collectionId) {
        const collection = this.getCollection(collectionId);
        if (collection) {
            return collection.createChain(name);
        }
        else {
            return { error: { status: 400, code: 'collection-not-found', message: `Collection with id '${collectionId}' not found` }, data: { success: false } };
        }
    }
    renameChain(name, chainId) {
        const chain = this.getChain(chainId);
        if (chain) {
            return chain.renameChain(name);
        }
        else {
            return { error: { status: 400, code: 'chain-not-found', message: `Chain with id '${chainId}' not found` }, data: { success: false } };
        }
    }
    deleteChain(chainId) {
        const chain = this.getChain(chainId);
        if (chain) {
            try {
                fs_extra_1.removeSync(chain.paths.self);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'chain-delete-error', message: `Error occurred trying to delete chain with id: '${chainId}'`, error }, data: { success: false } };
            }
        }
        else {
            return { error: { status: 400, code: 'chain-not-found', message: `Chain with id '${chainId}' not found` }, data: { success: false } };
        }
    }
    updateChainCommands(chainId, commands) {
        const chain = this.getChain(chainId);
        if (chain) {
            return chain.updateCommands(commands);
        }
        else {
            return { error: { status: 400, code: 'chain-not-found', message: `Chain with id '${chainId}' not found` }, data: { success: false } };
        }
    }
    duplicateChain(chainId) {
        const chain = this.getChain(chainId);
        if (chain) {
            try {
                const newChainId = chain_model_1.ChainModel.newId();
                fs_extra_1.copySync(chain.paths.self, path_1.join(chain.paths.self, `../${newChainId}`));
                const newChain = new chain_model_1.ChainModel(newChainId, chain.parent);
                newChain.renameChain(`${chain.name}_copy`);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'template-duplicate-error', message: `Error occurred trying to duplicate template with id: '${chainId}'`, error }, data: { success: false } };
            }
        }
        else {
            return { error: { status: 400, code: 'template-not-found', message: `Template with id '${chainId}' not found` }, data: { success: false } };
        }
    }
    /**
     * TEMPLATES
     */
    getTemplate(id) {
        return this.api.allItems.find(i => i.type === blu_interface_1.BLU.Item.Type.Template && i.id === id);
    }
    getTemplates() {
        return this.api.allItems.filter(i => i.type === blu_interface_1.BLU.Item.Type.Template);
    }
    createTemplate(name, collectionId, files) {
        const collection = this.getCollection(collectionId);
        if (collection) {
            return collection.createTemplate(name, files);
        }
        else {
            return { error: { status: 400, code: 'collection-not-found', message: `Collection with id '${collectionId}' not found` }, data: { success: false, template: null } };
        }
    }
    renameTemplate(name, templateId) {
        const template = this.getTemplate(templateId);
        if (template) {
            return template.renameTemplate(name);
        }
        else {
            return { error: { status: 400, code: 'template-not-found', message: `Template with id '${templateId}' not found` }, data: { success: false } };
        }
    }
    deleteTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (template) {
            try {
                fs_extra_1.removeSync(template.paths.self);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'template-delete-error', message: `Error occurred trying to delete template with id: '${templateId}'`, error }, data: { success: false } };
            }
        }
        else {
            return { error: { status: 400, code: 'template-not-found', message: `Template with id '${templateId}' not found` }, data: { success: false } };
        }
    }
    duplicateTemplate(templateId) {
        const template = this.getTemplate(templateId);
        if (template) {
            const destination = path_1.join(template.parent.paths.templates);
            const newName = `${template.name}_copy`;
            return template_model_1.TemplateModel.copyTemplate(template, destination, template.parent, newName);
        }
        else {
            return { error: { status: 400, code: 'template-not-found', message: `Template with id '${templateId}' not found` }, data: { success: false } };
        }
    }
    createNewFile(templateId, newFileName, path) {
        const template = this.getTemplate(templateId);
        if (template) {
            return template.createNewFile(newFileName, path);
        }
        else {
            return { error: { status: 400, code: 'template-not-found', message: `Template with id '${templateId}' not found` }, data: { success: false } };
        }
    }
    createNewFolder(templateId, newFolderName, path) {
        const template = this.getTemplate(templateId);
        if (template) {
            return template.createNewFolder(newFolderName, path);
        }
        else {
            return { error: { status: 400, code: 'template-not-found', message: `Template with id '${templateId}' not found` }, data: { success: false } };
        }
    }
    /**
     * FUNCTIONS
     */
    getFunction(id) {
        return this.api.allFunctions.find(i => i.id === id);
    }
    getFunctions() {
        return this.api.allFunctions;
    }
    deleteFunction(functionId) {
        const bluFunction = this.getFunction(functionId);
        if (bluFunction) {
            try {
                fs_extra_1.removeSync(bluFunction.paths.self);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'function-delete-error', message: `Error occurred trying to delete function with id: '${functionId}'`, error }, data: { success: false } };
            }
        }
        else {
            return { error: { status: 400, code: 'function-not-found', message: `Function with id '${functionId}' not found` }, data: { success: false } };
        }
    }
    createFunction(parentId, name, description, contents) {
        const item = this.getItemById(parentId);
        if (item) {
            return item.createFunction(name, description, contents);
        }
        else {
            return { error: { status: 400, code: 'item-not-found', message: `Item with id '${parentId}' (which will store the function) not found` }, data: { success: false, function: null } };
        }
    }
    updateFunction(functionId, name, description, contents) {
        const bluFunction = this.getFunction(functionId);
        if (bluFunction) {
            const result = bluFunction.update(name, description, contents);
            if (result.error) {
                return { error: result.error, data: { success: false, function: null } };
            }
            else {
                return { error: result.error, data: { success: true, function: result.data.function.info } };
            }
        }
        else {
            return { error: { status: 400, code: 'function-not-found', message: `Function with id '${functionId}' not found` }, data: { success: false, function: null } };
        }
    }
    /**
     * ENVIRONMENT DATA
     */
    getDataMembers(dataType) {
        switch (dataType) {
            case blu_interface_1.BLU.Data.Type.input:
                return this.workspace.dataMembers.inputs.map(item => item.info);
            case blu_interface_1.BLU.Data.Type.model:
                return this.workspace.dataMembers.models.map(item => item.info);
            case blu_interface_1.BLU.Data.Type.schema:
                return this.workspace.dataMembers.schema.map(item => item.info);
        }
    }
    createDataMember(dataType, contents) {
        return this.workspace.environmentData.createDataMember(dataType, contents);
    }
    updateDataMember(id, contents, dataType) {
        this.workspace.environmentData.updateDataMember(id, contents, dataType);
    }
    deleteDataMember(id, dataType) {
        return this.workspace.environmentData.deleteDataMember(id, dataType);
    }
    /**
     * STATIC MEMBERS
     */
    static crateBlueprintsFolder(path) {
        return workspace_model_1.WorkspaceModel.createWorkspace(path);
    }
}
exports.BlueprintsModel = BlueprintsModel;
//# sourceMappingURL=blueprints.model.js.map