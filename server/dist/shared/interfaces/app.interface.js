"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var App;
(function (App) {
    let Environment;
    (function (Environment) {
        let EnvironmentPermissions;
        (function (EnvironmentPermissions) {
            EnvironmentPermissions[EnvironmentPermissions["none"] = 0] = "none";
            EnvironmentPermissions[EnvironmentPermissions["read"] = 10] = "read";
            EnvironmentPermissions[EnvironmentPermissions["write"] = 20] = "write";
            EnvironmentPermissions[EnvironmentPermissions["admin"] = 30] = "admin";
            EnvironmentPermissions[EnvironmentPermissions["owner"] = 40] = "owner";
        })(EnvironmentPermissions = Environment.EnvironmentPermissions || (Environment.EnvironmentPermissions = {}));
        let Type;
        (function (Type) {
            Type["Workspace"] = "workspace";
            Type["Stack"] = "stack";
        })(Type = Environment.Type || (Environment.Type = {}));
    })(Environment = App.Environment || (App.Environment = {}));
})(App = exports.App || (exports.App = {}));
//# sourceMappingURL=app.interface.js.map