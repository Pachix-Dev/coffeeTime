const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  passwordHash: String,
  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Drink'
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})
userSchema.plugin(uniqueValidator)
const User = model('User', userSchema)

module.exports = User
