import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of matchReader and pass in something satisfying DataReader
// interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches is an array of MatchData

new Summary(
  new WinsAnalysis('Leicester'),
  new ConsoleReport()
).buildAndPrintReport(matchReader.matches);

new Summary(
  new WinsAnalysis('Chelsea'),
  new HTMLReport('chelseawins.html')
).buildAndPrintReport(matchReader.matches);
