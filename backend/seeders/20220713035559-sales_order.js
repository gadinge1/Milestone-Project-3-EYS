'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales_order', [{
      salesOrder_id: '',
      cart_id: '',
      customer_id: '',
      shipping_address: '',
      billing_address: ''      
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('sales_order', null, {})
  }
}

