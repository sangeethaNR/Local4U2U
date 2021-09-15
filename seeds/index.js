const seedCategories = require('./category-seeds');
const seedClothes = require('./clothes-category');
const seedAccess = require('./accessory-category');
const seedProduce = require('./produce-category');
const seedFood = require('./food-category');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedClothes();
  console.log('\n----- CLOTHES SEEDED -----\n');

  await seedFood();
  console.log('\n----- FOOD SEEDED -----\n');

  await seedProduce();
  console.log('\n----- PRODUCE SEEDED -----\n');
  
  await seedAccess();
  console.log('\n----- ACCESSORIES SEEDED -----\n');


  process.exit(0);
};

seedAll();
