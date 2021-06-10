"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainConfig = void 0;
const chain_config_1 = require("./defaults/chain.config");
const base_config_model_1 = require("./base.config.model");
class ChainConfig extends base_config_model_1.Config {
    constructor(chainConfig, path) {
        super(path, chain_config_1.config);
        this.chainConfig = chainConfig;
        this.loadConfig();
    }
    loadConfig() {
        var _a;
        this.config = Object.assign({}, chain_config_1.config, (_a = this.chainConfig) !== null && _a !== void 0 ? _a : {});
    }
    get name() {
        return this.config.name;
    }
    get settings() {
        return this.config.settings;
    }
    get commands() {
        return this.config.commands;
    }
}
exports.ChainConfig = ChainConfig;
//# sourceMappingURL=chain.config.model.js.map