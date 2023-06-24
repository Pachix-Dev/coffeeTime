import Alert from 'react-bootstrap/Alert'

export function ErrorHandlers (props) {
  const errorName = Object.keys(props.errors)

  const ERROR_HANDLERDS = {

    inputUnique: 'ingredient must be unique',

    inputVoid: 'please enter a value and click Add',

    imageVoid: 'please upload an image you can upload up to 1MB',

    maxNumber: 'Number of upload images exceed',

    acceptType: 'Your selected file type is not allow please selected image format jpg,png,jpeg',

    maxFileSize: 'Selected Image size exceed size you can upload up to 1MB',

    defaultError: 'Something was wrong try later...'
  }

  return (
    <div>
      <Alert variant='danger' transition>
        {ERROR_HANDLERDS[errorName] || ERROR_HANDLERDS.defaultError}
      </Alert>

    </div>
  )
}
