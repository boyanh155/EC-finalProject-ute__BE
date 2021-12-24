const mongoose = require("mongoose");

const tableSchema = require("./Table").schema;

const Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: Date,
    tables: [tableSchema],
});

let Day = mongoose.model("day", DaySchema);

// export module
module.exports.model = Day;
// export model
module.exports.schema = DaySchema;