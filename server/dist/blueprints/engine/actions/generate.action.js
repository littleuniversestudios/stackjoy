"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateAction = void 0;
const fs_1 = require("fs");
const preview_action_1 = require("./preview.action");
const fs_extra_1 = require("fs-extra");
class GenerateAction {
    constructor(api) {
        this.api = api;
        this.previewAction = new preview_action_1.PreviewAction(this.api);
    }
    execute(itemId, inputs, rootDestination) {
        const result = this.previewAction.execute(itemId, inputs, rootDestination);
        if (result.errors.length > 0) {
            return result;
        }
        else {
            this.writeGeneratedFilesToCodebase(result.executeContext);
            return result;
        }
    }
    writeGeneratedFilesToCodebase(executeContext) {
        if (executeContext.tree) {
            this.storeFiles(executeContext.tree);
        }
        executeContext.children.forEach(childContext => this.writeGeneratedFilesToCodebase(childContext));
    }
    storeFiles(tree) {
        tree.files.forEach(file => {
            fs_extra_1.mkdirpSync(file.destinationFolder);
            fs_1.writeFileSync(file.destination, file.renderedText);
        });
        tree.subFolders.forEach(folder => this.storeFiles(folder));
    }
}
exports.GenerateAction = GenerateAction;
//# sourceMappingURL=generate.action.js.map