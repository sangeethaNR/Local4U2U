const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Food extends Model {}

Food.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    mage: {
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
            model: 'food',
            key: 'id',
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'food',
  }
);

module.exports = Food;