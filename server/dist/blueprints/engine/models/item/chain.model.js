"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainModel = void 0;
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const base_model_1 = require("./base.model");
const chain_config_model_1 = require("../config/chain.config.model");
class ChainModel extends base_model_1.BaseModel {
    constructor(chainConfig, parent, path) {
        super(blu_interface_1.BLU.Item.Type.Chain);
        this.parent = parent;
        this.path = path;
        this.config = new chain_config_model_1.ChainConfig(chainConfig, this.path);
        this.name = this.config.name;
    }
    get info() {
        return Object.assign({}, super.info, { commands: this.commands });
    }
    get collectionName() {
        return this.parent.name;
    }
    get commands() {
        return this.config.commands;
    }
}
exports.ChainModel = ChainModel;
//# sourceMappingURL=chain.model.js.map