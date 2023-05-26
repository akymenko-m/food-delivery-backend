const Shop = require("../models/shop");
const Product = require("../models/product");
const Order = require("../models/order");
const { ctrlWrapper } = require("../helpers");

const listShops = async (req, res, next) => {
    const result = await Shop.find();

    res.json(result);
};

const listProducts = async (req, res, next) => {
    const result = await Product.find();
    res.json(result);
};

const addOrder = async (req, res) => {
    const result = await Order.create(req.body);
    console.log(result);
    res.status(201).json(result);
};

module.exports = {
    listShops: ctrlWrapper(listShops),
    listProducts: ctrlWrapper(listProducts),
    addOrder: ctrlWrapper(addOrder),
};
