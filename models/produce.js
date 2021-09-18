const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Produce extends Model {}

Produce.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      produce_name: {
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
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id',
        }
    },
    sub_category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'subcategory',
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