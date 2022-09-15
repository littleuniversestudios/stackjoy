"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEnvironmentService = void 0;
const globals_1 = require("../../models/globals");
const types_1 = require("@stackjoy/shared/types");
class BaseEnvironmentService {
    async delete(id) {
        return await globals_1.APP_SERVICE.APP.deleteEnvironment(id);
    }
    /**
     * Share an environment
     * @param envId Env id to share
     * @param email Email to share with
     * @param permission Permission granted
     * @param token Auth token
     */
    async shareEnvironment({ envId, email, permission }) {
        const resp = await globals_1.SJ_SERVER.shareEnvironment(envId, email, permission);
        if (resp.status !== 200)
            return { error: 'Unknown error occurred', data: { success: false } };
        return { error: null, data: { success: true, userId: resp.data['userId'] } };
    }
    /**
     * Cancel an share request for an environment
     */
    async cancelShare({ envId, uid }) {
        const resp = await globals_1.SJ_SERVER.cancelShare(envId, uid);
        if (resp.status !== 200)
            return { error: 'Unknown error occurred', data: { success: false } };
        return { error: null, data: { success: true } };
    }
    async purge(remoteId) {
        return (await globals_1.SJ_SERVER.purgeRepo(remoteId)) ? { error: null, data: { success: true } } : {
            error: {
                status: 500, code: 'internal-error', message: 'Something went wrong. Please try again later.'
            }, data: { success: false }
        };
    }
    async findById(id) {
        const env = globals_1.APP_SERVICE.APP.getEnvironmentInfoById(id);
        const error = !env ? { status: 400, code: 'env-not-found', message: `Environment with id ${id} was not found.` } : null;
        return { error, data: env };
    }
    async getUserProfilesForEnv(envId) {
        const resp = await globals_1.SJ_SERVER.getUserProfilesForEnv(envId);
        if (resp.status !== 200)
            return { error: { status: 500, code: types_1.HttpError.UNAUTHORIZED, message: 'Unknown error occurred' }, data: null };
        return { error: null, data: resp.data };
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
            const status = await globals_1.SJ_SERVER.repoStatus(env.blueprintsPath);
            env.remote.isClean = status.isClean() && status.ahead == 0;
            globals_1.APP_SERVICE.APP.updateEnvironmentMetadata(env, batchUpdate);
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
     */
    async downloadEnvironment(environment) {
        try {
            await globals_1.APP_SERVICE.APP.downloadRemoteEnvironment(environment.blueprintsPath, environment.metadata.remote.id);
            await globals_1.APP_SERVICE.APP.updateEnvironmentModel(environment);
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
     */
    async publishEnvironment(values) {
        const { id, commitMessage } = values;
        const env = globals_1.APP_SERVICE.APP.getEnvironmentById(id);
        try {
            if (env.metadata.isLocal)
                await globals_1.APP_SERVICE.APP.createRemoteEnvironment(env);
            else
                await globals_1.APP_SERVICE.APP.publishRemoteEnvironment(env, commitMessage);
        }
        catch (e) {
            globals_1.logger.error(e.message);
            throw e;
        }
        globals_1.APP_SERVICE.APP.updateEnvironmentModel(env);
        return { error: null, data: env.metadata };
    }
    /**
     * Get (pull) the latest updates from a remote stack
     * @param values
     */
    async syncEnvironment({ id, newVersion }) {
        const stack = globals_1.APP_SERVICE.APP.getEnvironmentById(id);
        try {
            if (stack.metadata.isLocal)
                return { error: 'Not a remote stack!', data: null };
            const { success, message } = await globals_1.APP_SERVICE.APP.syncRemoteEnvironment(stack);
            if (!success)
                return { error: message || 'Unknown error occurred!', data: null };
            stack.metadata.localVersion = newVersion;
            stack.metadata.remote.version = newVersion;
        }
        catch (e) {
            globals_1.logger.error(e.message);
            throw e;
        }
        globals_1.APP_SERVICE.APP.updateEnvironmentModel(stack);
        return { error: null, data: stack.metadata };
    }
    /**
     * Get a list of remote environments from the database
     * @param type
     */
    async getRemoteEnvironments(type) {
        const response = await globals_1.SJ_SERVER.getRemoteEnvironments(type);
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Get a list of public stacks from the database
     */
    async getPublicStacks() {
        const response = await globals_1.SJ_SERVER.getPublicStacks();
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Load all workspace invites for the user
     * @param type Environment type
     * @param token user auth token
     */
    async getInvites(type, token) {
        const response = await globals_1.SJ_SERVER.getInvites(type);
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Accept an invite for an environment (either stack or workspace)
     * @param eid Environment ID
     * @param token user auth token
     */
    async acceptInvite(eid, token) {
        const response = await globals_1.SJ_SERVER.acceptInvite(eid);
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Decline an invite for an environment (either stack or workspace)
     * @param eid Environment ID
     * @param token user auth token
     */
    async declineInvite(eid, token) {
        const response = await globals_1.SJ_SERVER.declineInvite(eid);
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Update the permissions for a user in an environment
     * @param eid Environment ID
     * @param uid User ID to change
     * @param permission Permission to change to
     * @param token Requesting user auth token
     */
    async updateUserPermission(eid, { targetId, permission }, token) {
        const response = await globals_1.SJ_SERVER.updateUserPermission(eid, targetId, permission);
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
    /**
     * Update the permissions for a user in an environment
     * @param eid Environment ID
     * @param uid User ID to change
     * @param token Requesting user auth token
     */
    async revokeUserPermission(eid, { targetId }, token) {
        const response = await globals_1.SJ_SERVER.revokeUserPermission(eid, targetId);
        if (response.status !== 200) {
            return { error: { message: response.statusText }, data: null };
        }
        return { error: null, data: response.data };
    }
}
exports.BaseEnvironmentService = BaseEnvironmentService;
//# sourceMappingURL=base.environment.service.js.map