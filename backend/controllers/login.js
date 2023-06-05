const jwt = require('jsonwebtoken')
const brcyt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/User')

loginRouter.post('/', async (request, response, next) => {
  const { body } = request
  const { username, password } = body
  try {
    const user = await User.findOne({ username })

    const passwordCorrect = user === null
      ? false
      : await brcyt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      response.status(401).json({
        error: 'invalid user or password'
      })
      return null
    }

    const userForToken = {
      id: user._id,
      username: user.username
    }

    const token = jwt.sign(
      userForToken,
      process.env.SECRET_WORD,
      { expiresIn: 60 * 60 * 24 * 7 }
    )

    response.send({
      name: user.name,
      username: user.username,
      token
    })
  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
