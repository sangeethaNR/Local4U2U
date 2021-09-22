const router = require("express").Router();
const withAuth = require("../utils/auth");
const {Order,User} = require("../models");

router.get("/", withAuth,async(req, res) => {
  try{
    console.log(req.session.user_id)
    const productInCart = await Order.findAll({
      where:{  
     user_id: req.session.user_id},
 
  
    });
  //console.log('post data : ' + postData);
    const cart_products = productInCart.map((cart) => cart.get({ plain: true }));
  //    console.log('dashboard_post without: ' + dashboard_post);
  
  console.log("cart_products:" + JSON.stringify(cart_products));
    res.render('checkout', {
      cart_products,
      logged_in: true
    });
  
  }
  catch(error){
    res.status(500).json(error);
  
  }
 
});

router.get("/finish", withAuth,async(req, res) => {
  try{
    const postData = await Order.destroy({
      where: {
       
        user_id: req.session.user_id,
      },
    });


    res.render('confirmation', {

      logged_in: true
    });
  }

  catch(error){
    res.status(500).json(error);
  
  }
});


module.exports = router;
