// Require
const router = require("express").Router();
const withAuth = require('../utils/auth');
const {Order,User} = require("../models");

router.post("/",withAuth, async (req, res) => {
  const { product_id, item_name, item_image, item_price, quantity,total} = req.body;
  const findProduct = await Order.findOne({
    where:{  
      product_id: product_id,
      user_id :req.session.user_id }, 
      attributes: ['quantity',
                      'id',
                      'total',
                      'item_price'
              ]
  });

  if(findProduct != null){
    try{
      await Order.increment(
        { quantity: +quantity,
         total :findProduct.item_price *(findProduct.quantity)
        },
        { where: { id: findProduct.id } }
      );
  res.status(200).json(findProduct);
  }
catch (err) {
  res.status(400).json(err);
}}

  else{
try{
 
    const createdOrder = await Order.create({
     
      user_id: req.session.user_id,      
      item_name:item_name,
      item_image:item_image,
      item_price:item_price,
      quantity:quantity,
      total: total,
      product_id:product_id
    });
    res.status(200).json(createdOrder);
  }

catch(error){
    console.log(error)
    res.status(500).json(error);

  }}
});

router.get("/",withAuth,async (req, res) => {
try{
  const productInCart = await Order.findAll({
    where:{  
   user_id: req.session.user_id},
  });

const cart_products = productInCart.map((cart) => cart.get({ plain: true }));
console.log("cart_products:" + JSON.stringify(cart_products));
  res.render('cart', {
    cart_products,
    logged_in: true
  });
}
catch(error){
  res.status(500).json(error);
}
});

module.exports = router;
