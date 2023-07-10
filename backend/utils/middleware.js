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

const uploadImages = async (request, response) => {
  const imageUploads = request.files?.imagesUpload
  const images = []
  const path = require('path')

  // ALLOWED FILE TYPES
  const allowed = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp']

  // uploads multiple images
  if (imageUploads?.length > 1) {
    images.push(await Promise.all(
      imageUploads?.map(async (imageUpload) => {
        const nameImage = Date.now() + '-' + imageUpload.name
        const uploadPath = path.join(__dirname, '../uploads/') + nameImage

        // valid file types
        if (allowed.includes(imageUpload.mimetype) === false) return response.status(400).send({ error: 'File Type not Allowed' })

        return await imageUpload.mv(uploadPath, (err) => {
          if (err) return response.status(500).send(err)
          return nameImage
        })
      })
    ))
  }

  // uploads single image
  if (imageUploads !== undefined && Array.isArray(imageUploads) === false) {
    const nameImage = Date.now() + '-' + imageUploads.name
    const uploadPath = path.join(__dirname, '../uploads/') + nameImage

    // valid file types
    if (allowed.includes(imageUploads.mimetype) === false) return response.status(400).send({ error: 'File Type not Allowed' })

    await new Promise((resolve) => {
      imageUploads.mv(uploadPath, (err) => {
        if (err) return response.status(500).send(err)
        images.push(nameImage)
        resolve(true)
      })
    })
  }
  return images
}

module.exports = {
  uploadImages,
  unknownEndpoint,
  errorHandler
}
