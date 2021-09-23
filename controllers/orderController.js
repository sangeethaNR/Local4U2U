// Require
const router = require("express").Router();
const withAuth = require('../utils/auth');
const {Order,User} = require("../models");

// var router = express.Router();

// router.post("/", async (req, res) => {
//   console.log('cart items' + JSON.stringify(req.body))
//   const { product_id, item_name, item_image, item_price, quantity } = req.body;
//   async function insertToDb() {
//     const createdOrder = await Order.create({
     
//       user_id: req.session.user_id,      
//       item_name,
//       item_image,
//       item_price,
//       quantity,
//       total: quantity * item_price,
//       product_id
//     });
//     res.json(createdOrder);
//   }
//   try {
//     const orders = await Order.findAll();
//     if (orders.length < 1) {
//         insertToDb()
//     } else {
//       orders.forEach((item) => {
//         if (item.id === product_id) {
//           console.log("cannot add same item to cart")
//           res.json({msg: "cannot add same item to cart"})
//         } else {
//             insertToDb()
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(500).json(error);
//   }
// });
router.post("/",withAuth, async (req, res) => {
  const { product_id, item_name, item_image, item_price, quantity,total} = req.body;
  //console.log('inside cart post route:' + JSON.stringify(req.body))
  //console.log('seesion id:' + req.session.user_id)
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
        { quantity: +1,
         total :findProduct.item_price *(findProduct.quantity)
        },
        { where: { id: findProduct.id } }
      );
    // const updateProduct = Order.update({
    //   quantity: quantity + 1,
    //   total : quantity * item_price
    //  },
    //  {
    //     where: {
    //         id: findProduct.id
    //     }
    // });
  
  res.status(200).json(findProduct);
  }
catch (err) {
  res.status(400).json(err);
}

}

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

}
  }

});

router.get("/",withAuth,async (req, res) => {
try{
  //console.log(req.session.user_id)
  const productInCart = await Order.findAll({
    where:{  
   user_id: req.session.user_id},
  //  attributes: [ 'item_image', 'item_name','item_price','quantity',
  //   [ sequelize.literal(
  //       'COALESCE(item_price, 0) * COALESCE(quantity, 0)'
  //     ), 'NewPrice'
  //   ]
 // ],
  

  });
//console.log('post data : ' + postData);
  const cart_products = productInCart.map((cart) => cart.get({ plain: true }));
//    console.log('dashboard_post without: ' + dashboard_post);

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
