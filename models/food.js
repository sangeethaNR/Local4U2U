const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Food extends Model {}

Food.init(
  {
    food_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      food_name: {
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
    category_id: {
        type: DataTypes.STRING,
        references: {
            model: 'category',
            key: 'category_id',
        }
    },
    sub_category_id: {
        type: DataTypes.STRING,
        references: {
            model: 'subcategory',
            key: 'sub_category_id',
        }
    },
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