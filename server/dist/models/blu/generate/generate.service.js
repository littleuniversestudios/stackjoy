"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blu_handler_1 = require("../../../lib/blu-handler");
class GenerateService {
    findAll() {
        return [];
    }
    findById(generateId) {
        return null;
    }
    generate(generateAttributes) {
        // console.log('--->', generateAttributes)
        return blu_handler_1.bluHandler(`${generateAttributes.command} --runSource=api`, generateAttributes.destinationDir);
    }
    update(generateId, generateAttributes) {
        return null;
    }
    delete(generateId) {
        return null;
    }
}
exports.GenerateService = GenerateService;
//# sourceMappingURL=generate.service.js.map