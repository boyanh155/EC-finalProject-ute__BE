const express = require("express");
const router = express.Router();
//router
const {
    index,
} = require("../../app/controllers/bookController/availabilityController");
//[GET] /api/book/availability
router.use("/", index);

module.exports = router;