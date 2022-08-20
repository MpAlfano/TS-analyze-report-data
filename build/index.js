"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv("data.csv");
const summary = Summary_1.Summary.winsAnalylsisHtml("Man United");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
