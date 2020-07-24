"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../../globals");
class RootService {
    getDirRoot() {
        return { path: globals_1.ROOT_DIR };
    }
    update(rootAttributes) {
        globals_1.setRootDir(rootAttributes.path);
        return rootAttributes;
    }
}
exports.RootService = RootService;
//# sourceMappingURL=root.service.js.map