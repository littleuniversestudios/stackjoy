"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("../../../lib/firebase");
const fs = require("fs");
const https = require("https");
const lodash_1 = require("lodash");
const path_1 = require("path");
const blu_handler_1 = require("../../../lib/blu-handler");
class StackjoyProjectService {
    async findAll(term = null, name = null, id = null) {
        let items = [];
        if (name) {
            items = await this.findByName(name);
        }
        else {
            const querySnapshot = await firebase_1.firebaseDB.collection("collections").get();
            items = this.extractSnapshot(querySnapshot);
        }
        return items;
    }
    async findById(stackjoyProjectId) {
        return null;
    }
    async findByName(name) {
        const querySnapshot = await firebase_1.firebaseDB.collection("collections")
            .where('name', '==', name).get();
        return this.extractSnapshot(querySnapshot);
    }
    extractSnapshot(querySnapshot) {
        const items = [];
        querySnapshot.forEach((doc) => {
            items.push(Object.assign({}, { id: doc.id }, doc.data()));
        });
        return items;
    }
    /**
     * DOWNLOAD PROJECT
     */
    async download(stackjoyProjectId, givenName, version, overwrite = false, isSeed) {
        let error = null;
        let files = [];
        const bluResponse = blu_handler_1.bluHandler('blu api metadata');
        if (bluResponse.error) {
            error = bluResponse.error;
        }
        else {
            const bluMetadata = bluResponse.data;
            /** check if project exists on disk! fail the process if it does...unless overwrite is set to true **/
            // console.log('', fs.existsSync(join(bluMetadata.bluPath, isSeed ? 'seeds' : '', givenName)))
            if (fs.existsSync(path_1.join(bluMetadata.bluPath, isSeed ? 'seeds' : '', givenName)) && overwrite !== true) {
                error = {
                    status: 400,
                    code: 'download-project-exists',
                    message: `${isSeed ? 'seed' : 'Collection'} '${givenName}' already exists on your local system.`
                };
            }
            else {
                const projectId = `${stackjoyProjectId}_${version}`;
                const fileURLs = await this.getAllProjectFileURLs(`collections/${projectId}`);
                files = this.getFileMetadata(fileURLs, projectId);
                await this.downloadProject(givenName, files, bluMetadata, isSeed);
            }
        }
        return { data: { projectName: givenName, files }, error };
    }
    /**
     * Recursively traverse the project files. 'Prefixes' are folders in firebase terms. 'Items' are actual files. Store each item (file)
     * and if prefixes (folders) are encountered dive into each folder (recursively) and extract the items (files)
     */
    async getAllProjectFileURLs(path) {
        const fileURLs = [];
        const result = await firebase_1.firebaseStorage.ref().child(path).listAll();
        fileURLs.push(...await Promise.all(result.prefixes.map(async (folder) => await this.getAllProjectFileURLs(folder.fullPath))));
        fileURLs.push(...await Promise.all(result.items.map(async (item) => await item.getDownloadURL())));
        return lodash_1.flattenDeep(fileURLs);
    }
    getFileMetadata(fileURLs, projectId) {
        const bucketName = firebase_1.firebaseStorage.ref().bucket;
        const fileMetadata = [];
        fileURLs.map(url => {
            /**
             * strip the url down to the relative file path. This could also be done by calling getMetadata() on each file
             * but then you take a double hit with Firebase for calling the metadata with getDownloadURL(). This way works
             * just not as clean as getting the info from the source
             */
            let fileParts = url.split(bucketName)[1].split('collections')[1].split('?');
            const filePath = decodeURIComponent(fileParts[0]).split(projectId)[1];
            const pathParts = filePath.split('/');
            const relativePath = pathParts.slice(0, pathParts.length - 1).join('/');
            const filename = pathParts[pathParts.length - 1];
            fileMetadata.push({ url, relativePath, filename });
        });
        return fileMetadata;
    }
    async downloadProject(projectName, files, bluMetadata, isSeed = false) {
        for (const file of files) {
            try {
                const directory = path_1.join(bluMetadata.bluPath, isSeed ? 'seeds' : '', projectName, file.relativePath);
                const destination = path_1.join(directory, file.filename);
                if (!fs.existsSync(directory)) {
                    fs.mkdirSync(directory, { recursive: true });
                }
                await this.downloadFile(file.url, destination);
                file.created = true;
                file.destination = destination;
            }
            catch (err) {
                file.error = err;
            }
        }
    }
    async downloadFile(url, destination) {
        return new Promise((resolve, reject) => {
            const file = fs.createWriteStream(destination);
            https.get(url, (response) => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve({ created: true });
                });
            }).on('error', (err) => {
                fs.unlinkSync(destination);
                reject(err);
            });
        });
    }
    ;
    create(stackjoyProjectAttributes) {
        return null;
    }
    update(stackjoyProjectId, stackjoyProjectAttributes) {
        return null;
    }
    delete(stackjoyProjectId) {
        return null;
    }
}
exports.StackjoyProjectService = StackjoyProjectService;
/**

 https://firebasestorage.googleapis.com/v0/b/stackjoy-c0059.appspot.com/o/projects%2FGMLlfiHhnbeguR2psmve_1%2Ftest%2F.config.json?alt=media&token=aa29585c-cab9-4b1b-bd4b-4682360517e1
 firebaseStorage.ref().child('projects').child('GMLlfiHhnbeguR2psmve_1/test/test.txt').getDownloadURL().then(async (url) => {
        console.log('------->', url)
        const p = await this.downloadFile(url, `/Users/nvitas/lus/git/stackjoy/server/src/temp/testaaaaabbb1.txt`)
        console.log('pppppppp:', p)
        const g = await this.downloadFile('https://22.com/a', `/Users/nvitas/lus/git/stackjoy/server/src/temp/testaaaaabbb2.txt`)
        console.log('gggg:', g)
        this.downloadFile1(url, `/Users/nvitas/lus/git/stackjoy/server/src/temp/testaaaaabbb.txt`, () => {
        })
    });
 firebaseStorage.ref().child('projects').child('GMLlfiHhnbeguR2psmve_1/test/').listAll().then((url) => {
        console.log('mmm------->', url.items.forEach(p => p.getMetadata().then(m => console.log('', m))))
    });
 firebaseStorage.ref().child('projects').child('GMLlfiHhnbeguR2psmve_1/test/test.txt').getMetadata().then((url) => {
        console.log('mmm------->', url)
    });
 */
//# sourceMappingURL=stackjoy-project.service.js.map