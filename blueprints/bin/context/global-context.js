"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalContext = void 0;
const globals_1 = require("./globals");
const globalContext = {
    metadata: {
        ROOT_PATH: globals_1.ROOT_PATH,
        USER_BLUEPRINTS_PATH: globals_1.USER_BLUEPRINTS_PATH,
        BLUEPRINTS_DIR_NAME: globals_1.BLUEPRINTS_DIR_NAME,
        CURRENT_WORKING_DIR: globals_1.CURRENT_WORKING_DIR,
        RELATIVE_WORKING_DIR: globals_1.RELATIVE_WORKING_DIR,
    },
    templateVariables: [],
    onSuccess: [],
    executedCommands: [],
    apiResponse: null,
    isPreviewMode: false,
    runSource: 'cli',
    runContext: null,
    links: [],
    files: [],
};
class GlobalContext {
}
exports.GlobalContext = GlobalContext;
GlobalContext.setGlobalVariables = (globalVariables) => globalContext.templateVariables = [...globalVariables];
GlobalContext.getGlobalVariable = (name) => globalContext.templateVariables.find(g => g.name === name);
GlobalContext.storeApiResponse = (apiResponse) => globalContext.apiResponse = apiResponse;
GlobalContext.getApiResponse = () => globalContext.apiResponse;
GlobalContext.setPreviewMode = (mode) => globalContext.isPreviewMode = mode;
GlobalContext.isPreviewMode = () => globalContext.isPreviewMode;
GlobalContext.setRunSource = (runSource) => globalContext.runSource = runSource;
GlobalContext.getRunSource = () => globalContext.runSource;
GlobalContext.isRunByAPI = () => globalContext.runSource === 'api';
GlobalContext.storeRunContext = (runContext) => globalContext.runContext = runContext;
GlobalContext.get = () => {
    globalContext.metadata = {
        ROOT_PATH: globals_1.ROOT_PATH,
        USER_BLUEPRINTS_PATH: globals_1.USER_BLUEPRINTS_PATH,
        BLUEPRINTS_DIR_NAME: globals_1.BLUEPRINTS_DIR_NAME,
        CURRENT_WORKING_DIR: globals_1.CURRENT_WORKING_DIR,
        RELATIVE_WORKING_DIR: globals_1.RELATIVE_WORKING_DIR,
    };
    return globalContext;
};
//# sourceMappingURL=global-context.js.map