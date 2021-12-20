const express = require("express");
const router = express.Router();
//router
const {
    index,
} = require("../../app/controllers/bookController/reservationController");
//[GET] /api/book/reserve
router.use("/", index);

module.exports = router;