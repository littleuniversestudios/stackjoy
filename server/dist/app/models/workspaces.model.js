"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspaces = void 0;
const globals_1 = require("../../globals");
const path_1 = require("path");
const fs_extra_1 = require("fs-extra");
const fs_1 = require("fs");
const util_1 = require("../../shared/lib/util");
/**
 * .../stackjoy/workspaces/${workspace_id}/blueprints
 *                                     .../metadata.json
 *                                     .../data.json
 *                                     .../log.json
 *                                     .../state.json
 *
 *
 */
class Workspaces {
    constructor() {
        this.workspacesPath = path_1.join(globals_1.ENVIRONMENT.path.data, 'workspaces');
        this.stacksPath = path_1.join(globals_1.ENVIRONMENT.path.data, 'stacks');
        this.list = [];
        this.init();
    }
    init() {
        fs_extra_1.ensureDirSync(this.workspacesPath);
        fs_extra_1.ensureDirSync(this.stacksPath);
        this.createListOfWorkspaces();
    }
    createListOfWorkspaces() {
        const workspaceDirs = fs_1.readdirSync(this.workspacesPath);
        workspaceDirs.forEach(dir => {
            const path = path_1.join(this.workspacesPath, dir);
            if (util_1.isDirectorySync(path)) {
                // todo: eventually catch the error if the file not found or json not readable and notify the user
                const workspaceMetadata = fs_extra_1.readJsonSync(path_1.join(path, 'metadata.json'), { throws: false });
                if (workspaceMetadata) {
                    this.list.push(workspaceMetadata);
                }
            }
        });
    }
    findCodebasePath(codebasePath) {
        let metadata;
        const codebaseParts = codebasePath.split(path_1.sep);
        while (codebaseParts.length > 0 && !metadata) {
            const path = codebaseParts.join(path_1.sep);
            codebaseParts.pop();
            if (!!path) {
                metadata = this.list.find(metadata => metadata.codebasePath === path);
            }
        }
        return metadata;
    }
    createLocalWorkspace(codebasePath, name) {
        const id = util_1.UUIDShort();
        const workspacePath = path_1.join(this.workspacesPath, id);
        name = name !== null && name !== void 0 ? name : `${util_1.getLastDirectoryName(codebasePath)}-local`;
        const metadata = {
            id,
            name,
            codebasePath,
            environmentPath: workspacePath,
            isLocal: true,
            created: Date.now()
        };
        /**
         * create the blueprints directory where all collections/templates/... are stored
         * create "example" collection
         * create "hello-world" starter template
         */
        const blueprintsPath = path_1.join(workspacePath, 'blueprints', 'example', 'hello-world');
        fs_extra_1.ensureDirSync(blueprintsPath);
        /**
         * store the hello-world template contents
         * todo: create a whole slew of example files that the user can use as a reference
         */
        fs_1.writeFileSync(path_1.join(blueprintsPath, 'hello-world.txt'), 'Hello Stackjoy! \n\nMy name is ^^name^^.');
        /**
         * store the supporting workspace files
         */
        fs_extra_1.writeJSONSync(path_1.join(workspacePath, 'metadata.json'), metadata);
        fs_extra_1.writeJSONSync(path_1.join(workspacePath, 'log.json'), []);
        fs_extra_1.writeJSONSync(path_1.join(workspacePath, 'state.json'), {});
        fs_extra_1.writeJSONSync(path_1.join(workspacePath, 'data.json'), { dataModels: [] });
        this.createListOfWorkspaces();
    }
}
exports.Workspaces = Workspaces;
//# sourceMappingURL=workspaces.model.js.map