'use strict'

module.exports = { // work on strings
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('customer', [{
      customer_id: '',
      name: '',
      email: '',
      password: '',
      customer_phone: '',
      shipping_address: '',
      billing_address: '',
      user_id: ''
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('customer', null, {})
  }
}
