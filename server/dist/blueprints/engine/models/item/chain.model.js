"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainModel = void 0;
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const base_model_1 = require("./base.model");
const util_1 = require("../../../../shared/lib/util");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const blu_utils_model_1 = require("../blu-utils.model");
class ChainModel extends base_model_1.BaseModel {
    constructor(baseId, parent) {
        super(blu_interface_1.BLU.Item.Type.Chain);
        this.baseId = baseId;
        this.parent = parent;
        this.init();
    }
    get info() {
        return Object.assign({}, super.info, { commands: this.commands });
    }
    get collectionName() {
        return this.parent.name;
    }
    get name() {
        return this.config.name;
    }
    set name(name) {
        this.config.name = name;
    }
    renameChain(name) {
        this.name = name;
        return this.updateConfig(this.config);
    }
    updateCommands(commands) {
        this.commands = commands;
        return this.saveCommands();
    }
    renameIds(oldCollectionId, newCollectionId) {
        this.commands.forEach(command => command.command.replace(oldCollectionId, newCollectionId));
        this.saveCommands();
    }
    /**
     * PRIVATE MEMBERS
     */
    init() {
        var _a, _b;
        this.setPaths();
        this.config = Object.assign({}, ChainModel.defaultConfig, (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.config)) !== null && _a !== void 0 ? _a : {});
        this.commands = (_b = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.commands)) !== null && _b !== void 0 ? _b : [];
        this.loadSupportingFiles();
    }
    setPaths() {
        const parentPath = this.parent.paths.chains;
        const selfPath = path_1.join(parentPath, this.baseId);
        this.paths = {
            self: selfPath,
            parent: parentPath,
            functions: path_1.join(selfPath, 'functions'),
            commands: path_1.join(selfPath, 'commands.json'),
            config: path_1.join(selfPath, 'config.json'),
            links: path_1.join(selfPath, 'links.json'),
            variables: path_1.join(selfPath, 'variables.json'),
            readme: path_1.join(selfPath, 'readme.md'),
        };
        this.assertPaths();
    }
    saveCommands() {
        return this.saveJSONFile(this.paths.commands, this.commands);
    }
    /**
     * STATIC MEMBERS
     */
    static get defaultConfig() {
        return {
            name: '',
            filenames: '',
            description: '',
            onSuccess: '',
        };
    }
    static newId() {
        return util_1.UUIDLong();
    }
    static createChain(path, name, parent) {
        const chainId = ChainModel.newId();
        const chainPath = path_1.join(path, chainId);
        try {
            // ensure the directory is created
            fs_extra_1.ensureDirSync(path_1.join(chainPath));
            // create workspace files [config.json, readme.md, variables.json]
            fs_extra_1.writeJSONSync(path_1.join(chainPath, 'config.json'), Object.assign({}, ChainModel.defaultConfig, { name }));
            fs_extra_1.writeJSONSync(path_1.join(chainPath, 'commands.json'), []);
            fs_extra_1.writeJSONSync(path_1.join(chainPath, 'variables.json'), {});
            fs_extra_1.writeJSONSync(path_1.join(chainPath, 'links.json'), {});
            fs_1.writeFileSync(path_1.join(chainPath, 'readme.md'), '');
            // create the other sub directories
            fs_extra_1.ensureDirSync(path_1.join(chainPath, 'functions'));
            fs_extra_1.ensureDirSync(path_1.join(chainPath, 'snippets'));
            return { error: null, data: new ChainModel(chainId, parent) };
        }
        catch (error) {
            return { error, data: null };
        }
    }
}
exports.ChainModel = ChainModel;
//# sourceMappingURL=chain.model.js.map