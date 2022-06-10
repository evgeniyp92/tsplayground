import { MatchData } from './MatchData';

// defining an analyzer which must have a run function, that analyses a
// MatchData tuple array and returns a string
export interface Analyzer {
  run(matches: MatchData[]): string;
}

// definint an outputtarget which must implement a print function that takes a
// string and does something with it
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}

new Summary(new WinsAnalysis(), new ConsoleReport());
