const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class SubCategory extends Model {}

SubCategory.init(
  {
    // define id column
    sub_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   name: {
        type: DataTypes.STRING,
        allowNull: false
},
category_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'category',
    key: 'category_id',
  },
},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'subcategory',
  }
);

module.exports = SubCategory;