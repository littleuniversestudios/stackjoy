"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const app_model_1 = require("../models/app/app.model");
const globals_1 = require("../models/globals");
const path = require("path");
const environment_model_1 = require("../models/app/environment.model");
class AppService {
    init(codebasePath) {
        this.INITIAL_CODEBASE_PATH = codebasePath;
        this.initApp();
    }
    initApp() {
        this.APP = new app_model_1.AppModel();
        this.determineCurrentEnvironment(this.INITIAL_CODEBASE_PATH);
    }
    initUser(user) {
        this.APP.initUser(user);
        this.determineCurrentEnvironment(this.INITIAL_CODEBASE_PATH);
        return this.getCurrentEnvironment();
    }
    logOutUser() {
        this.APP.logOutUser();
    }
    switchEnvironment(id) {
        const envMetadata = this.APP.getEnvironmentInfoById(id);
        if (envMetadata) {
            const newEnv = new environment_model_1.EnvironmentModel(envMetadata);
            newEnv.updateLastUsed();
            this.setAppEnvironment(newEnv);
        }
    }
    determineCurrentEnvironment(codebasePath) {
        // console.log('detemining current env------>',codebasePath)
        let workspaceMetadata = this.APP.getEnvironmentInfoByCodebase(codebasePath);
        if (workspaceMetadata) {
            // if the workspace found use it
            this.setAppEnvironment(new environment_model_1.EnvironmentModel(workspaceMetadata));
        }
        else {
            this.setAppEnvironment(null);
            // todo: determine if using this flow is better for the user
            /**
             * Currently if it's a new user they will get a "Create Workspace" dialog when first entering the app. The dialog states what the intention of the
             * app is: either use the free SYSTEM WORKSPACE or Log in
             * The alternative is that we just assign the SYSTEM WORKSPACE to the initial codebase path and drop them right into the app. Its less steps
             * for the user but also less clear. The code for this is below:
             */
            // if workspace not found AND SYSTEM WORKSPACE codebase is not assigned, assign it and use it
            // if (!this.APP.systemWorkspace.codebasePath) {
            //     this.APP.systemWorkspace.codebasePath = codebasePath;
            //     this.APP.updateEnvironmentMetadata(this.APP.systemWorkspace);
            //     this.setAppEnvironment(new EnvironmentModel(this.APP.systemWorkspace));
            // } else {
            //     // else, no workspace is found so let user know
            //     this.setAppEnvironment(null);
            // }
        }
    }
    setAppEnvironment(environment) {
        this.CURRENT_ENVIRONMENT = environment;
    }
    getCurrentEnvironment() {
        var _a, _b, _c, _d, _e;
        if (globals_1.APP_SERVICE.CURRENT_ENVIRONMENT) {
            return { error: null, data: (_b = (_a = globals_1.APP_SERVICE.CURRENT_ENVIRONMENT) === null || _a === void 0 ? void 0 : _a.metadata) !== null && _b !== void 0 ? _b : null };
        }
        else {
            const data = {
                INITIAL_CODEBASE_PATH: globals_1.APP_SERVICE.INITIAL_CODEBASE_PATH,
                suggestedName: (_e = (_d = path.parse((_c = globals_1.APP_SERVICE.INITIAL_CODEBASE_PATH) !== null && _c !== void 0 ? _c : '')) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : ''
            };
            return { error: { status: 404, message: 'No environment available', code: 'NO_ENV_AVAILABLE', data }, data: null };
        }
    }
}
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map