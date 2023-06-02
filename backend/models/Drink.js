const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema, model } = mongoose

const drinkSchema = new Schema({
  title: { type: String, required: true, unique: false },
  description: String,
  ingredients: Array,
  image: String,
  date: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

drinkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
drinkSchema.plugin(uniqueValidator)
const Drink = model('Drink', drinkSchema)

module.exports = Drink
