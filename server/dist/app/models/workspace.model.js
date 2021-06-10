"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
const path_1 = require("path");
const blueprints_model_1 = require("../../blueprints/engine/models/blueprints.model");
class Workspace {
    constructor(metadata) {
        this.metadata = metadata;
        this.init();
    }
    init() {
        this.blueprintsPath = path_1.join(this.metadata.environmentPath, 'blueprints');
        this.logPath = path_1.join(this.metadata.environmentPath, 'log.json');
        this.codebasePath = this.metadata.codebasePath;
    }
    getBlueprints() {
        return new blueprints_model_1.BlueprintsModel(this.blueprintsPath, this.metadata.name);
    }
}
exports.Workspace = Workspace;
//# sourceMappingURL=workspace.model.js.map