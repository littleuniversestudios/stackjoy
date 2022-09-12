"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const config = {
    apiKey: "AIzaSyAHcxgHqRYYfH0CZTVmBDoPuq4QSaHKBFg",
    authDomain: "stackjoy-dev.firebaseapp.com",
    databaseURL: "https://stackjoy-dev.firebaseio.com",
    projectId: "stackjoy-dev",
    storageBucket: "stackjoy-dev.appspot.com",
    messagingSenderId: "832931569120",
    appId: "1:832931569120:web:208c32107633bd82109f85"
};
class Firebase {
    constructor() {
        this.app = app_1.initializeApp(config);
        this.auth = auth_1.getAuth(this.app);
    }
    async login(email, password) {
        const credential = await auth_1.signInWithEmailAndPassword(this.auth, email, password);
        this.user = credential.user;
        return this.user.uid;
    }
    async signup(email, password) {
        const credential = await auth_1.createUserWithEmailAndPassword(this.auth, email, password);
        this.user = credential.user;
        return this.user.uid;
    }
    getAuthenticatedUser() {
        return this.user;
    }
    async getAuthToken() {
        if (!this.user)
            return '';
        return this.user.getIdToken();
    }
    async logout() {
        try {
            await this.auth.signOut();
        }
        finally {
            this.user = null;
        }
    }
    async resetPassword(email) {
        return auth_1.sendPasswordResetEmail(this.auth, email);
    }
}
exports.FirebaseService = new Firebase();
//# sourceMappingURL=firebase.js.map