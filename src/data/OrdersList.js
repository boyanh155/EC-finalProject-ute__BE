//process all tables json file into mongo table object

const mongoose = require("mongoose");
const Order = require("../models/Order").model;
const fs = require("fs");

let tableData = fs.readFileSync(__dirname + "/allOrders.json");
tableData = JSON.parse(tableData).tables;

let orderList = [];
tableData.forEach((table) => {
    orderList.push(new Order(table));
});
console.log(orderList)
module.exports = { orderList };