const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Produce extends Model {}

Produce.init(
  {
    produce_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      
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
    store_name: {
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
    // countInStock: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     // What is our default value
    //     // defaultValue: 10,
    //     validate: {
    //         isNumeric: true,
    //     }
   // },
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
    modelName: 'produce',
  }
);

module.exports = Produce;