const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/delivery");

router.get("/shops", ctrl.listShops);

router.get("/products", ctrl.listProducts);

router.post("/orders", ctrl.addOrder);

module.exports = router;
