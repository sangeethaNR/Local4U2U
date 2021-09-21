// Require
const router = require("express").Router();;
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
router.post("/", async (req, res) => {
  const { product_id, item_name, item_image, item_price, quantity } = req.body;
  const newQuantity = quantity;
  console.log('seesion id:' + req.session.user_id)
  const findProduct = await Order.findOne({
    where:{  
      product_id: product_id,
      user_id :req.session.user_id }, 
      attributes: ['quantity',
                      'id'
              ]
  });

  if(findProduct != null){
    try{
    const updateProduct = Order.update({
      quantity: quantity + newQuantity,
     },
     {
        where: {
            id: findProduct.id
        }
    });
  
  res.status(200).json(updateProduct);
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
      item_price:parseInt(item_price),
      quantity:parseInt(quantity),
      total: quantity * item_price,
      product_id:product_id
    });
    res.json(createdOrder);
  }

catch(error){
    console.log(error)
    res.status(500).json(error);

}
  }

});

router.get("/", (req, res) => {
  res.render("cart");
});

module.exports = router;
