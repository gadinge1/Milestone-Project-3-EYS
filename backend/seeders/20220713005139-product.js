'use strict'

module.exports = { // work on strings
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product', [{
      product_id: '',
      category: '',
      description: '',
      manufacturer: '',
      product_name: '',
      product_price: '',
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('product', null, {})
  }
}
