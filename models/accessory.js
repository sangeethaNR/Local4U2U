const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Accessory extends Model {}

Accessory.init(
  // category needed for male female - pending seed file structure
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },

    countInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
   },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'accessory',
  }
);

module.exports = Accessory;
