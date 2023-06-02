const jwt = require('jsonwebtoken')
const brcyt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/User')

loginRouter.post('/', async (request, response) => {
  const { body } = request
  const { username, password } = body

  const user = await User.findOne({ username })
  const passworCorrect = user === null
    ? false
    : await brcyt.compare(password, user.passwordHash)

  if (!(user && passworCorrect)) {
    response.status(401).json({
      error: 'invalid user or password'
    })
  }
  const userForToken = {
    id: user._id,
    username: user.username
  }

  const token = jwt.sign(userForToken, process.env.SECRET_WORD, { expiresIn: 60 * 60 * 24 * 7 })

  response.send({
    name: user.name,
    username: user.username,
    token
  })
})

module.exports = loginRouter
