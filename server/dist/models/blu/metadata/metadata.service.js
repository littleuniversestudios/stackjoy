"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
const fs = require("fs-extra");
class MetadataService {
    getBLUMetadata() {
        return blu_handler_1.bluHandler('api metadata --runSource=api');
    }
    setBLUMetadata(body = {}) {
        const path = body.data.newWorkingDir;
        if (path && fs.existsSync(path)) {
            process.chdir(path);
        }
        return this.getBLUMetadata();
    }
}
exports.MetadataService = MetadataService;
//# sourceMappingURL=metadata.service.js.map