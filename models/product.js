const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "shop",
    },
});

const Product = model("product", productSchema);

module.exports = Product;
