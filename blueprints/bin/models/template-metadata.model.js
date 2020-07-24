"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateMetadata = void 0;
const chalk_1 = require("chalk");
const globals_1 = require("../context/globals");
const file_system_1 = require("../lib/file-system");
class TemplateMetadata {
    constructor(collectionName, templateName, collectionPath, collectionConfig) {
        this.collectionName = collectionName;
        this.templateName = templateName;
        this.collectionPath = collectionPath;
        this.collectionConfig = collectionConfig;
        this.templatePath = `${this.collectionPath}/${this.templateName}`;
        this.setConfigFile();
        this.isSeed = !!this.templateConfig.isSeed;
        this.description = this.templateConfig.description;
        this.aliases = this.templateConfig.alias;
        this.isSeed = !!this.templateConfig.isSeed;
    }
    hasAlias(alias) {
        return this.aliases.includes(alias);
    }
    setConfigFile() {
        const configPath = `${this.templatePath}/${globals_1.CONFIG_FILE_NAME}`;
        const { error, config } = file_system_1.FileSystem.getConfigFileSync(configPath);
        if (error) {
            console.log(chalk_1.default.red(`Template [${this.templateName}] .config.json file found but invalid JSON format present. Correct or remove file.`));
            console.log(chalk_1.default.red(`Common mistakes: single quotes instead of double quotes, quotes missing, extra comma (,)`));
            console.log(chalk_1.default.grey(`Location: file://${configPath}`));
            process.exit();
        }
        else {
            const templateConfig = config || {};
            const collectionConfig = Object.assign({}, this.collectionConfig);
            delete collectionConfig.repeaters;
            delete collectionConfig.chains;
            delete collectionConfig.globals;
            this.templateConfig = Object.assign({}, this.getDefaultConfig(), collectionConfig, templateConfig);
        }
    }
    getDefaultConfig() {
        return {
            description: '',
            alias: [],
            onSuccess: null,
            filename: null,
            destination: null,
            delimiter: {
                start: '%',
                end: '%',
            },
            files: [],
            args: [],
            repeaters: [],
            globals: [],
            links: [],
            commands: [],
            usage: [],
        };
    }
}
exports.TemplateMetadata = TemplateMetadata;
//# sourceMappingURL=template-metadata.model.js.map