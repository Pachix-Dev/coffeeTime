const coffeeTimeRecaptchaRouter = require('express').Router()
const axios = require('axios')

coffeeTimeRecaptchaRouter.post('/', async (request, response, next) => {
  /// /Destructuring response token and input field value from request body
  const { token } = request.body
  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const result = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY_RECAPTCHA}&response=${token}`
    )

    // Check response status and send back to the client-side
    if (result.data.success) {
      response.send({
        success: true,
        message: 'Human 👨 👩'
      })
    } else {
      response.send({
        success: false,
        message: 'Robot 🤖'
      })
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.log(error.name)
    response.status(500).send('Error verifying reCAPTCHA')
    next(error)
  }
})
module.exports = coffeeTimeRecaptchaRouter
