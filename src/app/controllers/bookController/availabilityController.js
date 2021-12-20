class availabilityController {
    //[GET] api/auth/book/availability
    //@route GET api/auth/book/availability
    //@desc availability routes access
    //@access Public
    index(req, res) {
        res.send("availability");
    }
}

module.exports = new availabilityController();