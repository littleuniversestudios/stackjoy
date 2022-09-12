"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUserService = void 0;
const globals_1 = require("../../../globals");
class AppUserService {
    // public findAll() :{ error: null, data: any }{
    //     return { error : null, data : null  };
    // }
    //
    // public findById(id: string) :{ error: null, data: any }{
    //     return { error : null, data : null  };
    // }
    init({ user }) {
        return globals_1.APP_SERVICE.initUser(user);
    }
}
exports.AppUserService = AppUserService;
//# sourceMappingURL=app-user.service.js.map