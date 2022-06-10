"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of matchReader and pass in something satisfying DataReader
// interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches is an array of MatchData
new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Leicester'), new ConsoleReport_1.ConsoleReport()).buildAndPrintReport(matchReader.matches);
