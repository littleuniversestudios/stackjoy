"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
class BluLogService {
    findAll() {
        return blu_handler_1.bluHandler('api log 100');
    }
}
exports.BluLogService = BluLogService;
//# sourceMappingURL=blu-log.service.js.map