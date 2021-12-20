class reservationController {
    //[GET] api/auth/book/reserve
    //@route GET api/auth/book/reserve
    //@desc reserve routes access
    //@access Public
    index(req, res) {
        res.send("reserve");
    }
}

module.exports = new reservationController();