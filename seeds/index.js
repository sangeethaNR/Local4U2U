const seedCategories = require('./category-seeds');
const seedClothes = require('./clothes-category');
const seedAccess = require('./accessory-category');
const seedProduce = require('./produce-category');
const seedFood = require('./food-category');
const seedSubCategories = require('./sub-category')
const { User, Produce,Clothes,Category
,SubCategory,Accessory,Food } = require('../models');

const userData = require('./userData.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedSubCategories();
  console.log('\n----- SUB CATEGORIES SEEDED -----\n');
  await seedProduce();
  console.log('\n----- PRODUCE SEEDED -----\n');
  
  await seedAccess();
  console.log('\n----- ACCESSORIES SEEDED -----\n');  

  await seedClothes();
  console.log('\n----- CLOTHES SEEDED -----\n');

  await seedFood();
  console.log('\n----- FOOD SEEDED -----\n');

  


  process.exit(0);
};

seedAll();
