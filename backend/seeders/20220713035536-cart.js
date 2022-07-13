'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cart', [{
      cart_id: ''
      
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the carts table
    await queryInterface.bulkDelete('cart', null, {})
  }
}
