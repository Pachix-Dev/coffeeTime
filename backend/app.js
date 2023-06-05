require('dotenv').config()
require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { unknownEndpoint, errorHandler } = require('./utils/middleware')

const drinksRouter = require('./controllers/drinks')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const coffeeTimeRecaptchaRouter = require('./controllers/coffeeTimeRecaptcha')

app.use('/api/login', loginRouter)
app.use('/api/drinks', drinksRouter)
app.use('/api/users', usersRouter)
app.use('/api/recaptcha', coffeeTimeRecaptchaRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
