const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/authController");
//security boy
const verifyToken = require("../middleware/auth");

//router

//Check user is login ?
//[GET] /
router.get("/", verifyToken, authController.checkUser);

//[POST] /login
router.post("/login", authController.login);
//[GET] /register
router.post("/register", authController.register);

//[GET] /logout
router.use("/logout", authController.logout);

module.exports = router;