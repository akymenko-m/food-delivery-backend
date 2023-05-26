const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    poster: { type: String, required: true },
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
