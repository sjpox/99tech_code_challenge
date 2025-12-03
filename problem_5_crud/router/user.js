const express = require('express')
const userRouter = express.Router()
const db = require('../db')

userRouter.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM user')
        res.json(rows)
    } catch (error) {
        console.error(error)
        res.json({
            errorMessage: error
        })
    }
})

userRouter.post('/create', async (req, res) => {
    try {
        const body = req.body
        await db.execute('INSERT INTO user(id, firstName, lastName) VALUES (?, ?, ?)', [body.id, body.firstName, body.lastName])
        res.json({
            message: 'User added successfully'
        })
    } catch (error) {
        console.error(error)
        res.json({
            errorMessage: error
        })
    }
})

userRouter.put('/update/:id', async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        await db.execute('UPDATE user SET firstName = ?, lastName = ? WHERE id = ?', [body.firstName, body.lastName, id])
        res.json({
            message: 'User updated successfully'
        })
    } catch (error) {
        console.error(error)
        res.json({
            message: error
        })
    }
})

userRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.execute('DELETE FROM user WHERE id = ?', [id])
        res.json({
            message: 'User deleted successfully'
        })
    } catch (error) {
        console.error(error)
        res.json({
            message: error
        })
    }
})

module.exports = userRouter