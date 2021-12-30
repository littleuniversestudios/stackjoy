"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const route_validation_1 = require("./shared/middlewares/route-validation");
const express_1 = require("express");
const route_handler_1 = require("./shared/middlewares/route-handler");
const templateFileRules = require("./blueprints/api/items/template-file/template-file.rules");
const fs_1 = require("fs");
const path_1 = require("path");
const fileUpload = require('express-fileupload');
exports.uploadRouter = express_1.Router();
exports.uploadRouter.use(fileUpload());
exports.uploadRouter.get('/', route_validation_1.validateRequest([]), route_handler_1.handleRoute(async (req, res, next) => {
    return res.json({ ok: 1 });
}));
exports.uploadRouter.post('/test', route_validation_1.validateRequest(templateFileRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    // const result = templateFileService.createFolder(req.body);
    // result.error ? next(result.error) : res.json(result.data);
    var _a, _b, _c, _d, _e;
    //@ts-ignore
    console.log('files', req.files);
    //@ts-ignore
    console.log('id===>', req.query);
    const absolutePath = req.query.absolutePath;
    //@ts-ignore
    if (Array.isArray((_a = req.files) === null || _a === void 0 ? void 0 : _a.files)) {
        //@ts-ignore
        for (let i = 0; i < ((_c = (_b = req.files) === null || _b === void 0 ? void 0 : _b.files) === null || _c === void 0 ? void 0 : _c.length); i++) {
            //@ts-ignore
            const file = (_d = req.files) === null || _d === void 0 ? void 0 : _d.files[i];
            const filePath = path_1.join(absolutePath, file.name);
            console.log('file path:', filePath);
            fs_1.writeFileSync(path_1.join(absolutePath, file.name), file.data);
        }
    }
    else {
        //@ts-ignore
        const file = (_e = req.files) === null || _e === void 0 ? void 0 : _e.files;
        const filePath = path_1.join(absolutePath, file.name);
        console.log('file path:', filePath);
        fs_1.writeFileSync(path_1.join(absolutePath, file.name), file.data);
    }
    res.json({ ok: 1 });
}));
//# sourceMappingURL=upload.router.js.map