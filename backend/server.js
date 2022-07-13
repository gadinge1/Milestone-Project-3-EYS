// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const customersController = require('./controllers/customer')
const cartsController = require('./controllers/cart')
const salesOrdersController = require('./controllers/sales_order')
const productsController = require('./controllers/product')


// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Ellavate Your Skin Today!'
    })
})

// CONTROLLERS  
const customersController = require('./controllers/customer')
app.use('/customers', customersController)

const cartsController = require('./controllers/cart')
app.use('/carts', cartsController)

const salesOrdersController = require('./controllers/sales_order')
app.use('/sales_orders', salesOrdersController)

const productsController = require('./controllers/product')
app.use('/products', productsController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`⭐ Glowing ⭐' on port: ${process.env.PORT}`)
})