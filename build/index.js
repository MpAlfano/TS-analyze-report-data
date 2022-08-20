"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader("data.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
