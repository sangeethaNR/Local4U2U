const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Accessory extends Model {}

Accessory.init(
  // category needed for male female - pending seed file structure
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    access_name: {
      type: DataTypes.STRING,
      allowNull: false,     
    },
    
  image: {
    type: DataTypes.STRING,
    allowNull: false
},
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
          isNumeric: true,
      }
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
  category_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'category',
        key: 'id',
    }
},
    
   },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'accessory',
  }
);

module.exports = Accessory;
