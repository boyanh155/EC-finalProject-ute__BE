const express = require("express");

//router
const authRouter = require("./auth");
const bookAuth = require("./book");
const adminRouter = require("./admin");
const userRouter = require("./user");

//routes
function route(app) {
    //@@route //api/auth/
    app.use("/api/auth", authRouter);
    //@@route //api//book
    app.use("/api/book", bookAuth);
    //@@route //api//admin
    app.use("/api/admin", adminRouter);
    //@@route /api/user
    app.use("/api/user", userRouter);
}

module.exports = route;