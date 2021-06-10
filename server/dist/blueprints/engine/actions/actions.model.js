"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsModel = void 0;
const preview_action_1 = require("./preview.action");
const generate_action_1 = require("./generate.action");
class ActionsModel {
    constructor(api) {
        this.api = api;
        this.previewAction = new preview_action_1.PreviewAction(this.api);
        this.generateAction = new generate_action_1.GenerateAction(this.api);
    }
    preview(itemId, inputs, rootDestination) {
        return this.previewAction.execute(itemId, inputs, rootDestination);
    }
    generate(itemId, inputs, rootDestination) {
        return this.generateAction.execute(itemId, inputs, rootDestination);
    }
}
exports.ActionsModel = ActionsModel;
//# sourceMappingURL=actions.model.js.map