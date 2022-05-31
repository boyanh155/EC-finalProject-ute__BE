const User = require("../../models/User").model;
class userController {
    // [GET] /api/user

    //[GET] /api/user
    //Get all user

    loadUser(req, res) {
        try {
            User.find({}, { password: 0, createAt: 0, _id: 0, __v: 0 },
                (err, data) => {
                    if (!err) {
                        res.send({
                            success: true,
                            users: data,
                        });
                    } else {
                        res.send({
                            success: false,
                            message: err.message,
                        });
                    }
                }
            );
        } catch (e) {
            res.send({
                success: false,
                message: err.message,
            });
        }
    }
}
module.exports = new userController();