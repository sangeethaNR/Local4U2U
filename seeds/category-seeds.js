const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Produce',
  },
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Food',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
