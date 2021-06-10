"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const fs_1 = require("fs");
const base_config_1 = require("./defaults/base.config");
const CONFIG_FILE_NAME = '.config.json';
class Config {
    constructor(path, defaultConfig = base_config_1.config) {
        this.defaultConfig = defaultConfig;
        this.path = `${path}/${CONFIG_FILE_NAME}`;
        this.loadConfig();
    }
    get settings() {
        return this.config.settings;
    }
    get inputs() {
        return this.config.inputs;
    }
    get variables() {
        return this.config.variables;
    }
    get functions() {
        return this.config.functions;
    }
    get snippets() {
        return this.config.snippets;
    }
    get links() {
        return this.config.links;
    }
    get readme() {
        return this.config.info;
    }
    loadConfig() {
        const { error, config } = this.getConfigFileSync(this.path);
        this.error = error;
        this.config = Object.assign({}, this.defaultConfig, config !== null && config !== void 0 ? config : {});
    }
    saveConfig() {
        let configText;
        try {
            configText = JSON.stringify(this.config, null, 2);
        }
        catch (e) {
            console.log('%%%%%%%%%%%%%%%%%%%%%% SAVE CONFIG ERROR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            console.log(e);
            console.log('%%%%%%%%%%%%%%%%%%%%% /SAVE CONFIG ERROR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            return { error: { type: blu_interface_1.BLU.Config.ErrorType.Stringify, message: 'Error saving config file', data: e }, success: false };
        }
        try {
            if (configText) {
                fs_1.writeFileSync(this.path, configText);
            }
        }
        catch (e) {
            console.log('%%%%%%%%%%%%%%%%%%%%%% SAVE CONFIG ERROR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            console.log(e);
            console.log('%%%%%%%%%%%%%%%%%%%%% /SAVE CONFIG ERROR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
            return { error: { type: blu_interface_1.BLU.Config.ErrorType.Store, message: 'Error saving config file', data: e }, success: false };
        }
    }
    getConfigFileSync(source, fileFormat = 'utf8') {
        let configFile;
        try {
            configFile = fs_1.readFileSync(source, fileFormat);
        }
        catch (e) {
            return { error: blu_interface_1.BLU.Config.ErrorType.Load, config: null };
        }
        try {
            const configFileJSON = JSON.parse(configFile);
            return { error: null, config: configFileJSON };
        }
        catch (e) {
            return { error: blu_interface_1.BLU.Config.ErrorType.Parse, config: null };
        }
    }
    ;
    updateInfo(text) {
        this.config.info = text;
        this.saveConfig();
    }
}
exports.Config = Config;
//# sourceMappingURL=base.config.model.js.map