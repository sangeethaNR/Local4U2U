const Produce = require('./produce');
const Category = require('./category');
const Clothes = require('./clothes')
const Food = require('./food');
const Accessory = require('./accessory');
const User = require('./user');
const SubCategory = require('./subCategory');
const Order = require('./Order');
// Are we able to use One to One; One to Many
Produce.belongsTo(Category, {
    foreignKey: 'category_id'
});
Accessory.belongsTo(Category, {
    foreignKey: 'category_id'
});
Food.belongsTo(Category, {
    foreignKey: 'category_id'
});
Clothes.belongsTo(Category, {
    foreignKey: 'category_id'
});
SubCategory.belongsTo(Category,{
    foreignKey :'category_id'
});
Order.belongsTo(User, {
    foreignKey: "id"
})


Produce.belongsTo(SubCategory, {
    foreignKey: 'sub_category_id'
});

Food.belongsTo(SubCategory, {
    foreignKey: 'sub_category_id'
});
Clothes.belongsTo(SubCategory, {
    foreignKey: 'sub_category_id'
});

Category.hasMany(SubCategory, {
    foreignKey: 'category_id',
});
Category.hasMany(Produce, {
    foreignKey: 'category_id',
});
Category.hasMany(Food, {
    foreignKey: 'category_id',
});
Category.hasMany(Clothes, {
    foreignKey: 'category_id',
});
Category.hasMany(Accessory, {
    foreignKey: 'category_id',
});
User.hasMany(Order, {
    foreignKey: "user_id"
})




//parent to child relation :hasMany




// // Categories have many Products
// Category.hasMany(Clothes, {
//     foreignKey: 'category_id',
// })
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//     through: ProductTag,
//     foreignKey: 'product_id'
// })
// // Tags belongToMany Products (through ProductTag)
// Accessory.belongsToMany(Clothes, {
//     through: ProductTag,
//     foreignKey: 'tag_id'
// })

module.exports = {
  
  Category,
  SubCategory,
  Produce,
  Accessory,
  Clothes,
  Food,  
  User
};
