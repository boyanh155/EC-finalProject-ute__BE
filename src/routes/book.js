const express = require("express");
const router = express.Router();
const bookController = require("../app/controllers/bookController");

//router
const availabilityRouter = require("./bookRoute/availabilityRoute.js");
const reserveRouter = require("./bookRoute/reservationRoute.js");

//[GET] /api/book/reserve
router.use("/reserve", reserveRouter);

//[GET] /api/book/availability
router.use("/availability", availabilityRouter);

//[GET] /api/book
//exact : get
//non-exact : use
router.use("/", bookController.getTable);

module.exports = router;