"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP = void 0;
const axios_1 = require("axios");
class HTTP {
    static async get(url, config) {
        return HTTP.asyncResponse(axios_1.default.create({}).get(HTTP.serverURL(url), config));
    }
    ;
    static async post(url, config) {
        return HTTP.asyncResponse(axios_1.default.create({}).post(HTTP.serverURL(url), config));
    }
    ;
}
exports.HTTP = HTTP;
HTTP.serverURL = (url = '') => `${HTTP.serverHOST}${url}`;
HTTP.asyncResponse = (p) => {
    return p
        .then((response) => {
        return { data: response.data, error: null };
    })
        .catch((error) => {
        const errResponse = error.response ? { code: error.response.status, data: error.response.data } : { code: error.code, data: error };
        return { data: null, error: errResponse };
    });
};
//# sourceMappingURL=http.js.map