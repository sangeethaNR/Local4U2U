const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Clothes extends Model {}

Clothes.init(
  {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
    },
        image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true,
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // what is our default value - 
        //defaultValue: 10,
        validate: {
            isNumeric: true,
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'clothes',
  }
);

module.exports = Clothes;