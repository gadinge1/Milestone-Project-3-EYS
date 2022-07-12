'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ SalesOrder }) {
       // sales order
      Customer.hasMany( SalesOrder, { 
        as: 'sales_orders', 
        foreignKey: 'customer_id' 
      })
     }
  };
  Customer.init({
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    email: {
      type: DataTypes.STRING,
      allowNull: false
  },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
  },
    customer_phone: {
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
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  sequelize,
  modelName: 'Customer',
  tableName: 'Customers',
  timestamps: false
})
return Customer
}

// EXPORT 
module.exports = Customer