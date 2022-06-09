"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUtdWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === "H" /* MatchResult.HomeWin */)
        manUtdWins++;
    if (match[2] === 'Man United' && match[5] === "A" /* MatchResult.AwayWin */)
        manUtdWins++;
}
console.log(`Manchester United has won ${manUtdWins} games`);
