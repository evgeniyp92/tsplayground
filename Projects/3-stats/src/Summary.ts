import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

// defining an analyzer which must have a run function, that analyses a
// MatchData tuple array and returns a string
export interface Analyzer {
  run(matches: MatchData[]): string;
}

// defining an output target which must implement a print function that takes a
// string and does something with it
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisAsHTML(team: string) {
    return new Summary(
      new WinsAnalysis(team),
      new HTMLReport(`${team}-wins.html`)
    );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  public buildAndPrintReport(matches: MatchData[]): void {
    const analysis = this.analyzer.run(matches);
    this.outputTarget.print(analysis);
  }
}
