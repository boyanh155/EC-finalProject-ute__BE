const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//
//id auto generate
//_id
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false,
        required: false,
    },
});

let User = mongoose.model("users", UserSchema);

module.exports.model = User;
module.exports.schema = UserSchema;