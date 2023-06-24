import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import ImageUploading from 'react-images-uploading'
import uploadImage from '../../assets/img/imageUpload.svg'
import { ErrorHandlers } from './ErrorHandlers'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useState } from 'react'
import { useValidate } from '../../hooks/useValidate'

export function FormDrink ({ handleSubmit, ...props }) {
  const maxNumber = 8
  const [ingredients, setIngredients] = useState(props.ingredients || [])

  const { error, setError } = useValidate()

  const addIngredient = () => {
    if (document.getElementById('ingredient').value === '') {
      setError({ inputVoid: true })
      return
    }
    const newIngredient = document.getElementById('ingredient').value
    if (ingredients.some(ingredient => ingredient.toLowerCase() === newIngredient.toLowerCase())) {
      setError({ inputUnique: true })
      return
    }
    setIngredients(ingredients.concat(newIngredient))
    document.getElementById('ingredient').value = ''
  }
  const removeIngredient = (deleteIngredient) => {
    setIngredients((current) =>
      current.filter((ingredient, index) => index !== deleteIngredient)
    )
  }
  const baseUrl = window.location.origin + '/uploads/'
  return (
    <Container>
      <Form id='form-update-drink' onSubmit={handleSubmit} encType='multipart/form-data'>
        <Row>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name='title'
                type='text'
                autoComplete='off'
                placeholder='Drink name...'
                defaultValue={props?.title}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                name='description'
                placeholder='Add description...'
                as='textarea'
                rows={8}
                defaultValue={props?.description}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='ingredient'>
              <Form.Label>Ingredients</Form.Label>
              {
              props?.showError !== null
                ? <ErrorHandlers errors={props?.showError} />
                : error !== null
                  ? <ErrorHandlers errors={error} />
                  : ''
              }
              <InputGroup className='mb-3'>
                <Form.Control
                  type='text'
                  autoComplete='off'
                  placeholder='Add new ingredient'
                  onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                />
                <Button variant='outline-success' onClick={addIngredient}>
                  Add
                </Button>
              </InputGroup>
              <ul id='ingredients-list' className='ingredients-list'>
                {ingredients?.map((ingredient, index) => {
                  return (
                    <li key={index}>
                      <span>{ingredient}</span>
                      <button type='button' aria-label='eliminar ingrediente' className='delete' onClick={() => removeIngredient(index)}>
                        <svg viewBox='0 0 16 16'>
                          <g fillRule='evenodd'>
                            <path d='M-4.757 2.343L-9 6.586l-4.243-4.243-1.414 1.414L-10.414 8l-4.243 4.243 1.414 1.414L-9 9.414l4.243 4.243 1.414-1.414L-7.586 8l4.243-4.243z' fillRule='nonzero' />
                            <path d='M4.45 3.036l8.485 8.485-1.414 1.414L3.036 4.45z' />
                            <path d='M11.52 3.036l1.415 1.414-8.485 8.485-1.414-1.414z' />
                          </g>
                        </svg>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className='mb-3'>
          <strong>Upload Image</strong>
          <ImageUploading
            multiple
            value={props?.images}
            onChange={props?.onChange}
            onError={props?.onError}
            maxNumber={maxNumber}
            dataURLKey='data_url'
            acceptType={['png', 'jpg', 'jpeg']}
            maxFileSize={1000000}
            inputProps={{ name: 'images' }}
          >
            {({
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              <>
                {props.errorsImage && <ErrorHandlers errors={props.errorsImage} />}
                <div className='upload-image-wrapper'>
                  <div
                    style={isDragging ? { borderColor: 'red' } : undefined}
                    {...dragProps}
                    className={props.images.length === 9 ? 'd-none' : 'upload-image__click-drog'}
                    onClick={onImageUpload}
                  >
                    <img src={uploadImage} />
                    <span> Click or Drop here</span>
                  </div>
                  {props.images.map((image, index) => (
                    <div key={index} className='image-item'>
                      <img src={image?.data_url ? image.data_url : baseUrl + image} alt='' width='200' />
                      <div className='image-item__btn-wrapper'>
                        <Button
                          type='button'
                          variant='secondary'
                          aria-label='edit image'
                          onClick={() => onImageUpdate(index)}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                          </svg>
                        </Button>
                        <Button
                          type='button'
                          variant='danger'
                          aria-label='remove image'
                          onClick={() => onImageRemove(index)}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                          </svg>

                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </ImageUploading>

        </Form.Group>
        <Button variant='info' type='submit'>
          Save
        </Button>
      </Form>
    </Container>
  )
}
