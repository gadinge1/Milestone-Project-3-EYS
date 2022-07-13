// DEPENDENCIES 
const accounts = require('express').Router()
const db = require('../models')
const { User, SalesOrder } = db 
const { Op } = require('sequelize')
const Account = require('../models/Account')

// FIND ALL ACCOUNTS
accounts.get('/', async (req, res) => {
    try {
        const foundAccounts = await Account.findAll({
            order: [ [ 'name', 'ASC' ] ], // need to fix
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundAccounts)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC ACCOUNT
accounts.get('/:name', async (req, res) => {
    try {
        const foundAccounts = await Account.findOne({
            where: { name: req.params.name },
            include: [
                { 
                    model: SalesOrder, 
                    as: "sales_orders", 
                    attributes: { exclude: ["account_id"] },
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
        console.log(foundAccount)
        res.status(200).json(foundAccount)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE AN ACCOUNT OR USER
accounts.post('/', async (req, res) => {
    try {
        const newAccount = await Account.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new account',
            data: newAccount
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE AN ACCOUNT OR USER
accounts.put('/:id', async (req, res) => {
    try {
        const updatedAccounts = await Account.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedAccounts} account(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE AN ACCOUNT OR USER
accounts.delete('/:id', async (req, res) => {
    try {
        const deletedAccounts = await Account.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedAccounts} account(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = accounts