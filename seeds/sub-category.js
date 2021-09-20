const { SubCategory } = require("../models");

const subCategoryData = [
  {
    name: "Fruits",
    category_id: 1,
  },
  {
    name: "Vegetables",
    category_id: 1,
  },
  {
    name: "Meats",
    category_id: 1,
  },
  {
    name: "Grains",
    category_id: 1,
  },
  {
    name: "Men",
    category_id: 3,
  },
  {
    name: "Women",
    category_id: 3,
  },
  {
    name: "Condiments", //7
    category_id: 4,
  },
  {
    name: "Snacks", //8
    category_id: 4,
  },
  {
    name: "Bakery", //9
    category_id: 4,
  },
];
const seedSubCategories = () => SubCategory.bulkCreate(subCategoryData);

module.exports = seedSubCategories;
