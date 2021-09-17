const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Produce extends Model {}

Produce.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    store: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true,
        }
    },
    countInStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // What is our default value
        // defaultValue: 10,
        validate: {
            isNumeric: true,
        }
    },
    category: {
        type: DataTypes.STRING,
        references: {
            model: 'produce',
            key: 'id',
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'produce',
  }
);

module.exports = Produce;