import { FormDrink } from './FormDrink'
import { useContext, useState } from 'react'
import drinkService from '../../services/drinks'
import AuthContext from '../../Context/AuthProvider'
import { useDispatch } from 'react-redux'
import { useToastContext } from '../../hooks/useToastContext'
import { addDrinks } from '../../features/drinks/drinkSlice'
import { useNavigate } from 'react-router'

export function CreateDrink () {
  const { auth } = useContext(AuthContext)
  const { setToastSettings } = useToastContext()
  const navigate = useNavigate()
  const [images, setImages] = useState([])
  const [errorsImage, setErrorsImage] = useState(null)
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  if (error !== null) {
    setTimeout(() => {
      setError(null)
    }, 2000)
  }

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    drinkService.setToken(auth.token)

    const listIngredients = []
    document.querySelectorAll('#ingredients-list li>span').forEach(function (item) {
      listIngredients.push(item.innerText)
    })

    if (listIngredients.length === 0) {
      setError({ inputVoid: true })
      return
    }

    if (images === null || images.length === 0) {
      onError({ imageVoid: true })
      return
    }
    const data = new window.FormData(event.target)

    listIngredients.forEach(item => {
      data.append('ingredients', item)
    })

    images.forEach(item => {
      data.append('imagesUpload', item?.file)
    })

    images.forEach(item => {
      data.append('imageNames', item?.file?.name || item)
    })

    dispatch(addDrinks(data))
      .then(response => {
        console.log(response.payload)
        setToastSettings(response.payload)
        navigate('/admin/list-drinks', { replace: true })
      })

    /* drinkService.createDrink(data)
      .then(response => {
        console.log(response)
        setToastSettings(response)
        if (response.status === 'ok') {
          dispatch(addDrink(response.data.mongodbResult))
          navigate('/admin/list-drinks', { replace: true })
        }
      }).catch(e => {
        console.log(e)
      }) */
  }

  return (
    <>
      <h2>Add a Drink</h2>
      <FormDrink
        handleSubmit={handleSubmit}
        images={images}
        onChange={onChange}
        onError={onError}
        showError={error}
        errorsImage={errorsImage}
      />
    </>
  )
}
