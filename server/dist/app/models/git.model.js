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
     * Create a repo at {baseDir}
     * @param baseDir
     * @param token
     * @param displayName
     */
    async createRepo(baseDir, token, displayName) {
        const resp = await axios_1.default.post(`${this.GIT_SERVER}/git/create`, { displayName }, {
            headers: {
                'Firebase-Auth-Token': token
            }
        });
        if (resp.status !== 200)
            return null;
        const { stackId } = resp.data.data;
        // Clear any old or failed attempts to publish this stack
        if (fs_extra_1.existsSync(`${baseDir}/.git`))
            fs_extra_1.removeSync(`${baseDir}/.git`);
        // Initialize the git repo
        const git = GitModel.createGit(baseDir);
        await (git.init()
            .addRemote('origin', this.repoUrl(stackId))
            .add('.')
            .commit('Version 1'));
        await GitModel.push(git, token);
        return stackId;
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
     * Merge a repo
     * @param git
     */
    async mergeRepo(git, token) {
        let status = await git.status();
        let useStash = false;
        if (!status.isClean())
            useStash = true;
        if (useStash)
            await git.stash();
        await GitModel.pull(git, token);
        if (useStash)
            await git.stash(['pop']);
        status = await git.status();
        return { requiresMerge: status.conflicted.length != 0 };
    }
    /**
     * Sync a repo
     * @param baseDir
     * @param token
     */
    async syncRepo(baseDir, token) {
        const git = GitModel.createGit(baseDir);
        return this.mergeRepo(git, token);
    }
    /**
     * Publish a repo
     * @param baseDir
     * @param version
     * @param token
     */
    async publishRepo(baseDir, version, token) {
        const git = GitModel.createGit(baseDir);
        await GitModel.fetch(git, token);
        const status = await git.status();
        if (status.isClean())
            return { requiresMerge: false };
        else if (status.behind != 0)
            return await this.mergeRepo(git, token);
        // Add and push the files
        await git.add('.')
            .commit(`Version ${version + 1}`);
        await GitModel.push(git, token);
        return { newVersion: version + 1, requiresMerge: false };
    }
}
exports.GitModel = GitModel;
//# sourceMappingURL=git.model.js.map