"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const globals_1 = require("../../../globals");
const types_1 = require("@stackjoy/shared/types");
class AuthService {
    /**
     * Login
     * @param email
     * @param password
     */
    async login({ email, password }) {
        try {
            const uid = await globals_1.FIREBASE_SERVICE.login(email, password);
            const resp = await globals_1.SJ_SERVER.getUserProfile(uid);
            const userProfile = resp.data;
            // once we have the user refresh the app_service so we have all of the user's workspaces1
            globals_1.APP_SERVICE.initUser(userProfile);
            return { error: null, data: userProfile };
        }
        catch (e) {
            return { error: { status: 500, code: types_1.HttpError.UNKNOWN, message: e.message || 'Unknown error occurred', data: e }, data: null };
        }
    }
    /**
     * Logout
     */
    async logout() {
        await globals_1.FIREBASE_SERVICE.logout();
        globals_1.APP_SERVICE.logOutUser();
        return { data: {}, error: null };
    }
    /**
     * Get the authentication status
     */
    async status() {
        try {
            const user = globals_1.FIREBASE_SERVICE.getAuthenticatedUser();
            if (!user)
                return { error: { status: 401, code: types_1.HttpError.UNAUTHORIZED, message: 'User not logged in!' }, data: null };
            const resp = await globals_1.SJ_SERVER.getUserProfile(user.uid);
            return { data: resp.data, error: null };
        }
        catch (e) {
            return { error: { status: 500, code: types_1.HttpError.UNAUTHORIZED, message: e.message || 'Unknown error occurred', data: e }, data: null };
        }
    }
    async signup({ username, email, password }) {
        let uid;
        try {
            // Create the firebase user
            uid = await globals_1.FIREBASE_SERVICE.signup(email, password);
        }
        catch (e) {
            return { error: { status: 500, code: types_1.HttpError.UNKNOWN, message: e.message || 'Unknown error occurred', data: e }, data: null };
        }
        try {
            // Firebase created, create the user profile
            const resp = await globals_1.SJ_SERVER.crudProfile(uid, username, email);
            return { data: resp.data, error: null };
        }
        catch (e) {
            // User profile failed, attempt to delete the firebase user
            // so user can redo signup
            await globals_1.FIREBASE_SERVICE.deleteUser();
            return { error: { status: 500, code: types_1.HttpError.UNKNOWN, message: e.message || 'Unknown error occurred', data: e }, data: null };
        }
    }
    /**
     * User accepts an invitation w/ an invitation code, display name, and password
     * @param inviteId
     * @param displayName
     * @param password
     */
    async activateUser({ inviteId, displayName, password }) {
        if (!inviteId || !displayName || !password)
            return { error: { status: 400, code: types_1.HttpError.PARAMS_MISSING, message: `one or more parameters were missing!` }, data: null };
        try {
            const resp = await globals_1.SJ_SERVER.activateUser(inviteId, displayName, password);
            if (resp.status !== 200)
                return { error: { status: resp.status, code: types_1.HttpError.UNKNOWN, message: resp.statusText || 'Unknown error occurred' }, data: null };
            return { error: null, data: resp.data };
        }
        catch (e) {
            return { error: { status: 500, code: types_1.HttpError.UNKNOWN, message: e.message || "Unknown error occurred." }, data: null };
        }
    }
    /**
     * Send a password reset email
     * @param email
     */
    async resetPassword({ email }) {
        try {
            await globals_1.FIREBASE_SERVICE.resetPassword(email);
            return { error: null, data: true };
        }
        catch (e) {
            return { error: { status: 500, code: types_1.HttpError.UNKNOWN, message: e.message || "Unknown error occurred.", data: e }, data: null };
        }
    }
    async upgradeAccount({ newAccountType }) {
        try {
            const uid = globals_1.FIREBASE_SERVICE.getAuthenticatedUser().uid;
            if (!uid)
                return { error: { status: 401, code: types_1.HttpError.UNAUTHORIZED, message: 'User must be logged in!' }, data: null };
            const response = await globals_1.SJ_SERVER.upgradeAccount(uid, newAccountType);
            return { error: null, data: response.data };
        }
        catch (e) {
            return { error: { status: 500, code: types_1.HttpError.UNKNOWN, message: e.message || "Unknown error occurred." }, data: null };
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map