// Require
const express = require("express");
const Order = require("../models/Order");

var router = express.Router();

router.post("/", async (req, res) => {
  const { id, item_name, item_image, item_price, quantity } = req.body;
  async function insertToDb() {
    const createdOrder = await Order.create({
      id,
      user_id: req.session.user_id,
      item_name,
      item_image,
      item_price,
      quantity,
      total: quantity * item_price,
    });
    res.json(createdOrder);
  }
  try {
    const orders = await Order.findAll();
    if (orders.length < 1) {
        insertToDb()
    } else {
      orders.forEach((item) => {
        if (item.id === id) {
          console.log("cannot add same item to cart")
          res.json({msg: "cannot add same item to cart"})
        } else {
            insertToDb()
        }
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

router.get("/", (req, res) => {
  res.render("cart");
});

module.exports = router;
