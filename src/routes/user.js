const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");

// /api/user/:slug/delete
router.delete("/");
// /api/user/
// [GET]/
router.get("/", userController.loadUser);

module.exports = router;