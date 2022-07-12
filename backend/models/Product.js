'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ SalesOrder, Customer, Cart }) {
       // sales order
      Product.hasMany( SalesOrder, { 
        as: 'sales_orders', 
        foreignKey: 'product_id' 
      })
      // customer
      Product.hasMany( Customer, { 
        as: 'customers', 
        foreignKey: 'customer_id' 
      })
      // cart
      Product.hasMany( Cart, { 
        as: 'carts', 
        foreignKey: 'cart_id' 
      })
     }
  };
  Product.init({
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    category: {
      type: DataTypes.STRING,
      allowNull: false
  },
    description: {
      type: DataTypes.STRING,
      allowNull: false
  },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
  },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
    
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'Products',
  timestamps: false
})
return Product
}

// EXPORT 
module.exports = Product