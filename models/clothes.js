const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Clothes extends Model {}

Clothes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      
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
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
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
    modelName: 'clothes',
  }
);

module.exports = Clothes;