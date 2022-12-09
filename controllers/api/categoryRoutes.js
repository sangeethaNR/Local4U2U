
const router = require("express").Router();
const { Category, SubCategory, Produce, Accessory, Clothes, Food } = require("../../models");
const withAuth = require("../../utils/auth");

//Use withAuth middleware to prevent access to route
//Default landing page when user hits the webpage
router.get("/", withAuth, async (req, res) => {
   try {
    const categories = await Category.findAll({ raw: true });
    res.render("category", {
      categories,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get subcategories for every category
router.get("/:id", withAuth, async (req, res) => {
  try {
    if (req.params.id == 2) {
      const accessoryData = await Accessory.findAll({
        where: {
          category_id: req.params.id,
        },
        attributes: ["id", "access_name", "image","stock","price","store_name","category_id"],
      });
      const accessories = accessoryData.map((accessory) =>
      accessory.get({ plain: true })
      );
      res.render('accessory', {
        accessories,
          logged_in: true,
        });
    } else {
      const subCategoryData = await SubCategory.findAll({
        where: {
          category_id: req.params.id,
        },
        attributes: ["id", "name", "category_id"],
      });
      const subCategories = subCategoryData.map((subCategory) =>
        subCategory.get({ plain: true })
      );
      const categories = await Category.findAll({
        where: {
          id: req.params.id
        }
      })
      console.log("subCategory:" + JSON.stringify(subCategories));

      res.render('subCategory', {
          subCategories,
          logged_in: true,
        });
    }
  } catch {
    res.status(500).json(err);
  }
});

router.get("/:category_id/item/:id", async (req, res) => {
  const { id, category_id } = req.params
  try {
    const category = await Category.findOne({
      where: {
        id: category_id
      }
    })
    if(category.category_name === "Produce") {
      const product = await Produce.findAll({
        where: {
          sub_category_id: id
        }
      })
      res.json(product)
    } else if(category.category_name === "Food") {
      const food = await Food.findAll({
        where: {
          sub_category_id: id
        }
      })
      res.json(food)
    } else if(category.category_name === "Clothing") {
      const clothes = await Clothes.findAll({
        where: {
          sub_category_id: id
        }
      })
      res.json(clothes)
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;
