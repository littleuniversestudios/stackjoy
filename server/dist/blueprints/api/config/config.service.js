"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const fs_extra_1 = require("fs-extra");
class ConfigService {
    findAll() {
        return { error: null, data: null };
    }
    findById(id) {
        return { error: null, data: null };
    }
    create(values) {
        return { error: null, data: null };
    }
    update(values) {
        try {
            fs_extra_1.writeJSONSync(values.path, values.config);
        }
        catch (e) {
            return { error: e, data: e };
        }
        return { error: null, data: { success: true } };
    }
    delete(id) {
        return { error: null, data: null };
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map