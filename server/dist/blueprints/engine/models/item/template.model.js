"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModel = void 0;
const file_system_1 = require("../../lib/file-system");
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const path_1 = require("path");
const base_model_1 = require("./base.model");
const util_1 = require("../../../../shared/lib/util");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const blu_utils_model_1 = require("../blu-utils.model");
class TemplateModel extends base_model_1.BaseModel {
    constructor(baseId, parent) {
        super(blu_interface_1.BLU.Item.Type.Template);
        this.baseId = baseId;
        this.parent = parent;
        this.init();
    }
    get metadata() {
        return Object.assign({}, this.info, { fileTree: this.getFileTree() });
    }
    get info() {
        return Object.assign({}, super.info, { chainedTemplates: this.chainedTemplates });
    }
    get collectionName() {
        return this.parent.name;
    }
    getFileList() {
        return file_system_1.BLUFileSystem.fileList(this.paths.files);
    }
    getFileTree(ignoreFiles = []) {
        return file_system_1.BLUFileSystem.fileTree(this.paths.files, ignoreFiles);
    }
    get name() {
        return this.config.name;
    }
    set name(name) {
        this.config.name = name;
    }
    renameTemplate(name) {
        this.name = name;
        return this.updateConfig(this.config);
    }
    createNewFile(newFileName, path = '') {
        try {
            const filePath = path_1.join(this.paths.files, path, newFileName);
            fs_1.writeFileSync(filePath, '');
            return { error: null, data: { success: true } };
        }
        catch (error) {
            return { error: { status: 400, code: 'create-file-error', message: `Could not create file ${newFileName}`, data: error }, data: { success: false } };
        }
    }
    createNewFolder(newFolderName, path = '') {
        try {
            const filePath = path_1.join(this.paths.files, path, newFolderName);
            fs_extra_1.ensureDirSync(filePath);
            return { error: null, data: { success: true } };
        }
        catch (error) {
            return { error: { status: 400, code: 'create-folder-error', message: `Could not create folder ${newFolderName}`, data: error }, data: { success: false } };
        }
    }
    updateChainedTemplates(chainedTemplates) {
        this.chainedTemplates = chainedTemplates;
        return this.saveChainedTemplates();
    }
    /**
     * PRIVATE MEMBERS
     */
    init() {
        var _a, _b;
        this.setPaths();
        this.config = Object.assign({}, TemplateModel.defaultConfig, (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.config)) !== null && _a !== void 0 ? _a : {});
        let chainedTemplates = (_b = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.chainedTemplates)) !== null && _b !== void 0 ? _b : [];
        if (!Array.isArray(chainedTemplates)) {
            chainedTemplates = [];
        }
        this.chainedTemplates = chainedTemplates;
        this.loadSupportingFiles();
    }
    setPaths() {
        const parentPath = this.parent.paths.templates;
        const selfPath = path_1.join(parentPath, this.baseId);
        this.paths = {
            parent: parentPath,
            self: selfPath,
            files: path_1.join(selfPath, 'files'),
            functions: path_1.join(selfPath, 'functions'),
            config: path_1.join(selfPath, 'config.json'),
            links: path_1.join(selfPath, 'links.json'),
            variables: path_1.join(selfPath, 'variables.json'),
            readme: path_1.join(selfPath, 'readme.md'),
            chainedTemplates: path_1.join(selfPath, 'chainedTemplates.json'),
        };
        this.assertPaths();
    }
    saveChainedTemplates() {
        return this.saveJSONFile(this.paths.chainedTemplates, this.chainedTemplates);
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
    static createTemplate(path, name, parent, files) {
        const templateId = TemplateModel.newId();
        const templatePath = path_1.join(path, templateId);
        try {
            // ensure the directory is created
            fs_extra_1.ensureDirSync(path_1.join(templatePath));
            // create template files [config.json, readme.md, variables.json]
            fs_extra_1.writeJSONSync(path_1.join(templatePath, 'config.json'), Object.assign({}, TemplateModel.defaultConfig, { name }));
            fs_extra_1.writeJSONSync(path_1.join(templatePath, 'variables.json'), {});
            fs_extra_1.writeJSONSync(path_1.join(templatePath, 'links.json'), {});
            fs_extra_1.writeJSONSync(path_1.join(templatePath, 'chainedTemplates.json'), []);
            fs_1.writeFileSync(path_1.join(templatePath, 'readme.md'), '');
            // create the other sub directories
            fs_extra_1.ensureDirSync(path_1.join(templatePath, 'functions'));
            fs_extra_1.ensureDirSync(path_1.join(templatePath, 'snippets'));
            fs_extra_1.ensureDirSync(path_1.join(templatePath, 'files'));
            files === null || files === void 0 ? void 0 : files.forEach(file => {
                const fileDestination = path_1.join(templatePath, 'files', file.destination);
                fs_extra_1.copySync(file.origin, fileDestination);
            });
            return { error: null, data: new TemplateModel(templateId, parent) };
        }
        catch (error) {
            return { error, data: null };
        }
    }
    static copyTemplate(template, destination, parent, newName) {
        try {
            const newTemplateId = TemplateModel.newId();
            fs_extra_1.copySync(template.paths.self, path_1.join(destination, `./${newTemplateId}`));
            const newTemplate = new TemplateModel(newTemplateId, parent);
            if (newName) {
                newTemplate.renameTemplate(newName);
            }
            return { error: null, data: { success: true } };
        }
        catch (error) {
            return { error: { status: 400, code: 'template-duplicate-error', message: `Error occurred trying to duplicate template with id: '${template.id}'`, error }, data: { success: false } };
        }
    }
}
exports.TemplateModel = TemplateModel;
//# sourceMappingURL=template.model.js.map