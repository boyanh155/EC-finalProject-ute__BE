const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//router
const {
    reservation,
} = require("../../app/controllers/bookController/reservationController");
//[GET] /api/book/reserve
router.post("/", reservation);

module.exports = router;