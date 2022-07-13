'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Product, customer }) {
      // products
      SalesOrder.hasMany(Product, {
        foreignKey: "product_id",
        as: "products"
      })
      // customer
      SalesOrder.hasMany(customer, {
        foreignKey: "customer_id",
        as: "customers"
      })
    }
  }
  SalesOrder.init({
    salesOrder_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false
  },
    billing_address: {
      type: DataTypes.STRING,
      allowNull: false
  },
    
}, {
  sequelize,
  modelName: 'SalesOrder',
  tableName: 'SalesOrders',
  timestamps: false
})
return SalesOrder
}

// EXPORT 
module.exports = SalesOrder