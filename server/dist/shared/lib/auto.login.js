"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoLogin = void 0;
const globals_1 = require("../../globals");
/**
 * For development purposes only. if the env variables are set for user email/password
 * automatically, log the user into the system
 */
async function autoLogin() {
    var _a, _b;
    const email = process.env.USER_EMAIL;
    const password = process.env.USER_PASSWORD;
    if (email && password) {
        const response = await globals_1.AUTH_SERVICE.login({ email, password });
        if (response.error) {
            console.log('\n!!!!!!!!!!!!!!!!!!!! FAILED LOGIN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            console.log('! Failed to login using credentials below                     !');
            console.log('!                                                             !');
            console.log('! MAKE SURE YOU ARE USING CORRECT CREDENTIALS AND GOING TO    !');
            console.log('! 1) CORRECT CREDENTIALS                                      !');
            console.log('! 2) CORRECT STACKJOY SERVER                                  !');
            console.log('! 3) CORRECT FIREBASE PROJECT');
            console.log('!                                                             !');
            console.log('! EMAIL: ', email);
            console.log('! PASSWORD: ', password);
            console.log('! STACKJOY SERVER: ', globals_1.SJ_SERVER.SJ_SERVER);
            console.log(`! FIREBASE INFO: `, globals_1.FIREBASE_SERVICE.info);
            console.log('!                                                             !');
            console.log(`! ERROR: `);
            console.log(`! `, response.error);
            console.log('!                                                             !');
            console.log('!!!!!!!!!!!!!!!!!!!!! /FAILED LOGIN !!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
        }
        else {
            console.log('\n!!!!!!!!!!!!!!!!!!!!!!!!!  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!');
            console.log('! You are using credentials set in the environment variables !');
            console.log('!                                                            !');
            console.log('! EMAIL:     ', email);
            console.log('! PASSWORD:  ', password);
            console.log('! UID:       ', (_a = response.data) === null || _a === void 0 ? void 0 : _a.uid);
            console.log('! USERNAME:  ', (_b = response.data) === null || _b === void 0 ? void 0 : _b.username);
            console.log('!                                                            !');
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!! /WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
        }
    }
}
exports.autoLogin = autoLogin;
//# sourceMappingURL=auto.login.js.map