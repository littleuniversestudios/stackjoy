"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitModel = void 0;
const simple_git_1 = require("simple-git");
const axios_1 = require("axios");
const fs_extra_1 = require("fs-extra");
class GitModel {
    constructor(url) {
        this.GIT_SERVER = url;
    }
    static addHTTPHeader(token, ...rest) {
        return ['-c', `http.extraheader=Firebase-Auth-Token: ${token}`, ...rest];
    }
    static createGit(baseDir) {
        return simple_git_1.default({
            baseDir
        });
    }
    /**
     * Create the git repo url
     * @param repoId
     * @private
     */
    repoUrl(repoId) {
        return `${this.GIT_SERVER}/git/repo/${repoId}`;
    }
    /**
     * =====================================
     * Git commands with Token Header added
     * =====================================
     */
    static async push(git, token, branch = 'master') {
        await git.raw(...GitModel.addHTTPHeader(token, 'push', '-u', 'origin', branch));
    }
    static async pull(git, token) {
        await git.raw(...GitModel.addHTTPHeader(token, 'pull'));
    }
    static async fetch(git, token) {
        await git.raw(...GitModel.addHTTPHeader(token, 'fetch'));
    }
    /**
     *
     * @param token
     * @private
     */
    static gitRepoRequestConfig(token) {
        return {
            headers: {
                'Firebase-Auth-Token': token
            }
        };
    }
    /**
     * Create a repo at {baseDir}
     * @param baseDir
     * @param token
     * @param displayName
     * @param type
     */
    async createRepo(baseDir, token, displayName, type) {
        const resp = await axios_1.default.post(`${this.GIT_SERVER}/git/create`, { displayName, type }, GitModel.gitRepoRequestConfig(token));
        if (resp.status !== 200)
            return null;
        const { envId } = resp.data.data;
        // Clear any old or failed attempts to publish this stack
        if (fs_extra_1.existsSync(`${baseDir}/.git`))
            fs_extra_1.removeSync(`${baseDir}/.git`);
        // Initialize the git repo
        const git = GitModel.createGit(baseDir);
        await (git.init()
            .addRemote('origin', this.repoUrl(envId))
            .add('.')
            .commit('Version 1'));
        await GitModel.push(git, token);
        return envId;
    }
    /**
     * Install repo {repoId} at {baseDir}
     * @param baseDir
     * @param repoId
     * @param token
     */
    async downloadRepo(baseDir, repoId, token) {
        if (fs_extra_1.existsSync(baseDir)) {
            fs_extra_1.removeSync(baseDir);
        }
        fs_extra_1.mkdirpSync(baseDir);
        const git = GitModel.createGit(baseDir);
        try {
            await git.raw(...GitModel.addHTTPHeader(token, 'clone', this.repoUrl(repoId), '.'));
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
        if (fs_extra_1.existsSync(baseDir)) {
            fs_extra_1.removeSync(baseDir);
        }
        fs_extra_1.mkdirpSync(baseDir);
        const git = GitModel.createGit(baseDir);
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
     * @param token
     */
    async syncRepo(baseDir, token) {
        const git = GitModel.createGit(baseDir);
        const status = await git.status();
        if (!status.isClean())
            return { success: false, message: 'Uncommitted Changes in environment! Push your changes and resolve the merge conflicts to get the latest version.' };
        await GitModel.pull(git, token);
        return { success: true };
    }
    /**
     * Publish a repo
     * @param baseDir: Git base directory
     * @param id: Environment ID (Firebase version)
     * @param token: User authentication token
     * @param commitMessage: Commit message
     */
    async publishRepo(baseDir, id, token, commitMessage) {
        const git = GitModel.createGit(baseDir);
        // Commit the current changes
        await git.add('.').commit(commitMessage);
        // Get the latest changes, potentially handle a merge conflict
        await GitModel.pull(git, token);
        const status = await git.status();
        if (status.conflicted.length > 0)
            return { requiresMerge: true };
        // Try and upVersion the firebase repo first. This can be processed first since up-versioning here and failing to push below
        // would not cause any sync issues, where-as pushing and failing to up version would
        const resp = await axios_1.default.post(`${this.repoUrl(id)}/upVersion`, {}, GitModel.gitRepoRequestConfig(token));
        if (resp.status !== 200)
            throw Error(`Unknown error occurred when up-versioning - error code ${resp.status}`);
        const { newVersion } = resp.data.data;
        // TODO add git tags here
        await GitModel.push(git, token);
        return { newVersion: newVersion, requiresMerge: false };
    }
    /**
     * Get the repo status
     * @param baseDir
     * @param token [optional] firebase authentication token
     */
    async repoStatus(baseDir, token) {
        const git = GitModel.createGit(baseDir);
        if (token)
            await GitModel.fetch(git, token);
        return git.status();
    }
}
exports.GitModel = GitModel;
//# sourceMappingURL=git.model.js.map