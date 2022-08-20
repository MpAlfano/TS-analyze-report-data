import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    let team = this.team;

    for (let match of matches) {
      if (match[1] === team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `${this.team} won ${wins} games`;
  }
}
