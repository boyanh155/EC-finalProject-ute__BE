class bookController {
    //[GET] api/book/
    getReserve(req, res) {
            res.send("Reserve");
        }
        //[GET] api/book/
    getAvailability(req, res) {
            res.send("Availability");
        }
        //[GET] api/book/
    getTable(req, res) {
        res.send("Book Halo");
    }
}

module.exports = new bookController();