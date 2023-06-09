const drinksRouter = require('express').Router()
const Drink = require('../models/Drink')
const User = require('../models/User')
const { uploadImages } = require('../utils/middleware')
const userExtractor = require('../utils/userExtractor')

// get all drinks
drinksRouter.get('/', async (request, response, next) => {
  try {
    const drinks = await Drink.find({}).populate('user', {
      username: 1,
      name: 1
    })
    response.json(drinks)
  } catch (error) {
    next(error)
  }
})

// get one drink in specific
drinksRouter.get('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const drink = await Drink.findById(id).populate('user', {
      username: 1,
      name: 1
    })
    if (drink) {
      response.json(drink)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

drinksRouter.post('/', userExtractor, async (request, response, next) => {
  const { title, description, ingredients } = request.body
  const images = await uploadImages(request, response)

  // userId is recover in userExtractor
  const { userId } = request
  const user = await User.findById(userId)

  const newDrink = new Drink({
    title,
    description,
    ingredients,
    images,
    date: new Date(),
    user: user._id
  })

  try {
    const savedDrink = await newDrink.save()
    user.drinks = user.drinks.concat(savedDrink._id)
    await user.save()
    savedDrink.user = user
    response.json({
      mongodbResult: savedDrink,
      fileupLoad: images
    })
  } catch (error) {
    next(error)
  }
})

drinksRouter.put('/:id', userExtractor, async (request, response, next) => {
  const { id } = request.params
  const drink = request.body

  const imagesToUpload = await uploadImages(request, response)
  if (drink?.imageNoEdited !== undefined) {
    imagesToUpload.push(drink?.imageNoEdited)
  }

  const images = imagesToUpload.flat()

  const newDrinkInfo = {
    title: drink.title,
    description: drink.description,
    ingredients: drink.ingredients,
    images
  }

  try {
    const updateDrink = await Drink.findByIdAndUpdate(id, newDrinkInfo, { new: true })
    response.json({
      mongodbResult: updateDrink,
      fileupLoad: images
    })
  } catch (error) {
    next(error)
  }
})

drinksRouter.delete('/:id/', userExtractor, async (request, response, next) => {
  const { id } = request.params
  const { userId } = request

  try {
    await Drink.findByIdAndRemove(id)
    await User.updateOne({ _id: userId },
      { $pull: { drinks: { $in: id } } }, { new: true }
    )
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

module.exports = drinksRouter
