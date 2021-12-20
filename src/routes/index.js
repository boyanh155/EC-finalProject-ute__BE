const express = require("express");

//model
const { User, Table } = require("../models");
//router
const authRouter = require("./auth");
const bookAuth = require("./book");

//routes
function route(app) {
    //@@route //api/auth/
    app.use("/api/auth", authRouter);
    //@@route //api//book
    app.use("/api/book", bookAuth);
}

module.exports = route;