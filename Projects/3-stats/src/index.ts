import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of matchReader and pass in something satisfying DataReader
// interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches is an array of MatchData

let manUtdWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUtdWins++;
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUtdWins++;
}

console.log(`Manchester United has won ${manUtdWins} games`);
