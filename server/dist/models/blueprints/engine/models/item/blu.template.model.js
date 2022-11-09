"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUTemplateModel = void 0;
const file_system_1 = require("../../lib/file-system");
const blu_interface_1 = require("../../../../../shared/interfaces/blu.interface");
const path_1 = require("path");
const blu_base_model_1 = require("./blu.base.model");
const util_1 = require("../../../../../shared/lib/util");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const blu_utils_model_1 = require("../blu.utils.model");
class BLUTemplateModel extends blu_base_model_1.BLUBaseModel {
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
            const filePath = (0, path_1.join)(this.paths.files, path, newFileName);
            (0, fs_1.writeFileSync)(filePath, '');
            return { error: null, data: { success: true } };
        }
        catch (error) {
            return { error: { status: 400, code: 'create-file-error', message: `Could not create file ${newFileName}`, data: error }, data: { success: false } };
        }
    }
    copyCodebasePaths(filePaths, destinationPath) {
        try {
            const overwriteFiles = [];
            for (let i = 0; i < filePaths.length; i++) {
                const destinationFile = (0, path_1.join)(destinationPath, (0, path_1.basename)(filePaths[i]));
                if ((0, fs_extra_1.existsSync)(destinationFile)) {
                    overwriteFiles.push((0, path_1.basename)(filePaths[i]));
                }
            }
            if (overwriteFiles.length === 0) {
                filePaths === null || filePaths === void 0 ? void 0 : filePaths.forEach(filePath => {
                    (0, fs_extra_1.copySync)(filePath, (0, path_1.join)(destinationPath, (0, path_1.basename)(filePath)));
                });
                return { error: null, data: { success: true } };
            }
            else {
                return { error: { status: 400, code: 'overwrite-error', message: `File`, data: { overwriteFiles } }, data: { success: false } };
            }
        }
        catch (error) {
            return { error: { status: 400, code: 'create-file-error', message: `Could not copy codebase files`, data: error }, data: { success: false } };
        }
    }
    createNewFolder(newFolderName, path = '') {
        try {
            const filePath = (0, path_1.join)(this.paths.files, path, newFolderName);
            (0, fs_extra_1.ensureDirSync)(filePath);
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
        this.config = Object.assign({}, BLUTemplateModel.defaultConfig, (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.config)) !== null && _a !== void 0 ? _a : {});
        let chainedTemplates = (_b = blu_utils_model_1.BLUUtils.loadJSONFile(this.paths.chainedTemplates)) !== null && _b !== void 0 ? _b : [];
        if (!Array.isArray(chainedTemplates)) {
            chainedTemplates = [];
        }
        this.chainedTemplates = chainedTemplates;
        this.loadSupportingFiles();
    }
    setPaths() {
        const parentPath = this.parent.paths.templates;
        const selfPath = (0, path_1.join)(parentPath, this.baseId);
        this.paths = {
            parent: parentPath,
            self: selfPath,
            files: (0, path_1.join)(selfPath, 'files'),
            functions: (0, path_1.join)(selfPath, 'functions'),
            config: (0, path_1.join)(selfPath, 'config.json'),
            links: (0, path_1.join)(selfPath, 'links.json'),
            variables: (0, path_1.join)(selfPath, 'variables.json'),
            readme: (0, path_1.join)(selfPath, 'readme.md'),
            chainedTemplates: (0, path_1.join)(selfPath, 'chainedTemplates.json'),
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
        return (0, util_1.UUIDLong)();
    }
    static createTemplate(path, name, parent, files) {
        const templateId = BLUTemplateModel.newId();
        const templatePath = (0, path_1.join)(path, templateId);
        try {
            // ensure the directory is created
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(templatePath));
            // create template files [config.json, readme.md, variables.json]
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(templatePath, 'config.json'), Object.assign({}, BLUTemplateModel.defaultConfig, { name }));
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(templatePath, 'variables.json'), {});
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(templatePath, 'links.json'), {});
            (0, fs_extra_1.writeJSONSync)((0, path_1.join)(templatePath, 'chainedTemplates.json'), []);
            (0, fs_1.writeFileSync)((0, path_1.join)(templatePath, 'readme.md'), '');
            // create the other sub directories
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(templatePath, 'functions'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(templatePath, 'snippets'));
            (0, fs_extra_1.ensureDirSync)((0, path_1.join)(templatePath, 'files'));
            files === null || files === void 0 ? void 0 : files.forEach(file => {
                const fileDestination = (0, path_1.join)(templatePath, 'files', file.destination);
                (0, fs_extra_1.copySync)(file.origin, fileDestination);
            });
            return { error: null, data: new BLUTemplateModel(templateId, parent) };
        }
        catch (error) {
            return { error, data: null };
        }
    }
    static copyTemplate(template, destination, parent, newName) {
        try {
            const newTemplateId = BLUTemplateModel.newId();
            (0, fs_extra_1.copySync)(template.paths.self, (0, path_1.join)(destination, `./${newTemplateId}`));
            const newTemplate = new BLUTemplateModel(newTemplateId, parent);
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
exports.BLUTemplateModel = BLUTemplateModel;
//# sourceMappingURL=blu.template.model.js.map