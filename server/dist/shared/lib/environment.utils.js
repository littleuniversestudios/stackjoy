"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentUtils = void 0;
exports.EnvironmentUtils = {
    combineEnvironment(remoteEnv, localEnv) {
        var _a;
        // This is where the actual combining of a remote and local env happens
        localEnv.remote.id = remoteEnv.remote.id;
        localEnv.remote.version = remoteEnv.remote.version;
        localEnv.remote.permissions = remoteEnv.remote.permissions;
        localEnv.remote.invites = remoteEnv.remote.invites;
        localEnv.seed = remoteEnv.seed;
        // TODO: How do we want to handle metadata that can exist both locally and remotely?
        localEnv.description = (_a = localEnv.description) !== null && _a !== void 0 ? _a : remoteEnv.description;
        localEnv.remote.organization = remoteEnv.remote.organization;
    },
    convertRemoteEnvironment(remoteStack, type) {
        return {
            id: null,
            name: remoteStack.displayName,
            codebasePath: null,
            seed: remoteStack.seed,
            environmentPath: null,
            isLocal: false,
            created: null,
            type,
            blueprintsPath: '',
            lastUsed: -1,
            deletedOn: -1,
            // remoteOnly: true, // need to clean up the rules on which stacks are where and how they are accessed
            isSystemWorkspace: false,
            disabled: false,
            description: remoteStack.description,
            remote: {
                // TODO refactor the client side to use EID instead of ID
                // Leaving this for now as we have more high priority things to do...
                id: remoteStack.eid,
                version: remoteStack.version,
                requiresMerge: false,
                isClean: true,
                permissions: remoteStack.permissions,
                // sharedWith: remoteStack.sharedWith || [],
                // owner: remoteStack.owner,
                invites: remoteStack.invites || {},
                organization: remoteStack.organization || null
            }
        };
    }
};
//# sourceMappingURL=environment.utils.js.map