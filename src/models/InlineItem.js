const mongoose = require("mongoose");

const InlineItemSchema = mongoose.Schema({
    name: String,
    quantity: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        require: true,
    },
    total: {
        type: Number,
        default: function() {
            return this.quantity * this.price;
        },
    },
});

let InlineItem = mongoose.model("InlineItem", InlineItemSchema);
// export model
module.exports.model = InlineItem;
// export schema
module.exports.schema = InlineItemSchema;