"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader);
let manUtdWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === "H" /* MatchResult.HomeWin */)
        manUtdWins++;
    if (match[2] === 'Man United' && match[5] === "A" /* MatchResult.AwayWin */)
        manUtdWins++;
}
console.log(`Manchester United has won ${manUtdWins} games`);
