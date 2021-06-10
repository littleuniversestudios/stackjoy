"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceModel = void 0;
const collection_model_1 = require("./collection.model");
const path_1 = require("path");
const file_system_1 = require("../../lib/file-system");
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const base_model_1 = require("./base.model");
const collection_config_model_1 = require("../config/collection.config.model");
class WorkspaceModel extends base_model_1.BaseModel {
    constructor(path, name) {
        super(blu_interface_1.BLU.Item.Type.Workspace);
        this.path = path;
        this.name = name;
        this.init();
    }
    get info() {
        return Object.assign({}, super.info, { path: this.path });
    }
    init() {
        this.config = new collection_config_model_1.CollectionConfig(this.path);
        const collectionPaths = this.getCollectionPaths();
        this.children.push(...collectionPaths.map(path => new collection_model_1.CollectionModel(path, this)));
    }
    getCollectionPaths() {
        const excludeFolders = [".git"];
        return file_system_1.BLUFileSystem.getDirectoriesSync(this.path, excludeFolders).map(collection => path_1.join(this.path, collection));
    }
    static defaultFunctions(fnContext) {
        return [
            {
                "id": "system_fn_1",
                "name": "camelCase",
                "execFunc": "s => changeCase.camelCase(s)",
                "description": "my-test-component => myTestComponent"
            },
            {
                "id": "system_fn_2",
                "name": "constantCase",
                "execFunc": "s => changeCase.constantCase(s)",
                "description": "my-test-component => MY_TEST_COMPONENT"
            },
            {
                "id": "system_fn_3",
                "name": "dotCase",
                "execFunc": "s => changeCase.dotCase(s)",
                "description": "my-test-component => my.test.component"
            },
            {
                "id": "system_fn_4",
                "name": "paramCase",
                "execFunc": "s => changeCase.paramCase(s)",
                "description": "my-test-component => my-test-component"
            },
            {
                "id": "system_fn_5",
                "name": "pascalCase",
                "execFunc": "s => changeCase.pascalCase(s)",
                "description": "my-test-component => MyTestComponent"
            },
            {
                "id": "system_fn_6",
                "name": "pathCase",
                "execFunc": "s => changeCase.pathCase(s)",
                "description": "my-test-component => my/test/component"
            },
            {
                "id": "system_fn_7",
                "name": "sentenceCase",
                "execFunc": "s => changeCase.sentenceCase(s)",
                "description": "my-test-component => My test component"
            },
            {
                "id": "system_fn_8",
                "name": "snakeCase",
                "execFunc": "s => changeCase.snakeCase(s)",
                "description": "my-test-component => my_test_component"
            },
            {
                "id": "system_fn_9",
                "name": "titleCase",
                "execFunc": "s => changeCase.titleCase(s)",
                "description": "my-test-component => My Test Component"
            },
            {
                "id": "system_fn_10",
                "name": "relativeTo",
                "execFunc": "(from,to) => path.relative(from,to)",
                "description": "relative path from a given path to another path"
            },
            {
                "id": "system_fn_11",
                "name": "relativeToCodebase",
                "execFunc": `(from) => path.relative(from,"${fnContext.CODEBASE_PATH}")`,
                "description": "relative path from a given path to the CODEBASE_PATH"
            },
            {
                "id": "system_fn_12",
                "name": "join",
                "execFunc": "(...paths) => path.join(...paths)",
                "description": "join multiple paths together"
            },
        ];
    }
}
exports.WorkspaceModel = WorkspaceModel;
//# sourceMappingURL=workspace.model.js.map