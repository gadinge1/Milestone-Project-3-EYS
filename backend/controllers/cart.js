// DEPENDENCIES 
const carts = require('express').Router()
const db = require('../models')
const { Cart, Product, SalesOrder } = db 
const { Op } = require('sequelize')

// FIND ALL carts
carts.get('/', async (req, res) => {
    try {
        const foundCarts = await Cart.findAll({
            order: [ [ '', '' ] ], // need to fix 
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundcarts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC cart
carts.get('/:name', async (req, res) => {
    try {
        const foundcart = await cart.findOne({
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
        res.status(200).json(foundcart)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A cart or PROFILE
carts.post('/', async (req, res) => {
    try {
        const newcart = await cart.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new cart',
            data: newcart
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A cart or PROFILE
carts.put('/:id', async (req, res) => {
    try {
        const updatedcarts = await cart.update(req.body, {
            where: {
                cart_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedcarts} cart(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A cart or PROFILE
carts.delete('/:id', async (req, res) => {
    try {
        const deletedcarts = await cart.destroy({
            where: {
                cart_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedcarts} cart(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = carts