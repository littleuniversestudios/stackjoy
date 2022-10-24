"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SJServerProxyService = void 0;
const sj_server_model_1 = require("../models/SJServer/sj.server.model");
const globals_1 = require("../globals");
class SJServerProxyService {
    constructor() {
        this.sjProxy = sj_server_model_1.SJServerModel.proxy(globals_1.SJ_SERVER_API_URL, `/api${sj_server_model_1.SJServerModel.PROXY_PREFIX}`);
    }
    getStackByName(name, prefix) {
        // console.log('', this.sjProxy)
        // (`${ this.SJ_SERVER }/users/activateUser`, { inviteId, displayName, password });
        // axios.post<{ found: boolean, env: EnvironmentModelInterface | null }>(`${ this.EnvironmentsProxy }/stacks/getByName`, { name, prefix })
    }
}
exports.SJServerProxyService = SJServerProxyService;
//# sourceMappingURL=sj.server.proxy.service.js.map