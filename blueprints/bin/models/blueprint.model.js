"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blueprint = void 0;
const chalk_1 = require("chalk");
const fs_extra_1 = require("fs-extra");
const globals_1 = require("../context/globals");
const blu_interface_1 = require("../interfaces/blu.interface");
const collection_model_1 = require("./collection.model");
const path_1 = require("path");
const logger_1 = require("../lib/logger");
const file_system_1 = require("../lib/file-system");
class Blueprint {
    constructor() {
        this.collections = [];
        this.allItems = [];
        this.init();
    }
    getTemplates(template) {
        let templates = [];
        if (template) {
            const templateInfo = template.split('.');
            const templateName = templateInfo[templateInfo.length - 1];
            const collectionName = templateInfo[templateInfo.length - 2];
            if (!!collectionName) {
                templates = this.allTemplates.filter(t => t.collectionName === collectionName && (t.templateName === templateName || t.hasAlias(templateName)));
            }
            else {
                templates = this.allTemplates.filter(t => t.templateName === templateName || t.hasAlias(templateName));
            }
        }
        return templates;
    }
    getChains(chain) {
        let chains = [];
        if (chain) {
            const chainInfo = chain.split('.');
            if (chainInfo.length === 2) {
                const collectionName = chainInfo[0];
                const chainName = chainInfo[1];
                chains = this.allChains.filter(t => t.collectionName === collectionName && (t.name === chainName || t.hasAlias(chainName)));
            }
            else {
                const chainName = chain;
                chains = this.allChains.filter(t => t.name === chainName || t.hasAlias(chainName));
            }
        }
        return chains;
    }
    createBlueprintCollection(name, path) {
        this.collections.push(new collection_model_1.BlueprintCollection(name, path));
    }
    init() {
        try {
            this.setConfigFile();
            const installedCollections = this.getInstalledCollections();
            const externalCollections = this.getExternalCollections();
            installedCollections.forEach(collection => this.createBlueprintCollection(collection.name, collection.path));
            externalCollections.forEach(collection => this.createBlueprintCollection(collection.name, collection.path));
            this.hasCollections = this.collections.length > 0;
            this.initTemplates();
            this.initChains();
            this.initAllItems();
        }
        catch (e) {
            logger_1.Logger.logError(e);
        }
    }
    initTemplates() {
        this.allTemplates = [].concat.apply([], this.collections.map(collection => collection.templates));
    }
    initChains() {
        this.allChains = [].concat.apply([], this.collections.map(collection => collection.chains));
    }
    initAllItems() {
        this.allItems.push(...this.allTemplates.map(t => ({ id: `${t.collectionName}.${t.templateName}`, type: blu_interface_1.BLU.Item.Type.Template, name: t.templateName, description: t.description, collectionName: t.collectionName, alias: t.aliases, isSeed: t.isSeed })));
        this.allItems.push(...this.allChains.map(t => ({ id: `${blu_interface_1.BLU.Item.Type.Chain}:${t.collectionName}.${t.name}`, type: blu_interface_1.BLU.Item.Type.Chain, name: t.name, description: t.description, collectionName: t.collectionName, alias: t.chainConfig.alias, isSeed: false })));
    }
    getInstalledCollections() {
        try {
            fs_extra_1.ensureDirSync(globals_1.USER_BLUEPRINTS_PATH);
            return file_system_1.FileSystem.getDirectoriesSync(globals_1.USER_BLUEPRINTS_PATH).map(collection => ({ name: collection, path: path_1.join(globals_1.USER_BLUEPRINTS_PATH, collection) }));
        }
        catch (e) {
            logger_1.Logger.logError(e);
        }
    }
    /**
     * External collections are collections that are NOT found in the BLUEPRINTS_DIR_NAME folder. They are located somewhere else.
     */
    getExternalCollections() {
        const externalCollections = [];
        this.config.collections.forEach(collection => {
            const name = collection.name || file_system_1.FileSystem.getLastDirectoryName(collection.path);
            const collectionPath = collection.path;
            const absCollectionPath = file_system_1.FileSystem.isAbsolutePath(collectionPath) ? collectionPath : path_1.join(globals_1.ROOT_PATH, collectionPath);
            if (file_system_1.FileSystem.dirExistsSync(absCollectionPath)) {
                externalCollections.push({ name, path: absCollectionPath });
            }
            else {
                logger_1.Logger.logWarning(`Path: ${collectionPath} for collection ${name} does not exist.`);
            }
        });
        return externalCollections;
    }
    setConfigFile() {
        const configPath = `${globals_1.USER_BLUEPRINTS_PATH}/${globals_1.CONFIG_FILE_NAME}`;
        const { error, config } = file_system_1.FileSystem.getConfigFileSync(configPath);
        if (error) {
            console.log(chalk_1.default.red(`Blueprints .config.json file found but invalid JSON format present. Correct or remove file.`));
            console.log(chalk_1.default.red(`Common mistakes: single quotes instead of double quotes, quotes missing, extra comma (,)`));
            console.log(chalk_1.default.grey(`Location: ${configPath}`));
            process.exit();
        }
        else {
            this.config = config || this.getDefaultConfig();
        }
    }
    getDefaultConfig() {
        return {
            collections: [],
        };
    }
}
exports.Blueprint = Blueprint;
//# sourceMappingURL=blueprint.model.js.map