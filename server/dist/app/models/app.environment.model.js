"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentModel = void 0;
const path_1 = require("path");
const blueprints_model_1 = require("../../blueprints/engine/models/blueprints.model");
const fs_extra_1 = require("fs-extra");
const util_1 = require("../../shared/lib/util");
const fs_1 = require("fs");
const example_template_1 = require("./example.template");
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
    /**
     * STATIC MEMBERS
     */
    static createEnvironment(newEnvironmentOptions) {
        const environmentPath = newEnvironmentOptions.environmentPath;
        const metadata = {
            id: newEnvironmentOptions.id,
            name: newEnvironmentOptions.name,
            codebasePath: newEnvironmentOptions.codebasePath,
            environmentPath,
            blueprintsPath: path_1.join(environmentPath, 'blueprints'),
            isLocal: newEnvironmentOptions.isLocal,
            created: Date.now(),
            lastUsed: Date.now(),
            deletedOn: null,
            type: newEnvironmentOptions.type,
            isSystemWorkspace: !!newEnvironmentOptions.isSystemWorkspace,
            disabled: false
        };
        /**
         * create the blueprints folder structure
         */
        const result = blueprints_model_1.BlueprintsModel.crateBlueprintsFolder(environmentPath);
        if (result.error) {
            console.log('Error when creating blueprints folder for environment: ', newEnvironmentOptions.id);
        }
        else {
            /**
             * store the supporting workspace files
             */
            fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'metadata.json'), metadata);
            fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'log.json'), []);
            fs_extra_1.writeJSONSync(path_1.join(environmentPath, 'state.json'), {});
        }
        return metadata;
    }
    static getEnvironmentMetadata(environmentPath) {
        if (util_1.isDirectorySync(environmentPath)) {
            const environmentMetadata = fs_extra_1.readJsonSync(path_1.join(environmentPath, 'metadata.json'), { throws: false });
            if (environmentMetadata) {
                environmentMetadata.blueprintsPath = path_1.join(environmentMetadata.environmentPath, 'blueprints');
                return Object.assign({}, this.defaultMetadata(), environmentMetadata);
            }
        }
        else {
            return this.defaultMetadata();
        }
    }
    static defaultMetadata() {
        return {
            id: null,
            name: null,
            codebasePath: null,
            blueprintsPath: null,
            environmentPath: null,
            isLocal: true,
            localVersion: 1,
            created: null,
            lastUsed: null,
            deletedOn: null,
            type: null,
            disabled: false,
            isSystemWorkspace: null
        };
    }
    /**
     * Create the main (default) collection for a new environment
     * @param environment
     * @private
     */
    static createDefaultCollection(environment) {
        const environmentBlueprints = environment.getBlueprints();
        // create main collection with example template
        const result = environmentBlueprints.createCollection('main');
        if (!result.error) {
            const collection = result.data.collection;
            const templateResult = collection.createTemplate('documentation');
            if (!templateResult.error) {
                const pathToTemplateFiles = templateResult.data.template.paths.files;
                templateResult.data.template.updateVariables({ colors: ["yellow", "blue", "green"], strongPassword: 'password' });
                fs_1.writeFileSync(path_1.join(pathToTemplateFiles, 'hello-world.txt'), example_template_1.exampleTemplateText);
                // todo: create a whole slew of example files that the user can use as a reference
            }
        }
    }
}
exports.EnvironmentModel = EnvironmentModel;
//# sourceMappingURL=app.environment.model.js.map