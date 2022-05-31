// model
class adminController {
    //[GET] api/admin/
    //@access Private
    order(req, res) {
        res.send("Get order")
    }
}
module.exports = new adminController()