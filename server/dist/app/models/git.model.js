"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitModel = void 0;
const simple_git_1 = require("simple-git");
const axios_1 = require("axios");
const fs_extra_1 = require("fs-extra");
class GitModel {
    static addHTTPHeader(token, ...rest) {
        return ['-c', `http.extraheader=Firebase-Auth-Token: ${token}`, ...rest];
    }
    static createGit(baseDir) {
        return simple_git_1.default({
            baseDir
        });
    }
    static repoUrl(repoId) {
        return `http://localhost:8000/git/repo/${repoId}`;
    }
    static async push(git, token) {
        await git.raw(...GitModel.addHTTPHeader(token, 'push', '-u', 'origin', 'master'));
    }
    async createRepo(baseDir, token) {
        const resp = await axios_1.default.post('http://localhost:8000/git/create', {}, {
            headers: {
                'Firebase-Auth-Token': token
            }
        });
        if (resp.status !== 200)
            return null;
        const { stackId, repoId } = resp.data.data;
        // Clear any old or failed attempts to publish this stack
        if (fs_extra_1.existsSync(`${baseDir}/.git`))
            fs_extra_1.removeSync(`${baseDir}/.git`);
        // Initialize the git repo
        const git = GitModel.createGit(baseDir);
        await (git.init()
            .addRemote('origin', GitModel.repoUrl(stackId))
            .add('.')
            .commit('Version 1'));
        await GitModel.push(git, token);
        return stackId;
    }
    async installRepo(baseDir, repoId, token) {
        const git = GitModel.createGit(baseDir);
        if (fs_extra_1.existsSync(baseDir)) {
            fs_extra_1.removeSync(baseDir);
            fs_extra_1.mkdirpSync(baseDir);
        }
        await git.raw(...GitModel.addHTTPHeader(token, 'clone', GitModel.repoUrl(repoId), '.'));
    }
    async updateRepo(baseDir, version, token) {
        const git = GitModel.createGit(baseDir);
        const status = await git.status();
        if (status.isClean())
            return version;
        await git.add('.')
            .commit(`Version ${version + 1}`);
        await GitModel.push(git, token);
        return version + 1;
    }
}
exports.GitModel = GitModel;
//# sourceMappingURL=git.model.js.map