const mongoose = require("mongoose");

// reservation
const reservationSchema = require("./Reservation").schema;
// staff
const staffSchema = require("./Staff").schema;

const Schema = mongoose.Schema;
//
const TableSchema = new Schema({
    name: String,
    isAvailable: Boolean,
    location: String,
    reservation: {
        required: false,
        type: reservationSchema,
    },
    staff: {
        required: true,
        type: staffSchema,
    },
});
let Table = mongoose.model("tables", TableSchema);
// export model
module.exports.model = Table;
// export schema
module.exports.schema = TableSchema;