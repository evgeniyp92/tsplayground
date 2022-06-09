"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateArray = dateString
        .split('/')
        .map((el) => parseInt(el));
    if (dateArray[1])
        dateArray[1] = dateArray[1] - 1;
    return new Date(dateArray[2], dateArray[1], dateArray[0]);
};
exports.dateStringToDate = dateStringToDate;
