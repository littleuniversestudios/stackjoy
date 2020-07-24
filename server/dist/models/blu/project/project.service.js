"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
const firebase_1 = require("../../../lib/firebase");
const fs_1 = require("fs");
const template_service_1 = require("../template/template.service");
const project_file_service_1 = require("../project-file/project-file.service");
const path_1 = require("path");
const templateService = new template_service_1.TemplateService();
const projectFileService = new project_file_service_1.ProjectFileService();
class ProjectService {
    findAll() {
        return blu_handler_1.bluHandler('api collection-list');
    }
    findById(projectName) {
        return blu_handler_1.bluHandler(`api collection ${projectName}`);
    }
    create(projectAttributes) {
        return null;
    }
    update(projectId, projectAttributes) {
        return null;
    }
    delete(projectId) {
        return null;
    }
    async publish(projectName, body) {
        const response = this.findById(projectName);
        if (response.error) {
            return response;
        }
        else {
            let result = { error: null, data: null };
            const project = response.data;
            const { templates, name, description } = project;
            const created = Date.now();
            const updated = Date.now();
            const version = 1;
            const owner = body.owner; // todo: get user id from firebase.auth() directly instead of from client (this is temporary until single sign on gets fixed)
            // const projectMetadata = Object.assign({}, { templates, name, description, created, updated, version, owner, public: true, isSeed: !!project.collectionConfig.isSeed });
            const projectMetadata = Object.assign({}, { templates, name, description, created, updated, version, owner, public: true });
            await firebase_1.firebaseDB.collection('collections')
                .add(projectMetadata)
                .then(fbResponse => {
                // project.collectionConfig.stackjoy = { id: fbResponse.id, created, updated, version, owner };
                result.data = project;
                const collectionRef = firebase_1.firebaseStorage.ref().child(`collections`).child(`${fbResponse.id}_${version}`);
                // store local collection config with updated info from stackjoy
                projectFileService.update({ path: path_1.join(project.path, '.config.json'), contents: JSON.stringify(project.collectionConfig, null, 2) });
                // read collection files
                const collectionFiles = ['.config.json', '.readme.md', '.formats.js'];
                // upload collection files ['.config.json', '.readme.md', '.formats.js'];
                collectionFiles.forEach(async (filename) => {
                    const fileAbsolutePath = path_1.join(project.path, filename);
                    try {
                        const fileData = fs_1.readFileSync(fileAbsolutePath);
                        const fileRef = collectionRef.child(filename);
                        await fileRef.put(fileData);
                    }
                    catch (e) {
                        // catch error if there is no .config.json | '.readme.md', '.formats.js'
                        // basically file doesn't exist (because they aren't mandatory)
                    }
                });
                // upload collection templates and files in the templates
                project.templates.forEach(template => {
                    const templateRef = collectionRef.child(`${template.templateName}`);
                    const templateData = templateService.findByName(`${template.collectionName}.${template.templateName}`);
                    templateData.data.templateFiles.forEach(async (file) => {
                        const fileData = fs_1.readFileSync(file.absolutePath);
                        const fileRef = templateRef.child(file.filename);
                        await fileRef.put(fileData);
                    });
                });
            })
                .catch(err => result.error = err);
            return result;
            // firebaseDB.collection('projects')
            //     .doc(`ObUudwmTX9lS2QvRlwHc`)
            //     .update({
            //         one: 12,
            //         two: 5
            //     })
            //     .then(data => console.log('----->', data))
        }
    }
    async uploadProject() {
    }
}
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map