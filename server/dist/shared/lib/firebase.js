"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const config = {
    dev: {
        apiKey: "AIzaSyAHcxgHqRYYfH0CZTVmBDoPuq4QSaHKBFg",
        authDomain: "stackjoy-dev.firebaseapp.com",
        databaseURL: "https://stackjoy-dev.firebaseio.com",
        projectId: "stackjoy-dev",
        storageBucket: "stackjoy-dev.appspot.com",
        messagingSenderId: "832931569120",
        appId: "1:832931569120:web:208c32107633bd82109f85"
    },
    prod: {
        apiKey: "AIzaSyABHSTdwJX_CMiYzQXaVjeRUoSVr1o5mnk",
        authDomain: "stackjoy-c0059.firebaseapp.com",
        databaseURL: "https://stackjoy-c0059.firebaseio.com",
        projectId: "stackjoy-c0059",
        storageBucket: "stackjoy-c0059.appspot.com",
        messagingSenderId: "1054908773220",
        appId: "1:1054908773220:web:8037d6989d90a60057c071",
        measurementId: "G-LR3FT3M4Z2"
    }
};
class FirebaseService {
    constructor() {
        var _a;
        this.firebaseServer = (_a = process.env.STACKJOY_FIREBASE_SERVER) !== null && _a !== void 0 ? _a : 'prod';
        this.app = (0, app_1.initializeApp)(config[this.firebaseServer]);
        this.auth = (0, auth_1.getAuth)(this.app);
        // console.log('', this.auth)
    }
    get info() {
        var _a, _b;
        return {
            server: this.firebaseServer,
            databaseURL: (_a = config[this.firebaseServer]) === null || _a === void 0 ? void 0 : _a.databaseURL,
            projectId: (_b = config[this.firebaseServer]) === null || _b === void 0 ? void 0 : _b.projectId
        };
    }
    async login(email, password) {
        const credential = await (0, auth_1.signInWithEmailAndPassword)(this.auth, email, password);
        this.user = credential.user;
        return this.user.uid;
    }
    async signup(email, password) {
        const credential = await (0, auth_1.createUserWithEmailAndPassword)(this.auth, email, password);
        this.user = credential.user;
        return this.user.uid;
    }
    async deleteUser() {
        await (0, auth_1.deleteUser)(this.user);
        await this.auth.signOut();
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
        return (0, auth_1.sendPasswordResetEmail)(this.auth, email);
    }
}
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.js.map