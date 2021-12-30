"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentDataModel = void 0;
const blu_utils_model_1 = require("../../blu-utils.model");
class EnvironmentDataModel {
    constructor(dataModelPath, dataInputsPath) {
        this.dataModelPath = dataModelPath;
        this.dataInputsPath = dataInputsPath;
        this.load();
    }
    load() {
        var _a, _b;
        this.dataModelsJSON = (_a = blu_utils_model_1.BLUUtils.loadJSONFile(this.dataModelPath)) !== null && _a !== void 0 ? _a : {};
        this.dataInputsJSON = (_b = blu_utils_model_1.BLUUtils.loadJSONFile(this.dataInputsPath)) !== null && _b !== void 0 ? _b : {};
    }
    get dataModels() {
        var _a;
        return (_a = this.dataModelsJSON) === null || _a === void 0 ? void 0 : _a.dataModels;
    }
    get dataInputs() {
        var _a;
        return (_a = this.dataModelsJSON) === null || _a === void 0 ? void 0 : _a.dataInputs;
    }
    saveDataModels(dataModels) {
        this.dataModelsJSON.dataModels = dataModels;
        blu_utils_model_1.BLUUtils.saveJSONFile(this.dataModelPath, this.dataModelsJSON);
    }
    saveDataInputs(dataInputs) {
        this.dataInputsJSON.dataInputs = dataInputs;
        blu_utils_model_1.BLUUtils.saveJSONFile(this.dataInputsPath, this.dataInputsJSON);
    }
}
exports.EnvironmentDataModel = EnvironmentDataModel;
//# sourceMappingURL=environment.data.model.js.map