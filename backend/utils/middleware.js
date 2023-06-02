const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const ERROR_HANDLERDS = {
  CastError: response =>
    response.status(400).send({ errror: 'malformatted id ' }),

  ValidationError: (response, error) =>
    response.status(409).send({ error: error.message }),

  JsonWebTokenError: response =>
    response.status(401).json({ error: 'token missing or invalid' }),

  TokenExpiredError: (response) =>
    response.status(401).json({ error: 'token expired' }),

  defaultError: response => response.status(500).end()
}
const errorHandler = (error, request, response, next) => {
  // nice refactor idea by midu
  const handler = ERROR_HANDLERDS[error.name] || ERROR_HANDLERDS.defaultError
  handler(response, error)
  next(error)
}

module.exports = {
  unknownEndpoint,
  errorHandler
}
