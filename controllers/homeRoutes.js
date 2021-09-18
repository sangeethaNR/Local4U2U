const router = require('express').Router();
//const { Pro, Painting } = require('../models');
const withAuth = require('../utils/auth');

const { Category, SubCategory,Produce,Food,Clothes,Accessory } = require('../models');

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/',withAuth,(req,res) => {

try{
  res.redirect('api/category/')
}
catch (err) {
  res.status(500).json(err);
}

  })
module.exports = router;
