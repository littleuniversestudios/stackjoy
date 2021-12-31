"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEnvironmentService = void 0;
const globals_1 = require("../../globals");
class BaseEnvironmentService {
    async delete(id) {
        return (await globals_1.APP.deleteEnvironment(id)) ? { error: null, data: { success: true } } : {
            error: {
                status: 500, code: 'internal-error', message: 'Either environment does not exist or folder is locked by a process.'
            }, data: { success: false }
        };
    }
    async findById(id) {
        const env = globals_1.APP.getEnvironmentInfoById(id);
        const error = !env ? { status: 400, code: 'env-not-found', message: `Environment with id ${id} was not found.` } : null;
        return { error, data: env };
    }
    /**
     * Check if a local stack has a git repo and if there are any local pending changes
     * that need to be pushed
     * @param env
     * @param batchUpdate: Whether we are updating a lot at a time
     * @private
     */
    async updateRepoStatus(env, batchUpdate = false) {
        if (env.isLocal)
            return;
        try {
            const status = await globals_1.GIT.repoStatus(env.blueprintsPath);
            env.remote.isClean = status.isClean() && status.ahead == 0;
            globals_1.APP.updateEnvironmentMetadata(env, batchUpdate);
        }
        catch (e) {
            // todo: bring this back, suppressed it because it polutes the console
            // console.error(`Stack ${ env.name } is not a git repo but is tagged as not local!`);
        }
    }
    /**
     * Download a remote workspace/stack locally into a user's items list.
     * Once downloaded, user can then edit and update the workspace/stack.
     * @param environment
     * @param token
     */
    async downloadEnvironment(environment, token) {
        try {
            await globals_1.APP.downloadRemoteEnvironment(environment.blueprintsPath, environment.metadata.remote.id, token);
            await globals_1.APP.updateEnvironmentModel(environment);
            return { error: null, data: { success: true } };
        }
        catch (e) {
            // TODO Delete stack if clone fails
            return { error: { message: 'Failed to download environment', data: e }, data: null };
        }
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
        const { id, commitMessage } = values;
        const env = globals_1.APP.getEnvironmentById(id);
        try {
            if (!token)
                return { error: { message: 'No auth token provided!' }, data: null };
            if (env.metadata.isLocal)
                await globals_1.APP.createRemoteEnvironment(env, token);
            else
                await globals_1.APP.publishRemoteEnvironment(env, token, commitMessage);
        }
        catch (e) {
            globals_1.logger.error(e.message);
            throw e;
        }
        globals_1.APP.updateEnvironmentModel(env);
        return { error: null, data: env.metadata };
    }
    /**
     * Get (pull) the latest updates from a remote stack
     * @param values
     * @param token
     */
    async syncEnvironment({ id, newVersion }, token) {
        const stack = globals_1.APP.getEnvironmentById(id);
        try {
            if (!token)
                return { error: 'No auth token provided!', data: null };
            if (stack.metadata.isLocal)
                return { error: 'Not a remote stack!', data: null };
            const { success, message } = await globals_1.APP.syncRemoteEnvironment(stack, token);
            if (!success)
                return { error: message || 'Unknown error occurred!', data: null };
            stack.metadata.localVersion = newVersion;
            stack.metadata.remote.version = newVersion;
        }
        catch (e) {
            globals_1.logger.error(e.message);
            throw e;
        }
        globals_1.APP.updateEnvironmentModel(stack);
        return { error: null, data: stack.metadata };
    }
}
exports.BaseEnvironmentService = BaseEnvironmentService;
//# sourceMappingURL=base-environment.service.js.map