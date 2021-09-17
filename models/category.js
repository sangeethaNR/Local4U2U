const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define id column
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,

        // autoIncrement: true, - do we need
        //what other categories
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;