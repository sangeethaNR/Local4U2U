const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Order extends Model {}

Order.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: 'user',
            key: 'id',
        }
      },
     
      item_name: {
          type: DataTypes.CHAR,
          allowNull: false
      },
      item_image: {
        type: DataTypes.CHAR,
        allowNull: false
      },
      item_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      product_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;