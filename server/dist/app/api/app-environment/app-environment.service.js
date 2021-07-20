"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvironmentService = void 0;
const globals_1 = require("../../../globals");
const app_interface_1 = require("../../../shared/interfaces/app.interface");
const app_environment_model_1 = require("../../models/app.environment.model");
class AppEnvironmentService {
    findAll() {
        return { error: null, data: globals_1.APP.list };
    }
    findById(id) {
        return { error: null, data: globals_1.APP.getEnvironmentInfoById(id) };
    }
    getCurrentEnvironment() {
        return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
    }
    create(values) {
        let newEnvironment;
        const isLocal = values.isLocal === true || values.isLocal === 'true';
        if (values.type === app_interface_1.App.Environment.Type.Workspace) {
            newEnvironment = globals_1.APP.createWorkspace(values.codebasePath, values.name, isLocal);
        }
        if (values.type === app_interface_1.App.Environment.Type.Stack) {
            newEnvironment = globals_1.APP.createStack(values.name, isLocal);
        }
        return { error: null, data: newEnvironment };
    }
    update(id, values) {
        return { error: null, data: null };
    }
    delete(id) {
        return { error: null, data: null };
    }
    switchEnvironment(values) {
        globals_1.switchEnvironment(values.id);
        return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
    }
    async installEnvironment({ id, name }, token) {
        if (!id || !name)
            return { error: 'Bad request!', data: null };
        console.log(new Date(), 'Installing stack: ', id);
        let stack;
        try {
            stack = new app_environment_model_1.EnvironmentModel(globals_1.APP.createStack(name, false));
            stack.metadata.remote = {
                id,
                version: 1
            };
            await globals_1.APP.downloadRemoteStack(stack.blueprintsPath, id, token);
            await globals_1.APP.updateEnvironmentMetadata(stack);
        }
        catch (e) {
            // TODO Delete stack if clone fails
            console.log(new Date(), e);
            throw e;
        }
        return { error: null, data: null };
    }
    /**
     * For now assume that we can only publish stacks (workspaces cannot be "published" but "shared")
     *  - Publishing a stack means taking everything from the stack's /blueprints directory and creating a git repo for it.
     *  - In return we get the repo ID back (or something else) to tie the local files to the repo files
     *  - The published stack can be found on stackjoy.com
     *  - the published stack can then be installed in another workspace [ stackjoy i xa5h6kdh2]
     *
     * @param values
     * @param token
     */
    async publishEnvironment(values, token) {
        const stackId = values.id;
        const stack = globals_1.APP.getEnvironmentById(stackId);
        try {
            if (!token)
                return { error: { message: 'No auth token provided!' }, data: null };
            if (stack.metadata.isLocal) {
                await globals_1.APP.createRemoteStack(stack, token);
            }
            else {
                await globals_1.APP.publishRemoteStack(stack, token);
            }
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        globals_1.APP.updateEnvironmentMetadata(stack);
        return { error: null, data: stack.metadata };
    }
    async syncEnvironment(values, token) {
        const stackId = values.id;
        const stack = globals_1.APP.getEnvironmentById(stackId);
        try {
            if (!token)
                return { error: { message: 'No auth token provided!' }, data: null };
            if (stack.metadata.isLocal)
                return { error: 'Not a remote stack!', data: null };
            else
                await globals_1.APP.syncRemoteStack(stack, token);
        }
        catch (e) {
            console.log(e.message);
            throw e;
        }
        globals_1.APP.updateEnvironmentMetadata(stack);
        return { error: null, data: stack.metadata };
    }
    switchCodebase(values) {
        const env = globals_1.APP_ENVIRONMENT.metadata.id === values.id ? globals_1.APP_ENVIRONMENT : globals_1.APP.getEnvironmentById(values.id);
        if (env) {
            env.switchCodebase(values.codebasePath);
            return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
        }
        else {
            return { error: { message: `Environment with id: ${values.id} not found` }, data: null };
        }
    }
    removeCodebase(values) {
        const env = globals_1.APP_ENVIRONMENT.metadata.id === values.id ? globals_1.APP_ENVIRONMENT : globals_1.APP.getEnvironmentById(values.id);
        if (env) {
            env.removeCodebase(values.codebasePath);
            return { error: null, data: globals_1.APP_ENVIRONMENT.metadata };
        }
        else {
            return { error: { message: `Environment with id: ${values.id} not found` }, data: null };
        }
    }
}
exports.AppEnvironmentService = AppEnvironmentService;
//# sourceMappingURL=app-environment.service.js.map