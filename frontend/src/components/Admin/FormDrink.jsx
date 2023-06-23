import { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import ImageUploading from 'react-images-uploading'
import uploadImage from '../../assets/img/imageUpload.svg'
import { ErrorHandlers } from './ErrorHandlers'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import drinkService from '../../services/drinks'
import AuthContext from '../../Context/AuthProvider'

export function FormDrink (props) {
  const { auth } = useContext(AuthContext)

  const { state } = props
  const [images, setImages] = useState(null)
  const maxNumber = 2
  const [ingredients, setIngredients] = useState(state?.ingredients || null)

  const [showError, setshowError] = useState(null)
  const [errorsImage, setErrorsImage] = useState(null)

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList)
    setImages(imageList)
  }

  const onError = (errors) => {
    setErrorsImage(errors)
    setTimeout(() => {
      setErrorsImage(null)
    }, 2000)
  }

  const ingredientShowError = (typeError) => {
    setshowError(typeError)
    setTimeout(() => {
      setshowError(null)
    }, 2000)
  }

  const addIngredient = () => {
    if (document.getElementById('ingredient').value === '') {
      ingredientShowError({ inputVoid: true })
      return
    }
    const newIngredient = document.getElementById('ingredient').value
    if (ingredients.some(ingredient => ingredient.toLowerCase() === newIngredient.toLowerCase())) {
      ingredientShowError({ inputUnique: true })
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

  const handleSubmit = (event) => {
    event.preventDefault()
    drinkService.setToken(auth.token)
    const listIngredients = []
    document.querySelectorAll('#ingredients-list li>span').forEach(function (item) {
      listIngredients.push(item.innerText)
    })

    if (listIngredients.length === 0) {
      ingredientShowError({ inputVoid: true })
      return
    }

    if (images === null) {
      onError({ imageVoid: true })
      return
    }
    const data = new window.FormData(event.target)

    listIngredients.forEach(item => {
      data.append('ingredients', item)
    })
    data.append('id', state?.id)

    images.forEach(item => {
      data.append('images', item.file)
    })

    console.log(data)

    drinkService.updateDrink(data)
      .then(response => {
        console.log(response)
      }).catch(e => {
        console.log(e)
      })
  }

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
                defaultValue={state?.title}
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
                defaultValue={state?.description}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='mb-3' controlId='ingredient'>
              <Form.Label>Ingredients</Form.Label>
              {showError && <ErrorHandlers errors={showError} />}
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

            <Form.Group className='mb-3'>
              <strong>Upload Image</strong>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey='data_url'
                acceptType={['png', 'jpg', 'jpeg']}
                maxFileSize={1000000}
                inputProps={{ name: 'images' }}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps
                }) => (
                  <>
                    {errorsImage && <ErrorHandlers errors={errorsImage} />}
                    <div className='upload-image-wrapper'>
                      <div
                        style={isDragging ? { borderColor: 'red' } : undefined}
                        {...dragProps}
                        className={imageList.length > 0 ? 'd-none' : 'upload-image__click-drog'}
                        onClick={onImageUpload}
                      >
                        <img src={uploadImage} />
                        <span> Click or Drop here</span>
                      </div>
                      {imageList.map((image, index) => (
                        <div key={index} className='image-item'>
                          <img src={image.data_url} alt='' width='200' />
                          <div className='image-item__btn-wrapper'>
                            <Button type='button' variant='secondary' onClick={() => onImageUpdate(index)}>Edit</Button>
                            <Button type='button' variant='danger' onClick={() => onImageRemove(index)}>Remove</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </ImageUploading>

            </Form.Group>
          </Col>
        </Row>

        <Button variant='info' type='submit'>
          Save
        </Button>
      </Form>
    </Container>
  )
}
