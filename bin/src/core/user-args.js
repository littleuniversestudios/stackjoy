"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserArgs = void 0;
class UserArgs {
}
exports.UserArgs = UserArgs;
UserArgs.initUserArgs = (parsedArgs) => UserArgs.parsedArgs = parsedArgs;
UserArgs.port = () => UserArgs.parsedArgs.port || UserArgs.parsedArgs.p;
//# sourceMappingURL=user-args.js.map