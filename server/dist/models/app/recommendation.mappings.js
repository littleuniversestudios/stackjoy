"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationMappings = void 0;
const shared_1 = require("@stackjoy/shared");
exports.RecommendationMappings = [
    /**
     * Directories to descend into.
     */
    {
        regex: /^src$/,
        tags: [],
        descendIntoDirectory: true
    },
    /**
     * Typescript / Javascript
     */
    {
        regex: /.+\.ts$/,
        tags: [shared_1.Tags.languages.TYPESCRIPT]
    },
    {
        regex: /.+\.js$/,
        tags: [shared_1.Tags.languages.JAVASCRIPT]
    },
    {
        regex: /^package.json$/,
        tags: [],
        contentChecks: [{
                keyword: /"@angular.*"/,
                tags: [shared_1.Tags.frameworks.ANGULARJS]
            }, {
                keyword: /"express"/,
                tags: [shared_1.Tags.frameworks.EXPRESSJS]
            }, {
                keyword: /"react"/,
                tags: [shared_1.Tags.frameworks.REACTJS]
            }]
    },
    /**
     * Java
     */
    {
        regex: /.+\.java$/,
        tags: [shared_1.Tags.languages.JAVA]
    }
];
//# sourceMappingURL=recommendation.mappings.js.map