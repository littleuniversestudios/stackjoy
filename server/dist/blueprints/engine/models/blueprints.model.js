"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintsModel = void 0;
const workspace_model_1 = require("./item/workspace.model");
const actions_model_1 = require("../actions/actions.model");
const internal_api_1 = require("../api/internal.api");
const external_api_1 = require("../api/external.api");
class BlueprintsModel {
    constructor(path, workspaceName) {
        this.path = path;
        this.workspaceName = workspaceName;
        this.internalAPI = new internal_api_1.InternalAPI(new workspace_model_1.WorkspaceModel(path, workspaceName));
        this.externalAPI = new external_api_1.ExternalAPI(this.internalAPI);
        this.actions = new actions_model_1.ActionsModel(this.internalAPI);
    }
    preview(itemId, inputs, rootDestination) {
        return this.actions.preview(itemId, inputs, rootDestination);
    }
    generate(itemId, inputs, rootDestination) {
        return this.actions.generate(itemId, inputs, rootDestination);
    }
    allItems() {
        return this.externalAPI.allItems().filter(i => !['collection', 'workspace'].includes(i.type));
    }
    getCollections() {
        return this.externalAPI.getCollections();
    }
    getTemplates() {
        // const bluModel = this.getBLUModel();
        // return bluModel.allTemplates;
        return [];
    }
    getItemById(itemId) {
        return this.internalAPI.getItemById(itemId);
    }
    getTemplate(templateName) {
        // const bluModel = this.getBLUModel();
        // return bluModel.getTemplate(templateName);
        return null;
    }
    getTemplateFileList(templateName) {
        // const bluModel = this.getBLUModel();
        // const template = bluModel.getTemplate(templateName);
        // return template.getFileList();
        return null;
    }
    getTemplateFileTree(templateName) {
        // const bluModel = this.getBLUModel();
        // const template = bluModel.getTemplate(templateName);
        // return template.getFileTree();
        return null;
    }
}
exports.BlueprintsModel = BlueprintsModel;
//# sourceMappingURL=blueprints.model.js.map