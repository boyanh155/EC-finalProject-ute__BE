const express = require("express")
const router = express.Router();
// Model
// Controller
const adminController = require("../app/controllers/adminController")

// Router
// [GET] /admin/order
router.get("/order", adminController.order)





module.exports = router;