"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionConfig = void 0;
const collection_config_1 = require("./defaults/collection.config");
const base_config_model_1 = require("./base.config.model");
class CollectionConfig extends base_config_model_1.Config {
    constructor(path) {
        super(path, collection_config_1.config);
    }
    get chains() {
        return this.config.chains;
    }
}
exports.CollectionConfig = CollectionConfig;
//# sourceMappingURL=collection.config.model.js.map