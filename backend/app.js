const express = require('express')
const path = require('path')

const drinks = require('./mocks/with-results.json')
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get('/coffeeTime*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/dist', 'index.html'))
})

// api fake de drinks
app.get('/drinks', (request, response) => {
  response.json(drinks)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
