"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const globals_1 = require("../../../../globals");
class DataService {
    /**
     * GET Current Environment Data Members
     */
    getModelsFromCurrentEnvironment() {
        return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().getDataMembers(blu_interface_1.BLU.Data.Type.model) };
    }
    getInputsFromCurrentEnvironment() {
        return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().getDataMembers(blu_interface_1.BLU.Data.Type.input) };
    }
    getSchemasFromCurrentEnvironment() {
        return { error: null, data: globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints().getDataMembers(blu_interface_1.BLU.Data.Type.schema) };
    }
    /**
     * GET ANY Environment Data Members
     */
    getModelsByEnvironmentId(environmentId) {
        const blueprints = globals_1.APP_SERVICE.APP.getEnvironmentById(environmentId).getBlueprints();
        return { error: null, data: blueprints.getDataMembers(blu_interface_1.BLU.Data.Type.model) };
    }
    getInputsByEnvironmentId(environmentId) {
        const blueprints = globals_1.APP_SERVICE.APP.getEnvironmentById(environmentId).getBlueprints();
        return { error: null, data: blueprints.getDataMembers(blu_interface_1.BLU.Data.Type.input) };
    }
    getSchemasByEnvironmentId(environmentId) {
        const blueprints = globals_1.APP_SERVICE.APP.getEnvironmentById(environmentId).getBlueprints();
        return { error: null, data: blueprints.getDataMembers(blu_interface_1.BLU.Data.Type.schema) };
    }
    /**
     * UPDATE Current Environment Data Members
     */
    updateModelInCurrentEnvironment(id, { contents }) {
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        blueprints.updateDataMember(id, contents, blu_interface_1.BLU.Data.Type.model);
        return { error: null, data: { success: true } };
    }
    updateInputInCurrentEnvironment(id, { contents }) {
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        blueprints.updateDataMember(id, contents, blu_interface_1.BLU.Data.Type.input);
        return { error: null, data: { success: true } };
    }
    /**
     * CREATE Current Environment Data Members
     */
    createModelInCurrentEnvironment({ contents }) {
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        const result = blueprints.createDataMember(blu_interface_1.BLU.Data.Type.model, contents);
        return { error: result.error, data: { success: result.data.success, dataMember: result.data.dataMember.info } };
    }
    createInputInCurrentEnvironment({ contents }) {
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        blueprints.createDataMember(blu_interface_1.BLU.Data.Type.input, contents);
        return { error: null, data: { success: true } };
    }
    /**
     * DELETE Current Environment Data Members
     */
    deleteModelInCurrentEnvironment(id) {
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        return blueprints.deleteDataMember(id, blu_interface_1.BLU.Data.Type.model);
    }
    deleteInputInCurrentEnvironment(id) {
        const blueprints = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT.getBlueprints();
        return blueprints.deleteDataMember(id, blu_interface_1.BLU.Data.Type.input);
    }
}
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map