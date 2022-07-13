'use strict'

module.exports = { // work on strings
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cart', [{
      cart_id: '',
      
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('cart', null, {})
  }
}
