"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === "H" /* MatchResult.HomeWin */)
                wins++;
            if (match[2] === this.teamName && match[5] === "A" /* MatchResult.AwayWin */)
                wins++;
        }
        return `Team ${this.teamName} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
