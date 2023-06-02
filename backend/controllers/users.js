const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.get('/', async (request, response, next) => {
  try {
    const users = await User.find({}).populate('drinks', {
      title: 1,
      description: 1,
      ingredients: 1,
      image: 1,
      date: 1
    })

    response.json(users)
  } catch (error) {
    next(error)
  }
})

usersRouter.post('/', (request, response, next) => {
  const { body } = request
  const { username, name, password } = body

  const user = new User({
    username,
    name,
    passwordHash: password
  })

  user.save()
    .then(savedUser => response.json(savedUser))
    .catch(err => next(err))
})

module.exports = usersRouter
