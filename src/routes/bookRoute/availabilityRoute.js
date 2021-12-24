const express = require("express");
const router = express.Router();
//router
const {
    available,
} = require("../../app/controllers/bookController/availabilityController");
//[GET] /api/book/availability
router.post("/", available);

module.exports = router;