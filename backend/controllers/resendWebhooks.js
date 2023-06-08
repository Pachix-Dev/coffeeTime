const resendWebhooksRouter = require('express').Router()

resendWebhooksRouter.post('/', async (request, response, next) => {
  const payload = request.body
  console.log(payload)
  response.status(200)
})

module.exports = resendWebhooksRouter
