import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

console.log(reader);

let manUtdWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin)
    manUtdWins++;
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUtdWins++;
}

console.log(`Manchester United has won ${manUtdWins} games`);
