const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRouter = require('./router/user')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1/user', userRouter)

app.listen(3000)

// query parameters
// api/v1/crud?id=123

// path parameters
// api/v1/crud/123
