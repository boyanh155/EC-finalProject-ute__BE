//process all tables json file into mongo table object

const mongoose = require("mongoose");
const Order = require("../models/Order").model;
const fs = require("fs");

let orderData = fs.readFileSync(__dirname + "/allOrder.json");
orderData = JSON.parse(orderData).orders;

let allOrders = [];
orderData.forEach((order) => {
    allOrders.push(new Order(order));
});
module.exports = { allOrders };