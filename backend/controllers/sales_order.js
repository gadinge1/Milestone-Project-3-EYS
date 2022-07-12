// DEPENDENCIES 
const sales_orders = require('express').Router()
const db = require('../models')
const { SalesOrder, Product, Customer } = db // need to make sure if this is correct
const { Op } = require('sequelize')

// FIND ALL SALES ORDERS
sales_orders.get('/', async (req, res) => {
    try {
        const foundSales_orders = await SalesOrder.findAll({
            order: [ [ '', '' ] ], // need fixing
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundSales_orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC SALE ORDER
sales_orders.get('/:name', async (req, res) => {
    try {
        const foundCart = await SalesOrder.findOne({
            where: { name: req.params.name },
            include: [
                { 
                    model: SalesOrder, 
                    as: "sales_orders", 
                    attributes: { exclude: ["cart_id"] },
                    include: { 
                        model: Product, // need fixing
                        as: "products", 
                        where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
                    }
    
                }
            ],
            order: [
                [{ model: SalesOrder, as: "sales_orders" }, { model: Product, as: "products" }, 'string', 'DESC'], // need fixing
            ]
        })
        res.status(200).json(foundSales_order)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A SALES ORDER
sales_orders.post('/', async (req, res) => {
    try {
        const newSales_order = await SalesOrder.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new sales order',
            data: newSales_order
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE SALES ORDER
sales_orders.put('/:id', async (req, res) => {
    try {
        const updatedSales_order = await SalesOrder.update(req.body, {
            where: {
                sales_order_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedSales_order} sales order(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE SALES ORDER
sales_orders.delete('/:id', async (req, res) => {
    try {
        const deletedSales_order = await SalesOrder.destroy({
            where: {
                sales_order_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedSales_order} sales order(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = sales_orders