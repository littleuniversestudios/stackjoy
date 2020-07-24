"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const chalk_1 = require("chalk");
const table_1 = require("table");
class Print {
    static underline(length, char = '-') {
        return char.repeat(length);
    }
}
exports.Print = Print;
Print.printHeader = (title = '', subHeader = false, width = 100, color = 'green') => {
    const halfWidth = ((width - title.length) - 1) / 2;
    const chalkColor = Print.getChalkColor(color);
    if (!subHeader) {
        console.log(chalkColor(`${' '.repeat(halfWidth)}${title}${' '.repeat(halfWidth)}`));
    }
    else {
        console.log(chalkColor(title.toUpperCase()));
        console.log(chalkColor('-'.repeat(width)));
    }
};
Print.printTable = (data, columnWidths = [20, 100]) => {
    const columns = {};
    columnWidths.forEach((width, index) => columns[index] = { width });
    return table_1.table(data, { columns });
};
Print.getChalkColor = (color) => {
    switch (color) {
        case 'red':
            return chalk_1.default.red;
        case 'gray':
        case 'grey':
            return chalk_1.default.grey;
        default:
            return chalk_1.default.green;
    }
};
//# sourceMappingURL=print.js.map