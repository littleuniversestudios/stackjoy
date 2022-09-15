"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentModel = void 0;
const path_1 = require("path");
const blueprints_model_1 = require("../blueprints/engine/models/blueprints.model");
const fs_extra_1 = require("fs-extra");
const util_1 = require("../../shared/lib/util");
const fs_1 = require("fs");
const example_template_1 = require("../../documentation/example.template");
const globals_1 = require("../../globals");
class EnvironmentModel {
    constructor(metadata) {
        this.metadata = metadata;
        this.init();
    }
    init() {
        this.blueprintsPath = path_1.join(this.metadata.blueprintsPath);
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
        const savedMetadata = Object.assign({}, this.metadata);
        // no need to store hardcoded absolute paths, system figures those out based on
        // where system.data.path is located at init time
        delete savedMetadata['environmentPath'];
        delete savedMetadata['blueprintsPath'];
        fs_extra_1.writeJSONSync(path_1.join(this.metadata.environmentPath, 'metadata.json'), savedMetadata);
    }
    /**
     * STATIC MEMBERS
     */
    static createEnvironment(environmentRelativePath, newEnvironmentOptions) {
        const metadata = {
            id: newEnvironmentOptions.id,
            name: newEnvironmentOptions.name,
            codebasePath: newEnvironmentOptions.codebasePath,
            isLocal: newEnvironmentOptions.isLocal,
            created: Date.now(),
            lastUsed: Date.now(),
            deletedOn: null,
            type: newEnvironmentOptions.type,
            isSystemWorkspace: !!newEnvironmentOptions.isSystemWorkspace,
            disabled: false
        };
        // the paths in the metadata are relative to the system data path provided.
        // here we join the system data path with the relative paths to create the
        // necessary folders
        const environmentPath = path_1.join(globals_1.SYSTEM.path.data, environmentRelativePath);
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
        return Object.assign({}, metadata, {
            environmentPath: environmentPath,
            blueprintsPath: path_1.join(environmentPath, 'blueprints')
        });
    }
    static getEnvironmentMetadata(absoluteEnvironmentPath) {
        if (util_1.isDirectorySync(absoluteEnvironmentPath)) {
            const environmentMetadata = fs_extra_1.readJsonSync(path_1.join(absoluteEnvironmentPath, 'metadata.json'), { throws: false });
            if (environmentMetadata) {
                environmentMetadata.environmentPath = absoluteEnvironmentPath;
                environmentMetadata.blueprintsPath = path_1.join(environmentMetadata.environmentPath, 'blueprints');
                return Object.assign({}, this.defaultMetadata(), environmentMetadata);
            }
        }
        else {
            const envPath = path_1.join(absoluteEnvironmentPath, 'metadata.json');
            console.log('NO METADATA FOUND for environment: ', envPath);
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
//# sourceMappingURL=environment.model.js.map