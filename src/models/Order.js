const mongoose = require("mongoose");

const InlineItemSchema = require("./InlineItem").schema;
const UserSchema = require("./User").schema;

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    desc: {
        type: String,
        default: "Nothing",
        required: false,
    },
    inlineItem: [{
        type: InlineItemSchema,
        required: false,
    }, ],
    phone: {
        type: Number,
        default: 00000,
    },
    user: {
        type: String,
    },
    payment: {
        type: String,
        default: "Mastercard",
    },
    time: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
        default: function() {
            let arr = this.inlineItem;
            if (arr.length > 0) {
                return arr.reduce((prev, cur) => {
                    return prev + cur.total;
                }, 0);
            } else return 0;
        },
    },
});

let Order = mongoose.model("order", OrderSchema);
// export model
module.exports.model = Order;
// export schema
module.exports.schema = OrderSchema;