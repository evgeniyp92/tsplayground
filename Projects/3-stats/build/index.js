"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of matchReader and pass in something satisfying DataReader
// interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches is an array of MatchData
let manUtdWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === "H" /* MatchResult.HomeWin */)
        manUtdWins++;
    if (match[2] === 'Man United' && match[5] === "A" /* MatchResult.AwayWin */)
        manUtdWins++;
}
console.log(`Manchester United has won ${manUtdWins} games`);
