"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentModel = void 0;
const path_1 = require("path");
const blueprints_model_1 = require("../blueprints/engine/models/blueprints.model");
const fs_extra_1 = require("fs-extra");
const util_1 = require("../../shared/lib/util");
const globals_1 = require("../../globals");
const blu_template_model_1 = require("../blueprints/engine/models/item/blu.template.model");
const fs = require("fs");
const recommendation_mappings_1 = require("./recommendation.mappings");
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
        delete savedMetadata['disabled'];
        // todo: there are environment properties that end up in the environment metadata that are only
        // todo: valid for the session and sometimes end up saved. need to rethink how we store permanent info
        // todo: and session only info
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
        // create main collection with stackjoy documentation template
        const result = environmentBlueprints.createCollection('main');
        if (!result.error) {
            const collection = result.data.collection;
            /**
             * COPY THE STACKJOY DOCUMENTATION TEMPLATE FROM /assets FOLDER
             * this uses process.argv[1] method to get the path where stackjoy-agent-server is being executed. This runs
             * correctly UNLESS someone runs stackjoy using node process manager like pm2 THEN process.argv[1] will point to
             * the executable of the process manager...NOT WHAT WE WANT!!!! but those cases should be very rare
             */
            const templateId = blu_template_model_1.BLUTemplateModel.newId();
            const documentationTemplatePath = path_1.join(globals_1.APP_PATHS.assets, '/templates/documentation-template');
            const destination = path_1.join(collection.paths.templates, templateId);
            if (fs_extra_1.existsSync(documentationTemplatePath)) {
                try {
                    fs_extra_1.copySync(documentationTemplatePath, destination);
                }
                catch (e) {
                    console.log('COULD NOT COPY STACKJOY DOCUMENTATION');
                    console.log(e);
                }
            }
        }
    }
    async getTagsFor(path) {
        const tags = new Set();
        // Ensure the path exists and is a directory.
        try {
            const stats = fs.lstatSync(path);
            if (!stats.isDirectory())
                return [];
        }
        catch (_a) {
            // Path doesn't exist, return nothing.
            return [];
        }
        // Read the directory structure and start checking names.
        for (let name of fs.readdirSync(path)) {
            for (let mapping of recommendation_mappings_1.RecommendationMappings) {
                // If no file name match continue
                if (!mapping.regex.test(name))
                    continue;
                // File name matches so push generic tags
                mapping.tags.forEach(v => tags.add(v));
                if (mapping.descendIntoDirectory) {
                    // If directory we recurse into it.
                    // Don't need to do a directory check here b/c it's checked in the method call.
                    (await this.getTagsFor(path_1.join(path, name))).forEach(v => tags.add(v));
                }
                else if (mapping.contentChecks) {
                    // Check contents if desired and only if not a directory.
                    const content = fs.readFileSync(path_1.join(path, name)).toString();
                    for (let contentMapping of mapping.contentChecks) {
                        if (contentMapping.keyword.test(content))
                            contentMapping.tags.forEach(v => tags.add(v));
                    }
                }
            }
        }
        return Array.from(tags);
    }
    async clearSuggestionCacheForEnv() {
        delete EnvironmentModel.suggestedStacksCache[this.metadata.id];
    }
    async suggestedStacks() {
        let tags = [];
        if (!!EnvironmentModel.suggestedStacksCache[this.metadata.id]
            // TODO make the scan delay time variable. Right now its at 3600000ms = 1h
            && new Date().getTime() - EnvironmentModel.suggestedStacksCache[this.metadata.id].generatedAt < 3600000) {
            // Use the cached tags
            tags = EnvironmentModel.suggestedStacksCache[this.metadata.id].tags;
        }
        else {
            // Scan the filesystem and generated tags
            const path = this.codebasePath;
            if (!fs.existsSync(path))
                return { tags: [], stacks: [] };
            tags = await this.getTagsFor(path);
        }
        const response = await globals_1.SJ_SERVER.getPublicStacksWithTags(tags);
        const suggestion = { tags, stacks: response.data };
        EnvironmentModel.suggestedStacksCache[this.metadata.id] = {
            tags,
            generatedAt: new Date().getTime()
        };
        return suggestion;
    }
}
exports.EnvironmentModel = EnvironmentModel;
// Used to cache the recommended stacks so we aren't constantly scanning the new files.
// TODO refactor EnvironmentModel so we arent instantiating it every time and we can use
//      class-scope variables
EnvironmentModel.suggestedStacksCache = {};
//# sourceMappingURL=environment.model.js.map