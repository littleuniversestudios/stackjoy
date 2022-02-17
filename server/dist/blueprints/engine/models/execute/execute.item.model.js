"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecuteItemModel = void 0;
const blu_interface_1 = require("../../../../shared/interfaces/blu.interface");
const utils_1 = require("../../lib/utils");
const workspace_model_1 = require("../item/environment/workspace.model");
const path = require("path");
class ExecuteItemModel {
    constructor(item, parent, inputs = {}, ROOT_DESTINATION, extraInfo) {
        this.item = item;
        this.parent = parent;
        this.ROOT_DESTINATION = ROOT_DESTINATION;
        this.extraInfo = extraInfo;
        this.errors = [];
        this.children = [];
        this.inputs = {};
        this.execId = utils_1.Utils.UUIDShort();
        this.onSuccess = '';
        this.inputs = Object.assign({}, inputs !== null && inputs !== void 0 ? inputs : {});
        this.tree = this.getTree();
        this.numFiles = this.getFileCount(this.tree);
        this.itemContext = this.getItemContext();
        this.itemSettings = this.getItemSettings();
    }
    getItemContext() {
        var _a, _b;
        const hierarchicalContext = this.getHierarchicalContext();
        const executionContext = this.parent ? this.parent.itemContext : ExecuteItemModel.blankContext();
        const parentContext = ExecuteItemModel.mergeContext(executionContext, hierarchicalContext);
        let renderContext = ExecuteItemModel.mergeContext(this.item.context, parentContext);
        renderContext = this.mergeSystemFunctions(renderContext);
        const inputsAsVariables = ExecuteItemModel.inputsToVariables(this.inputs, (_a = this.extraInfo) === null || _a === void 0 ? void 0 : _a.inputsOrigin);
        const mergedVariables = ExecuteItemModel.mergeVariables(inputsAsVariables, renderContext.variables);
        /** destination must be done after everything is merged because it needs the name **/
        this.destination = this.mergeDestination((_b = this.parent) === null || _b === void 0 ? void 0 : _b.destination, this.inputs.destination, mergedVariables);
        renderContext.variables = ExecuteItemModel.overrideVariables(ExecuteItemModel.inputsToVariables({ destination: this.destination }), mergedVariables);
        return renderContext;
    }
    mergeSystemFunctions(renderContext) {
        const fnContext = {
            CODEBASE_PATH: this.inputs.CODEBASE_PATH,
            ROOT_DESTINATION: this.inputs.ROOT_DESTINATION,
        };
        const systemFunctions = workspace_model_1.WorkspaceModel.defaultFunctions(fnContext).map(f => Object.assign({}, f, { origin: { name: 'Readonly System Function', type: blu_interface_1.BLU.Origin.Types.System } }));
        renderContext.functions = ExecuteItemModel.mergeFunctions(renderContext.functions, systemFunctions);
        return renderContext;
    }
    getItemSettings() {
        return ExecuteItemModel.combineHierarchicalSettings(this.item);
    }
    // raw onSuccess str that hasn't been evaluated
    get onSuccessStr() {
        var _a;
        return this.isOfType(blu_interface_1.BLU.Item.Type.Template) ? (_a = this.itemSettings.onSuccess) !== null && _a !== void 0 ? _a : '' : '';
    }
    isOfType(type) {
        return this.item.type === type;
    }
    get parentId() {
        return this.parent ? this.parent.item.info.id : null;
    }
    get patriarch() {
        return this.parent ? this.parent.patriarch : this;
    }
    get renderContext() {
        return ExecuteItemModel.itemToRenderContext(this.itemContext);
    }
    getHierarchicalContext() {
        return ExecuteItemModel.combineHierarchicalContexts(this.item.parent);
    }
    /**
     * Destination is the only input property that can be merged instead of being overwritten by the child inputs
     *
     * if "destination" property present in inputs use the destination in 2 ways:
     *  1) if relative [./something] merge with parent destination => /parent/destination/something
     *  2) if absolute [/something] use the absolute path only     => /something
     *
     *  If destination is not present:
     *
     *  1) if file is part of a template that has more than one file
     *    1.1) put the file in %name% folder [preserve file's relative path]
     *    1.2) otherwise it's a single file so just put it in the current working directory
     */
    mergeDestination(parentDestination, itemDestination, allVariables) {
        var _a, _b, _c, _d;
        const name = (_a = ExecuteItemModel.getVariable(allVariables, 'name')) === null || _a === void 0 ? void 0 : _a.value;
        const wrapInFolder = (_b = ExecuteItemModel.getVariable(allVariables, 'wrapInFolder')) === null || _b === void 0 ? void 0 : _b.value;
        const folderName = (_c = ExecuteItemModel.getVariable(allVariables, 'folderName')) === null || _c === void 0 ? void 0 : _c.value;
        parentDestination = !!parentDestination ? parentDestination : this.ROOT_DESTINATION;
        if (itemDestination) {
            /**
             * For security reasons everything has to be relative to the ROOT_DESTINATION
             * if absolute paths become a necessary feature, then it should prompt the user
             * to tell them that there are files that will be stored outside the workspace
             * directory. Then create a SHA hash of the workspace dir + destination path,
             * send back to user, when the user confirms it, send the SHA back as a confirmation
             * to continue generation.
             */
            // if (path.isAbsolute(itemDestination)) {
            //     return itemDestination;
            // } else {
            return path.join(parentDestination, itemDestination);
            // }
        }
        else if (this.item.type === blu_interface_1.BLU.Item.Type.Template) {
            // if wrapInFolder is set to false then just use the parent destination
            if (wrapInFolder === false) {
                return parentDestination;
            }
            else if (this.numFiles > 1 || wrapInFolder === true || !!folderName) {
                // if there are more than 1 files or 'wrapInFolder' is set to true
                // add a subfolder with the value of the name to the destination
                if (!name) {
                    this.errors.push({
                        executeContextId: this.execId,
                        message: `Template must have a name. Input 'name' is missing`,
                        origin: {
                            location: blu_interface_1.BLU.Execute.ErrorLocation.item,
                            section: blu_interface_1.BLU.Execute.ErrorSection.inputs,
                            property: 'name'
                        },
                        type: blu_interface_1.BLU.Execute.ErrorType.missingInput
                    });
                }
                return path.join(parentDestination, (_d = (folderName !== null && folderName !== void 0 ? folderName : name)) !== null && _d !== void 0 ? _d : '');
            }
            else {
                return parentDestination;
            }
        }
        else {
            return parentDestination;
        }
    }
    static combineHierarchicalSettings(item) {
        const settings = Object.assign({}, item.settings);
        Object.keys(settings).forEach(key => settings[key] === '' ? delete settings[key] : null);
        return !item.parent ? item.settings : Object.assign({}, ExecuteItemModel.combineHierarchicalSettings(item.parent), settings);
    }
    static combineHierarchicalContexts(item, context) {
        const mergedContext = context ? ExecuteItemModel.mergeContext(context, item.context) : item.context;
        return item.parent ? ExecuteItemModel.combineHierarchicalContexts(item.parent, mergedContext) : mergedContext;
    }
    static mergeContext(childContext, parentContext) {
        var _a, _b, _c, _d;
        return {
            variables: ExecuteItemModel.mergeVariables([...((_a = childContext.variables) !== null && _a !== void 0 ? _a : [])], [...((_b = parentContext.variables) !== null && _b !== void 0 ? _b : [])]),
            functions: ExecuteItemModel.mergeFunctions([...((_c = childContext.functions) !== null && _c !== void 0 ? _c : [])], [...((_d = parentContext.functions) !== null && _d !== void 0 ? _d : [])])
        };
    }
    static mergeFunctions(childFunctions, parentFunctions) {
        parentFunctions.forEach(pFn => {
            if (!childFunctions.find(cFn => cFn.name === pFn.name)) {
                childFunctions.push(pFn);
            }
        });
        return [...childFunctions];
    }
    /**
     * Child variables always take precedence over the parent variables.
     *  1) If both a parent and child variable exist, child is used
     *  2) If a parent var exists but a child one does not, the parent is used
     *
     * @param childVariables
     * @param parentVariables
     */
    static mergeVariables(childVariables, parentVariables) {
        childVariables = [...childVariables]; // new instance of variables
        parentVariables.forEach(parentVar => {
            const childVar = ExecuteItemModel.getVariable(childVariables, parentVar.name);
            if (!childVar) {
                childVariables.push(parentVar);
            }
        });
        return childVariables;
    }
    static getVariable(allVariables, name) {
        return allVariables.find(v => v.name === name);
    }
    static overrideVariables(newVariables, oldVariables) {
        newVariables.forEach(newVar => {
            const oldVarIndex = oldVariables.findIndex(oldVar => oldVar.name === newVar.name);
            oldVarIndex >= 0 ? oldVariables[oldVarIndex] = newVar : oldVariables.push(newVar);
        });
        return [...oldVariables];
    }
    static blankContext() {
        return { variables: [], functions: [] };
    }
    static inputsToVariables(inputs, originType = blu_interface_1.BLU.Origin.Types.User) {
        return Object.keys(inputs !== null && inputs !== void 0 ? inputs : {}).map(key => ({ name: key, value: inputs[key], origin: { name: 'user-input', type: originType } }));
    }
    static itemToRenderContext(itemContext) {
        const inputs = {};
        itemContext.variables.forEach(v => inputs[v.name] = v.value);
        return {
            inputs,
            functions: itemContext.functions
        };
    }
    /**
     * Returns the list of all parent item ids that have been executed before this item
     */
    get executeList() {
        return this.getExecItemIdList(this);
    }
    getExecItemIdList(executeItem) {
        return executeItem.parent ? [{ id: executeItem.parent.item.info.id, name: executeItem.parent.item.info.name }, ...this.getExecItemIdList(executeItem.parent)] : [];
    }
    getTree() {
        return this.item.getFileTree(['.config.json']);
    }
    getFileCount(tree) {
        let numFiles = 0;
        if (tree) {
            numFiles = tree.files.length;
            tree.subFolders.forEach(subFolder => numFiles += this.getFileCount(subFolder));
        }
        return numFiles;
    }
}
exports.ExecuteItemModel = ExecuteItemModel;
//# sourceMappingURL=execute.item.model.js.map