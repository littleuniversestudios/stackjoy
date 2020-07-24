"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fs_1 = require("fs");
const path_1 = require("path");
const error_enum_1 = require("../../../enums/error.enum");
const metadata_service_1 = require("../../blu/metadata/metadata.service");
const node_machine_id_1 = require("node-machine-id");
const metadataService = new metadata_service_1.MetadataService();
class FsService {
    systemInfo() {
        const bluMetadata = metadataService.getBLUMetadata();
        const systemInfo = {
            id: node_machine_id_1.machineIdSync(),
            cwd: process.cwd(),
            blu: bluMetadata.error ? null : bluMetadata.data,
        };
        return { error: null, data: systemInfo };
    }
    changeWorkingDirectory(path) {
        // console.log('**************')
        // console.log('', path)
        // console.log('**************')
        if (path && fs.existsSync(path)) {
            process.chdir(path);
        }
        return this.systemInfo();
    }
    createFolder(path, name) {
        try {
            const destination = path_1.join(path, name);
            if (fs_1.existsSync(destination)) {
                return { error: { status: 400, code: error_enum_1.ErrorCode[error_enum_1.ErrorCode.folderExists] }, data: null };
            }
            else {
                fs.mkdirSync(destination, { recursive: true });
                return { error: null, data: { destination, path, name } };
            }
        }
        catch (error) {
            return { error, data: null };
        }
    }
}
exports.FsService = FsService;
//# sourceMappingURL=fs.service.js.map