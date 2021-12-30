"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentModel = void 0;
const path_1 = require("path");
const blueprints_model_1 = require("../../blueprints/engine/models/blueprints.model");
const fs_extra_1 = require("fs-extra");
class EnvironmentModel {
    constructor(metadata) {
        this.metadata = metadata;
        this.init();
    }
    init() {
        this.blueprintsPath = path_1.join(this.metadata.environmentPath, 'blueprints');
        this.collectionsPath = this.blueprintsPath;
        this.logPath = path_1.join(this.metadata.environmentPath, 'log.json');
    }
    get codebasePath() {
        return this.metadata.codebasePath;
    }
    getBlueprints() {
        return new blueprints_model_1.BlueprintsModel(this.blueprintsPath, this.metadata.name);
    }
    switchCodebase(codebasePath) {
        this.metadata.codebasePath = codebasePath;
        this.updateLastUsed(false);
        this.saveMetadata();
    }
    updateSeed(url) {
        this.metadata.seed = url;
        this.saveMetadata();
    }
    updateLastUsed(save = true) {
        this.metadata.lastUsed = Date.now();
        if (save) {
            this.saveMetadata();
        }
    }
    saveMetadata() {
        fs_extra_1.writeJSONSync(path_1.join(this.metadata.environmentPath, 'metadata.json'), this.metadata);
    }
}
exports.EnvironmentModel = EnvironmentModel;
//# sourceMappingURL=app.environment.model.js.map