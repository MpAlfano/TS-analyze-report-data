import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("data.csv");
const matchReader = new MatchReader(csvFileReader);

matchReader.load();
