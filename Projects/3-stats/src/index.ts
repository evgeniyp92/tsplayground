import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

new Summary(
  new WinsAnalysis('Leicester'),
  new ConsoleReport()
).buildAndPrintReport(matchReader.matches);

new Summary(
  new WinsAnalysis('Chelsea'),
  new HTMLReport('chelseawins.html')
).buildAndPrintReport(matchReader.matches);

const summary = Summary.winsAnalysisAsHTML('Man City');
summary.buildAndPrintReport(matchReader.matches);
