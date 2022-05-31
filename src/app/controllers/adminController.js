// model
const Order = require("../../models/Order").model;
const User = require("../../models/User").model;
class adminController {
    //[GET] api/admin/
    //@access Private

    // [GET] api/admin/orderq
    // Get all order
    order(req, res) {
            try {
                Order.find({}, (err, data) => {
                    if (!err) {
                        res.send({
                            success: true,
                            orders: data,
                        });
                    } else {
                        res.send({
                            success: false,
                            message: err.message,
                        });
                    }
                });
            } catch (e) {
                res.send({
                    success: false,
                    message: err.message,
                });
            }
        }
        //[GET] api/admin

    // []
}
module.exports = new adminController();