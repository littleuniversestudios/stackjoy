"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SJServerModel = void 0;
const simple_git_1 = require("simple-git");
const axios_1 = require("axios");
const fs_extra_1 = require("fs-extra");
const globals_1 = require("../../globals");
const http_proxy_middleware_1 = require("http-proxy-middleware");
const shared_1 = require("@stackjoy/shared");
class SJServerModel {
    constructor(url) {
        this.SJ_SERVER = url;
    }
    static firebaseAuthTokenHeader(token) {
        return `http.extraheader=Firebase-Auth-Token: ${token}`;
    }
    static gitCommandHeader(cmd) {
        return `http.extraheader=Git-Command: ${cmd}`;
    }
    static addHTTPHeaderToGitCommand(header, ...rest) {
        return ['-c', header, ...rest];
    }
    static createGit(baseDir) {
        return (0, simple_git_1.default)({
            baseDir
        });
    }
    static proxy(target, basePath) {
        return [
            async (req, res, next) => {
                const { headers } = await SJServerModel.firebaseTokenRequestConfig();
                res.locals[SJServerModel.FIREBASE_TOKEN_HEADER_KEY] = headers[SJServerModel.FIREBASE_TOKEN_HEADER_KEY];
                next();
            }, (0, http_proxy_middleware_1.createProxyMiddleware)({
                target,
                changeOrigin: true,
                pathRewrite: (path) => {
                    return path.replace(basePath, '');
                },
                logLevel: 'silent',
                onProxyReq: (proxyReq, req, res) => {
                    proxyReq.setHeader(SJServerModel.FIREBASE_TOKEN_HEADER_KEY, res.locals[SJServerModel.FIREBASE_TOKEN_HEADER_KEY]);
                }
            })
        ];
    }
    /**
     * Create the git repo url
     * @param repoId
     * @private
     */
    repoUrl(repoId) {
        return `${this.SJ_SERVER}/git/repo/${repoId}`;
    }
    /**
     * =====================================
     * Git commands with Token Header added
     * =====================================
     */
    static async push(git, token, branch = SJServerModel.STACKJOY_BRANCH) {
        const command = [
            ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(token)),
            ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.gitCommandHeader('push')),
            'push', '-u', 'origin', branch
        ];
        await git.raw(command);
        // await git.raw(...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(token), 'push', '-u', 'origin', branch))
    }
    static async pull(git, token) {
        const command = [
            ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(token)),
            ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.gitCommandHeader('pull')),
            'pull'
        ];
        await git.raw(command);
        // await git.raw(...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(token), 'pull'));
    }
    static async fetch(git, token) {
        const command = [
            ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(token)),
            ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.gitCommandHeader('fetch')),
            'fetch'
        ];
        await git.raw(command);
        // await git.raw(...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(token), 'fetch'));
    }
    /**
     *
     * @private
     */
    static async firebaseTokenRequestConfig() {
        return {
            headers: {
                [SJServerModel.FIREBASE_TOKEN_HEADER_KEY]: await globals_1.FIREBASE_SERVICE.getAuthToken()
            }
        };
    }
    /**
     * Create a repo at {baseDir}
     * @param baseDir
     * @param displayName
     * @param type
     * @param orgId {optional} the organization id to link the stack with
     */
    async createRepo(baseDir, displayName, type, orgId) {
        const resp = await axios_1.default.post(`${this.SJ_SERVER}/repo/create`, { displayName, type, orgId }, await SJServerModel.firebaseTokenRequestConfig());
        const token = await globals_1.FIREBASE_SERVICE.getAuthToken();
        if (resp.status !== 200)
            return null;
        const { envId } = resp.data;
        // Clear any old or failed attempts to publish this stack
        if ((0, fs_extra_1.existsSync)(`${baseDir}/.git`))
            (0, fs_extra_1.removeSync)(`${baseDir}/.git`);
        // Initialize the git repo
        const git = SJServerModel.createGit(baseDir);
        await (git.init()
            .checkout(['-b', SJServerModel.STACKJOY_BRANCH])
            .addRemote('origin', this.repoUrl(envId))
            .add('.')
            .commit('Version 1'));
        await SJServerModel.push(git, token);
        return envId;
    }
    /**
     * Install repo {repoId} at {baseDir}
     * @param baseDir
     * @param repoId
     */
    async downloadRepo(baseDir, repoId) {
        if ((0, fs_extra_1.existsSync)(baseDir)) {
            (0, fs_extra_1.removeSync)(baseDir);
        }
        (0, fs_extra_1.mkdirpSync)(baseDir);
        const git = SJServerModel.createGit(baseDir);
        try {
            const command = [
                ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.firebaseAuthTokenHeader(await globals_1.FIREBASE_SERVICE.getAuthToken())),
                ...SJServerModel.addHTTPHeaderToGitCommand(SJServerModel.gitCommandHeader('clone')),
                'clone', this.repoUrl(repoId), '.'
            ];
            await git.raw(command).checkout(SJServerModel.STACKJOY_BRANCH);
            return { error: null, data: { success: true } };
        }
        catch (err) {
            // there could be other reasons why the repo clone fails but for now just return that its not found
            return { error: { status: 400, code: 'repo-not-found', message: `Remote repository with id: '${repoId}' not found` }, data: null };
        }
    }
    /**
     * Download a repo {url} at {baseDir}. Used when download stack seeds
     * @param baseDir
     * @param url
     */
    async downloadSeed(baseDir, url) {
        if ((0, fs_extra_1.existsSync)(baseDir)) {
            (0, fs_extra_1.removeSync)(baseDir);
        }
        (0, fs_extra_1.mkdirpSync)(baseDir);
        const git = SJServerModel.createGit(baseDir);
        try {
            await git.clone(url, '.');
            return { error: null, data: { success: true } };
        }
        catch (err) {
            // there could be other reasons why the repo clone fails but for now just return that its not found
            return { error: { status: 400, code: 'repo-not-found', message: `Remote repository @: '${url}' not found` }, data: null };
        }
    }
    /**
     * Sync a repo
     * @param baseDir
     */
    async syncRepo(baseDir) {
        const git = SJServerModel.createGit(baseDir);
        const token = await globals_1.FIREBASE_SERVICE.getAuthToken();
        const status = await git.status();
        if (!status.isClean())
            return { success: false, message: 'Uncommitted Changes in environment! Push your changes and resolve the merge conflicts to get the latest version.' };
        await SJServerModel.pull(git, token);
        return { success: true };
    }
    /**
     * Publish a repo
     * @param baseDir: Git base directory
     * @param id: Environment ID (Firebase version)
     * @param commitMessage: Commit message
     */
    async publishRepo(baseDir, id, commitMessage) {
        const git = SJServerModel.createGit(baseDir);
        const token = await globals_1.FIREBASE_SERVICE.getAuthToken();
        // Commit the current changes
        await git.add('.').commit(commitMessage);
        // Get the latest changes, potentially handle a merge conflict
        await SJServerModel.pull(git, token);
        const status = await git.status();
        if (status.conflicted.length > 0)
            return { requiresMerge: true };
        // Try and upVersion the firebase repo first. This can be processed first since up-versioning here and failing to push below
        // would not cause any sync issues, where-as pushing and failing to up version would
        const resp = await axios_1.default.post(`${this.SJ_SERVER}/repo/${id}/upVersion`, {}, await SJServerModel.firebaseTokenRequestConfig());
        if (resp.status !== 200)
            throw Error(`Unknown error occurred when up-versioning - error code ${resp.status}`);
        const { newVersion } = resp.data;
        // TODO add git tags here
        await SJServerModel.push(git, token);
        return { newVersion: newVersion, requiresMerge: false };
    }
    /**
     * Get the repo status
     * @param baseDir
     */
    async repoStatus(baseDir) {
        const git = SJServerModel.createGit(baseDir);
        return git.status();
    }
    /**
     * Completely purge a repository from our systems
     * Will delete the git repo, and then if successful remove the firebase reference
     * @param remoteId
     */
    async purgeRepo(remoteId) {
        const resp = await axios_1.default.delete(`${this.SJ_SERVER}/repo/${remoteId}/purge`, await SJServerModel.firebaseTokenRequestConfig());
        return resp.status === 200;
    }
    /**
     * Accept an invitation (to join stackjoy)
     * @param inviteId
     * @param displayName
     * @param password
     */
    async activateUser(inviteId, displayName, password) {
        return await axios_1.default.post(`${this.SJ_SERVER}/users/activateUser`, { inviteId, displayName, password });
    }
    /**
     * Get remote environments for the user
     * @param type Env type (either stack or workspace)
     */
    async getRemoteEnvironments(type) {
        return axios_1.default.get(`${this.SJ_SERVER}/environments/${type}/forUser`, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Get an environments metadata
     * @param id
     */
    async getRemoteEnvironment(id) {
        return axios_1.default.get(`${this.SJ_SERVER}/environments/${id}`, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Get public stacks
     */
    async getPublicStacks() {
        return axios_1.default.get(`${this.SJ_SERVER}/environments/stacks/public`);
    }
    /**
     * Get a list of user profiles for a specific environment
     * @param envId
     */
    async getUserProfilesForEnv(envId) {
        return axios_1.default.get(`${this.SJ_SERVER}/environments/${envId}/userProfiles`, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Accept an invite to join an environment
     * @param eid
     */
    async acceptInvite(eid) {
        return axios_1.default.post(`${this.SJ_SERVER}/environments/${eid}/acceptInvite`, {}, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Decline an invite to join an environment
     * @param eid
     */
    async declineInvite(eid) {
        return axios_1.default.post(`${this.SJ_SERVER}/environments/${eid}/declineInvite`, {}, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Update the permission of a user
     * @param eid Environment ID
     * @param targetId User ID to update
     * @param permission Permission to update to
     */
    async updateUserPermission(eid, targetId, permission) {
        return axios_1.default.post(`${this.SJ_SERVER}/environments/${eid}/updateUserPermission`, { targetId, permission }, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Revoke the permissions of a user from a workspace
     * @param uid UID of user to get
     */
    async getUserProfile(uid) {
        return axios_1.default.get(`${this.SJ_SERVER}/users/profile/${uid}`, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Create (or update if exists) a user profile
     * @param uid
     * @param username
     * @param email
     */
    async crudProfile(uid, username, email) {
        return axios_1.default.put(`${this.SJ_SERVER}/users/profile/${uid}`, { username, email }, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Upgrade an account
     * @param uid
     * @param newAccountType
     */
    async upgradeAccount(uid, newAccountType) {
        return axios_1.default.post(`${this.SJ_SERVER}/users/upgrade/${uid}`, { newAccountType }, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Star an environment
     * @param envId
     */
    async starEnvironment(envId) {
        return axios_1.default.post(`${this.SJ_SERVER}/environments/${envId}/star`, {}, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Get public stacks with the given tags
     * @param tags
     */
    async getPublicStacksWithTags(tags) {
        return axios_1.default.post(`${this.SJ_SERVER}/environments/stacks/public/withTags`, { tags }, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Update the description of an environment
     * @param remoteId
     * @param description
     */
    async updateEnvironmentDescription(remoteId, description) {
        return axios_1.default.put(`${this.SJ_SERVER}/environments/${remoteId}/description`, { description }, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Get the tags for an environment
     * @param remoteId
     */
    async getTags(remoteId) {
        return axios_1.default.get(`${this.SJ_SERVER}/environments/${remoteId}/tags`, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Delete a tag from an environment
     * @param remoteId
     * @param tag
     */
    async deleteTag(remoteId, tag) {
        return axios_1.default.delete(`${this.SJ_SERVER}/environments/${remoteId}/tags/${tag}`, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Add a tag to an environment
     * @param remoteId
     * @param tag
     */
    async addTag(remoteId, tag) {
        return axios_1.default.put(`${this.SJ_SERVER}/environments/${remoteId}/tags/${tag}`, {}, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Rename an environment
     * @param id Should be a remote id, but will fail gracefully if not found
     * @param name
     */
    async rename(id, name) {
        return axios_1.default.put(`${this.SJ_SERVER}/environments/${id}/rename`, { name }, await SJServerModel.firebaseTokenRequestConfig());
    }
    /**
     * Find stack ids given names (and optionally prefixes)
     * @param queries
     */
    async findIdsByName(queries) {
        return axios_1.default.post(`${this.SJ_SERVER}/environments/stacks/findIdsByName`, { queries }, await SJServerModel.firebaseTokenRequestConfig());
    }
}
exports.SJServerModel = SJServerModel;
SJServerModel.STACKJOY_BRANCH = shared_1.Settings.GIT.MAIN_BRANCH;
SJServerModel.PROXY_PREFIX = '/sj-proxy';
SJServerModel.FIREBASE_TOKEN_HEADER_KEY = 'Firebase-Auth-Token';
//# sourceMappingURL=sj.server.model.js.map