const mongoose = require("mongoose");

const reservationSchema = require("./Reservation").schema;

const Schema = mongoose.Schema;
//
const StaffSchema = new Schema({
    nameStaff: {
        type: String,
        required: true,
    },
    idStaff: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
});

let Staff = mongoose.model("staffs", StaffSchema);
// export model
module.exports.model = Staff;
// export schema
module.exports.schema = StaffSchema;