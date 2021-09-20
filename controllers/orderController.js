// Require
const express = require("express");
const Order = require("../models/Order");
// const mongoose= require('mongoose');
// const Order = mongoose.model('Order');

var router = express.Router();

// mongoose.set('useFindAndModify', false);

//Router
// router.get('/',(req,res)=>{
//     res.render('menu');
// });

router.post("/cart", async (req, res) => {
  const { id, item_name, item_image, item_price, quantity } = req.body;
  async function insertToDb() {
    const createdOrder = await Order.create({
      id,
      user_id: req.session.user_id,
      item_name,
      item_image,
      item_price,
      quantity,
      total: quantity * price,
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
          res.redirect("back");
        } else {
            insertToDb()
        }
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/cart", (req, res) => {
  res.render("cart");
});

router.get("/orders", (req, res) => {
  res.render("orders");
});

router.get("/user", (req, res) => {
  Order.find((err, docs) => {
    if (!err) {
      res.render("user", {
        order: docs,
      });
    } else {
      console.log("Error in order: " + err);
    }
  });
});

router.get("/order/:id", (req, res) => {
  Order.findByID(req.params.id, (err, doc) => {
    if (!err) {
      res.render("orders", { order: doc });
    } else {
      console.log("Error findbyId: " + err);
    }
  });
});

router.get("/order/delete/:id", (req, res) => {
  Order.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/user");
    } else {
      console.log("Error in delete: " + err);
    }
  });
});

//Post
router.post("/cart", (req, res) => {
  insertOrder(req, res);
});
router.post("/oder", (req, res) => {
  updateOrder(req, res);
});

//Functions

function updateOrder(req, res) {
  Order.findOneAndUpdate(
    { id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("/user");
      } else {
        console.log("Update error" + err);
      }
    }
  );
}

function insertOrder(req, res) {
  var d = new Date();
  var t = d.getTime();
  var counter = t;
  counter += 1;
  var order = new Order();
  order.total = req.body.total;
  order.order = counter;
  order.save((err, doc) => {
    if (!err) {
      console.log("order: " + order);
      res.redirect("/user");
    } else {
      console.log("Error insertOrder: " + err);
    }
  });
}

module.exports = router;
