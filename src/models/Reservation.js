const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//
const ReservationSchema = new Schema({
    name: String,
    phone: String,
    email: String,
});
let reservation = mongoose.model("reservation", ReservationSchema);

// export model
module.exports.model = reservation;
// export schema
module.exports.schema = ReservationSchema;