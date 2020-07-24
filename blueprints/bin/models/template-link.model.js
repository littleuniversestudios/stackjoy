"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateLink = void 0;
const file_system_1 = require("../lib/file-system");
const path_1 = require("path");
const globals_1 = require("../context/globals");
const text_transform_1 = require("../lib/text-transform");
const os_1 = require("os");
const fs_1 = require("fs");
/**
 * LINKS and ANCHORS currently work like this:
 *
 * 1) REPLACE AND MOVE BELOW:
 * when an anchor is found in the linked file it will add the rendered text ON THE SAME LINE and it will preserve and push the anchor down.
 * For example: if an anchor blu-anchor:COMPONENT_IMPORT is found on line 3, then the rendered text will be placed on line 3 and the
 * blu anchor will be moved to line 4.
 * ------
 * Other cases to consider:
 *
 * 2) REPLACE OVER ANCHOR:
 * Instead of giving the rendered text its own line, put the rendered text exactly where the anchor is (still preserve the anchor directly after it)
 * For this case its necessary to know what comment characters the file is using (ie. //, /* *\/, #, <!-- -->,...) since the anchors go into project src files
 * and Blueprints are language agnostic so it needs to know the full string. For example:
 * - //blu-anchor:COMPONENT_IMPORT
 * - #blu-anchor:COMPONENT_IMPORT
 * - <!--blu-anchor:COMPONENT_IMPORT-->
 *
 * 3) SPECIAL FILES
 * Some files (like .json) do not allow for comments. These will require some kind of special process based on the file type for automatic
 * addition of extra content to those files
 */
class TemplateLink {
    constructor(linkConfig, templateVariables, delimiter) {
        this.linkConfig = linkConfig;
        this.templateVariables = templateVariables;
        this.delimiter = delimiter;
        this.targetFiles = [];
        this.init();
    }
    init() {
        this.getTargetFiles();
        this.renderText();
    }
    getTargetFiles() {
        const filePaths = Array.isArray(this.linkConfig.files) ? [...this.linkConfig.files] : [this.linkConfig.files];
        filePaths.forEach(filePath => {
            if (file_system_1.FileSystem.isRelativePath(filePath)) {
                filePath = path_1.join(globals_1.ROOT_PATH, filePath);
            }
            this.targetFiles.push(filePath);
        });
    }
    renderText() {
        const textToReplace = Array.isArray(this.linkConfig.text) ? this.linkConfig.text.join(os_1.EOL) : this.linkConfig.text;
        this.renderedText = text_transform_1.TextTransform.replaceText(textToReplace, this.templateVariables, this.delimiter);
    }
    storeToDisk() {
        this.targetFiles.forEach(filePath => this.updateFile(filePath));
    }
    updateFile(filePath) {
        if (file_system_1.FileSystem.fileExistsSync(filePath)) {
            const fileContents = fs_1.readFileSync(filePath, 'utf-8').split(os_1.EOL);
            const newFileContents = [];
            const anchor = `blu-anchor:${this.linkConfig.anchor}`;
            let regex = new RegExp(anchor, 'gi');
            fileContents.forEach(line => {
                if (regex.test(line)) {
                    newFileContents.push(this.renderedText);
                }
                newFileContents.push(line);
            });
            fs_1.writeFileSync(filePath, newFileContents.join(os_1.EOL));
        }
    }
}
exports.TemplateLink = TemplateLink;
//# sourceMappingURL=template-link.model.js.map