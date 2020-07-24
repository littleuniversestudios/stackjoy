"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintCollection = void 0;
const chalk_1 = require("chalk");
const globals_1 = require("../context/globals");
const template_variable_formats_1 = require("../lib/template-variable-formats");
const template_chain_model_1 = require("./template-chain.model");
const file_system_1 = require("../lib/file-system");
const template_metadata_model_1 = require("./template-metadata.model");
class BlueprintCollection {
    constructor(name, collectionPath) {
        this.name = name;
        this.collectionPath = collectionPath;
        this.templates = [];
        this.chains = [];
        this.init();
    }
    getTemplates(templateName) {
        return this.templates.filter(template => template.templateName === templateName || template.hasAlias(templateName));
    }
    init() {
        this.setConfigFile();
        this.getUserDefinedVariableFormats();
        this.initTemplates();
        this.initChains();
    }
    initTemplates() {
        const templateDirs = file_system_1.FileSystem.getDirectoriesSync(this.collectionPath);
        this.templates = templateDirs.map(templateDir => new template_metadata_model_1.TemplateMetadata(this.name, templateDir, this.collectionPath, this.collectionConfig));
    }
    initChains() {
        this.chains = this.collectionConfig.chains.map(chainConfig => new template_chain_model_1.TemplateChain(this.name, chainConfig, this.collectionConfig));
    }
    setConfigFile() {
        const configPath = `${this.collectionPath}/${globals_1.CONFIG_FILE_NAME}`;
        const { error, config } = file_system_1.FileSystem.getConfigFileSync(configPath);
        if (error) {
            console.log(chalk_1.default.red(`Collection [${this.name}] .config.json file found but invalid JSON format present. Correct or remove file`));
            console.log(chalk_1.default.red(`Common mistakes: single quotes instead of double quotes, quotes missing, extra comma (,)`));
            console.log(chalk_1.default.grey(`Location: file://${configPath}`));
            process.exit();
        }
        else {
            const collectionConfig = config || {};
            this.collectionConfig = Object.assign({}, this.getDefaultConfig(), collectionConfig);
        }
    }
    getUserDefinedVariableFormats() {
        const templateFormats = file_system_1.FileSystem.getFormatsFileSync(`${this.collectionPath}/${globals_1.FORMATS_FILE_NAME}`);
        if (templateFormats) {
            template_variable_formats_1.setFormatters(templateFormats);
        }
    }
    getDefaultConfig() {
        return {
            description: '',
            filename: null,
            delimiter: {
                start: '%',
                end: '%',
            },
            chains: [],
            globals: [],
            repeaters: [],
        };
    }
}
exports.BlueprintCollection = BlueprintCollection;
//# sourceMappingURL=collection.model.js.map