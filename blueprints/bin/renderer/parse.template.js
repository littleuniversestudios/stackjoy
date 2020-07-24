"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTemplate = exports.setParseTemplateSourcePath = exports.BluTag = void 0;
const os_1 = require("os");
const template_part_model_1 = require("./models/template-part.model");
const htmlparser = require("htmlparser2");
class BluTag {
    constructor(startStr, endStr) {
        this.start = { str: startStr, length: startStr.length };
        this.end = { str: endStr, length: endStr.length };
    }
}
exports.BluTag = BluTag;
const bluTag = new BluTag('<blu', '</blu>');
let parseTemplateSourcePath;
function setParseTemplateSourcePath(templatePath) {
    parseTemplateSourcePath = templatePath;
}
exports.setParseTemplateSourcePath = setParseTemplateSourcePath;
/**
 * Main parse function for the template
 * Lots happening here:
 * 1) Find the first <blu tag [in a while loop until no more <blu tags found]
 * 2) Take the all the text before the <blu tag and that will be an element of its own
 * 3) Find the ending </blu> tag
 *  3.1) Find the number of spaces before the <blu> tag and the previous EOL (used for properly aligning the repeaters)
 * 4) Strip the found <blu> </blu> tag
 *  4.1) get its attributes
 *  4.2) get its contents
 *  4.3) trim the contents of the <blu></blu> tag (space formatting is ignored within blu tags... only way to guarantee proper formatting for repeaters)
 *  4.4) then recurse into it (GO BACK TO STEP 1)
 * 5) Take the text after the </blu> tag, that will be an element of its own
 * 6) If there was an EOL after the </blu> tag create a separate EOL element
 *
 *
 * @param originalText  the actual text of the template
 * @param attributes    <blu> tag attributes such as if="5==5" => <blu if="5==5"></blu>
 * @param isBlu         is it a <blu></blu> tag
 * @param hasEOL        is there an EOL at the end of the <blu> tag
 * @param spacer        how many spaces are there in front of the <blu> tag and after the EOL in front of it [this is important for repeaters to keep them aligned]
 */
function parseTemplate(originalText, attributes = {}, isBlu = false, hasEOL = false, spacer = 0) {
    const templatePart = new template_part_model_1.TemplatePart(originalText, attributes, isBlu, hasEOL, spacer);
    let textCopy = templatePart.originalText;
    let textReplaced = '';
    let tagIndex = 0;
    let absoluteIndex = 0;
    while (tagIndex !== -1) {
        tagIndex = textCopy.indexOf(bluTag.start.str);
        if (tagIndex !== -1) {
            absoluteIndex += tagIndex;
            const textBeforeBLUElement = textCopy.substring(0, tagIndex);
            const spacer = tagIndex - (textBeforeBLUElement.lastIndexOf(os_1.EOL) + 1);
            templatePart.addText(textBeforeBLUElement);
            textReplaced += textCopy.substring(0, tagIndex);
            textCopy = textCopy.substring(tagIndex);
            const endIndex = findClosingTagIndex(textCopy, bluTag);
            const { attributes, contents } = stripTag(textCopy.substring(0, endIndex));
            let EOLPresent = textCopy.charAt(endIndex) === os_1.EOL;
            textCopy = textCopy.substring(endIndex + (EOLPresent ? 1 : 0));
            templatePart.addPart(parseTemplate(contents.trim(), attributes, true, EOLPresent, spacer));
        }
    }
    templatePart.addText(textCopy.substring(0));
    if (hasEOL) {
        templatePart.addText(os_1.EOL);
    }
    return templatePart;
}
exports.parseTemplate = parseTemplate;
/**
 * Example: <blu if="i==5"> tag contents found here </blu>
 * This parser looks for the first closing chevron '>' and strips:
 * starting tag: <blu
 * attributes: if="1==5"
 * starting tag closing chevron '>'
 * tag contents: tag contents found here
 * ending tag: </blu>
 *
 * @param text <blu if="i==5"> tag contents found here </blu>
 */
function stripTag(text) {
    text = text.substring(0, text.lastIndexOf(bluTag.end.str)); // strip ending tag: </blu>
    const tagChars = text.split('');
    // find first chevron '>' that's not found in double quotes.
    // why? because you can have something like this: <blu if="i>5"> text </blu>
    let endIndex = -1;
    let inQuotes = false;
    let index = 0;
    while (endIndex === -1 && index < tagChars.length) {
        if (tagChars[index] === '>' && !inQuotes)
            endIndex = index;
        if (tagChars[index] === '"')
            inQuotes = !inQuotes;
        index++;
    }
    if (endIndex == -1)
        parseError("Malformed <blu element");
    let contents = text.substring(endIndex + 1);
    const attributes = extractAttributes(text.substring(0, endIndex + 1));
    return { contents, attributes };
}
/**
 * Uses htmlparser2 to properly extract all attributes of the <blu if="5==5"></blu> tag
 * @param attributeStr
 */
function extractAttributes(attributeStr) {
    const elements = htmlparser.parseDOM(`${attributeStr} ${bluTag.end.str}`);
    return elements[0].attribs;
}
/**
 * Find the closing element index ie.
 * <blu> some text <blu> some other text </blu> </blu> text after
 *                                                   ^- fill find the proper closing tag index
 * of the closing tag (in nested elements as well) or it wll throw an error
 * @param text text to be searched
 * @param tag  element to find
 */
function findClosingTagIndex(text, tag) {
    const regExp = RegExp(sanitizeRegExp(tag.start.str), "g");
    let closingTagCount = 0;
    let openingTagCount = null;
    let endIndex = text.indexOf(tag.end.str);
    let tagText = '';
    while (openingTagCount !== closingTagCount && endIndex !== -1) {
        tagText += text.substring(0, endIndex + tag.end.length);
        openingTagCount = (tagText.match(regExp) || []).length;
        text = text.substring(endIndex + tag.end.length);
        endIndex = text.indexOf(tag.end.str);
        closingTagCount++;
    }
    if (openingTagCount !== closingTagCount)
        closingParseError(tag, null);
    return tagText.length;
}
function sanitizeRegExp(str) {
    return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
function closingParseError(tag, position) {
    parseError(`No closing tag for ${tag.start.str}`, position);
}
function parseError(message, position = null) {
    const positionStr = position === null ? '' : `at position ${position}`;
    throw (`${message} ${positionStr} in template file://${parseTemplateSourcePath}`);
}
//# sourceMappingURL=parse.template.js.map