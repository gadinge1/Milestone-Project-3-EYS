// DEPENDENCIES 
const customers = require('express').Router()
const db = require('../models')
const { Customer, SalesOrder } = db 
const { Op } = require('sequelize')

// FIND ALL CUSTOMERS
customers.get('/', async (req, res) => {
    try {
        const foundCustomers = await Customer.findAll({
            order: [ [ 'name', 'ASC' ] ], // need to fix
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundCustomers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC CUSTOMER
customers.get('/:name', async (req, res) => {
    try {
        const foundCustomer = await Customer.findOne({
            where: { name: req.params.name },
            include: [
                { 
                    model: SalesOrder, 
                    as: "sales_orders", 
                    attributes: { exclude: ["customer_id"] },
                    // include: { 
                    //     model: Product, // need fixing
                    //     as: "products", 
                    //     where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
                    // }
    
                }
            ],
            order: [
                [{ model: SalesOrder, as: "sales_orders" } , 'transaction_date', 'DESC'], // need fixing
            ]
        })
        console.log(foundCustomer)
        res.status(200).json(foundCustomer)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A CUSTOMER or PROFILE
customers.post('/', async (req, res) => {
    try {
        const newCustomer = await Customer.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new customer',
            data: newCustomer
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A CUSTOMER or PROFILE
customers.put('/:id', async (req, res) => {
    try {
        const updatedCustomers = await Customer.update(req.body, {
            where: {
                customer_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedCustomers} customer(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A CUSTOMER or PROFILE
customers.delete('/:id', async (req, res) => {
    try {
        const deletedCustomers = await Customer.destroy({
            where: {
                customer_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedCustomers} customer(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = customers