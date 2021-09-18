const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');


// Use withAuth middleware to prevent access to route
//Default landing page when user hits the webpage
router.get('/', withAuth, async (req, res) => {
  
    try {
        console.log('checeking user_id :' + req.session.user_id)
      //post of particular user
      const categoryData = await Category.findAll({ raw: true });
     const categories = categoryData.map((category) => category.get({ plain: true }));
 
    res.render('category', {
        categories,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // get subcategories for every category
  router.get('/:id', withAuth,async (req, res) => {
    try{
        const subCategoryData = await Post.findAll({
            where :{
                id : req.params.id
            },
            attributes :[
                'id',
                'name'
        ]
        });
        const subCategories = subCategoryData.map((subCategory) => subCategory.get({ plain: true }));
        res.render('subCategory', {
            subCategories,
            logged_in: true
          });
    }
    catch{
        res.status(500).json(err);
    }
})

module.exports = router;