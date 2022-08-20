import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("data.csv");
const summary = Summary.winsAnalylsisHtml("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
