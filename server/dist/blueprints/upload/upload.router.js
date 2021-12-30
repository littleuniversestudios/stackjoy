"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
const express_1 = require("express");
const uploadRules = require("./upload.rules");
const route_validation_1 = require("../../shared/middlewares/route-validation");
const route_handler_1 = require("../../shared/middlewares/route-handler");
const upload_service_1 = require("./upload.service");
const fileUpload = require('express-fileupload');
exports.uploadRouter = express_1.Router();
exports.uploadRouter.use(fileUpload());
const uploadService = new upload_service_1.UploadService();
exports.uploadRouter.post('/template-files', route_validation_1.validateRequest(uploadRules.forPOST), route_handler_1.handleRoute(async (req, res, next) => {
    var _a;
    const overwrite = `${req.query.overwrite}` === 'true';
    const result = uploadService.uploadTemplateFiles((_a = req.files) === null || _a === void 0 ? void 0 : _a.files, req.query.absolutePath, overwrite);
    result.error ? next(result.error) : res.json(result.data);
}));
//# sourceMappingURL=upload.router.js.map