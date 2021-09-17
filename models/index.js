const Produce = require('./produce');
const Category = require('./category');
const Clothes = require('./clothes')
const Food = require('./food');
const Accessory = require('./accessory');
const User = require('./user');
const SubCategory = require('./subCategory');
// Are we able to use One to One; One to Many
Produce.belongsTo(Food, {
    foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Clothes, {
    foreignKey: 'category_id',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Accessory.belongsToMany(Clothes, {
    through: ProductTag,
    foreignKey: 'tag_id'
})

module.exports = {
  
  Category,
  SubCategory,
  Produce,
  Accessory,
  Clothes,
  Food,  
  User
};
