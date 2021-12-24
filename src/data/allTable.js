//process all tables json file into mongo table object

const mongoose = require("mongoose");
const Table = require("../models/Table").model;
const fs = require("fs");

let tableData = fs.readFileSync(__dirname + "/allTable.json");
tableData = JSON.parse(tableData).tables;

let allTables = [];
tableData.forEach((table) => {
    allTables.push(new Table(table));
});
module.exports = { allTables };