require('dotenv').config()
require('./mongo')

const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json({ limit: '25mb' }))
app.use(express.urlencoded({ extended: true }, { limit: '25mb' }))

app.use(fileUpload({
  limits: {
    fileSize: 1000000 // 1mb
  },
  abortOnLimit: true
}))

const { unknownEndpoint, errorHandler } = require('./utils/middleware')

const drinksRouter = require('./controllers/drinks')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const coffeeTimeRecaptchaRouter = require('./controllers/coffeeTimeRecaptcha')
const resendWebhooksRouter = require('./controllers/resendWebhooks')

app.use('/api/login', loginRouter)
app.use('/api/drinks', drinksRouter)
app.use('/api/users', usersRouter)

// api google recaptcha
app.use('/api/recaptcha', coffeeTimeRecaptchaRouter)

// api Resend mail webhooks
app.use('/api/resend-webhooks', resendWebhooksRouter)

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
// portfolio website
app.use('/', express.static(path.join(__dirname, '/portfolio')))

// coffeeTime website
app.use('/coffeeTime', express.static(path.join(__dirname, '../frontend/dist')))
app.get('/coffeeTime*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'))
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
