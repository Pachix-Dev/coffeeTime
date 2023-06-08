const coffeeTimeRecaptchaRouter = require('express').Router()
const axios = require('axios')
const emailLayout = require('../layout/emailLayout')

const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_APIKEY)

coffeeTimeRecaptchaRouter.post('/', async (request, response, next) => {
  /// /Destructuring response token and input field value from request body
  const { token, formData } = request.body

  const sendClient = resend.sendEmail({
    from: 'hola@yapura.com.mx',
    to: formData.email,
    subject: 'Thanks for visit my website',
    html: emailLayout(formData.fullname)
  })

  const sendPachi = resend.sendEmail({
    from: 'hola@yapura.com.mx',
    to: 'pachi.claros@gmail.com',
    subject: 'You have a message from yapura.com.mx',
    html: `
            <p>Name: ${formData.fullname}</p>
            <p>Email: ${formData.email}</p>
            <p>Email: ${formData.message}</p>
          `
  })

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const result = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY_RECAPTCHA}&response=${token}`
    )

    // Check response status and send back to the client-side
    if (result.data.success) {
      Promise.allSettled([sendClient, sendPachi])
        .then((results) =>
        // console.log(results)
          response.send({
            results,
            success: true,
            message: 'Human 👨 👩'
          })
        )
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
