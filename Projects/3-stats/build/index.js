"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Leicester'), new ConsoleReport_1.ConsoleReport()).buildAndPrintReport(matchReader.matches);
new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Chelsea'), new HTMLReport_1.HTMLReport('chelseawins.html')).buildAndPrintReport(matchReader.matches);
const summary = Summary_1.Summary.winsAnalysisAsHTML('Man City');
summary.buildAndPrintReport(matchReader.matches);
