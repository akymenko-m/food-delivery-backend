const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        userData: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true },
            address: { type: String, required: true },
        },
        order: [
            {
                _id: { type: String, required: true },
                name: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, required: true },
                image: { type: String, required: true },
                owner: {
                    type: Schema.Types.ObjectId,
                    ref: "shop",
                },
            },
        ],
        totalPrice: { type: Number, required: true },
    },
    { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
