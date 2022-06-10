"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of matchReader and pass in something satisfying DataReader
// interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches is an array of MatchData
new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Leicester'), new ConsoleReport_1.ConsoleReport()).buildAndPrintReport(matchReader.matches);
new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Chelsea'), new HTMLReport_1.HTMLReport('chelseawins.html')).buildAndPrintReport(matchReader.matches);
