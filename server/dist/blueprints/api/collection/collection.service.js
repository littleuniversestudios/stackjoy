"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionService = void 0;
const globals_1 = require("../../../globals");
const fs_extra_1 = require("fs-extra");
class CollectionService {
    findAll() {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        return { error: null, data: bluService.getCollections() };
    }
    // public findByName(templateName: string) {
    //     const bluService = WORKSPACE.getBlueprints();
    //     return { error: null, data: bluService.getTemplate(templateName) };
    // }
    // public create(newTemplate: { collectionName: string, templateName: string, files?: string[], isSeed?: boolean }) {
    //     const bluService = new Blueprints(ROOT_DIR);
    //     let error = null;
    //     let createdTemplate = null;
    //     const destination = join(bluService.BLUDir, newTemplate.collectionName, newTemplate.templateName);
    //
    //     if (fs.existsSync(destination)) {
    //         let message = newTemplate.isSeed ? `Seed '${newTemplate.templateName}'` : `Template '${newTemplate.templateName}' in collection ${newTemplate.collectionName}`
    //         message += ' already exists on your local system.';
    //         error = {
    //             status: 400,
    //             code: newTemplate.isSeed ? 'seed-exists' : 'template-exists',
    //             message
    //         }
    //     } else {
    //         const prefix = commonPrefix(newTemplate.files || []);
    //         mkdirSync(destination);
    //         writeFileSync(join(destination, '.config.json'), JSON.stringify(newTemplate.isSeed ? { isSeed: true } : {}, null, 2));
    //         newTemplate.files.forEach(filePath => {
    //             const fileName = (!isDirectorySync(filePath) && filePath === prefix) ? getLastDirectoryName(filePath) : filePath.substring(prefix.length);
    //             const fileDestination = join(destination, fileName);
    //             copySync(filePath, fileDestination);
    //         });
    //         createdTemplate = this.findByName(`${newTemplate.collectionName}.${newTemplate.templateName}`);
    //     }
    //
    //     return createdTemplate ? createdTemplate : { error, data: null };
    // }
    //
    // public update(templateId: number, templateAttributes) {
    //     return null;
    // }
    //
    deleteCollection(id) {
        const bluService = globals_1.APP_ENVIRONMENT.getBlueprints();
        const collection = bluService.getItemById(id)[0];
        if (collection) {
            try {
                fs_extra_1.removeSync(collection.info.path);
                return { error: null, data: { success: true } };
            }
            catch (error) {
                return { error: { status: 400, code: 'collection-delete-error', message: `Error occurred trying to delete collection with id: '${id}'` }, data: error };
            }
        }
        else {
            return { error: { status: 400, code: 'collection-not-found', message: `Collection with id: '${id}' was not found.` }, data: null };
        }
    }
}
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map