require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const { unknownEndpoint, errorHandler } = require('./utils/middleware')

const drinksRouter = require('./controllers/drinks')
const usersRouter = require('./controllers/users')

app.use('/api/drinks', drinksRouter)
app.use('/api/users', usersRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
