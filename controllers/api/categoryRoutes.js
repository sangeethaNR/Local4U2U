const router = require('express').Router();
const { Category,SubCategory, Accessory } = require('../../models');
const withAuth = require('../../utils/auth');


// Use withAuth middleware to prevent access to route
//Default landing page when user hits the webpage
router.get('/', withAuth, async (req, res) => {
  
    try {
        console.log('checeking user_id :' + req.session.user_id)
     
      const categories = await Category.findAll({ raw: true });
    
 //console.log('catefory' + JSON.stringify(categories))
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
      if(req.params.id == 2)
      {
        const accessoryData = await Accessory.findAll({
            where :{
                category_id : req.params.id
            },
            attributes :[
                'id',
                'access_name',
                'stock',
                'image',
                'price',
                'store_name'
        ]
        });
        const accessories = accessoryData.map((accesory) => accesory.get({ plain: true }));
       console.log('accessory:' + JSON.stringify(accessories));
        res.render('accessory', {
          accessories,
            logged_in: true
          });
        }
        else {
          const subCategoryData = await SubCategory.findAll({
            where :{
                category_id : req.params.id
            },
            attributes :[
                'id',
                'name',
                'category_id'
        ]
        });
        const subCategories = subCategoryData.map((subCategory) => subCategory.get({ plain: true }));
       console.log('subCategory:' + JSON.stringify(subCategories));
        res.render('subCategory', {
            subCategories,
            logged_in: true
          });
        }
    }
    catch{
        res.status(500).json(err);
    }
}
)

module.exports = router;