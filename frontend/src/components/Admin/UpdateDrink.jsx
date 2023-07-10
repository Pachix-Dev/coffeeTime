import { useParams } from 'react-router-dom'
import { FormDrink } from '../../components/Admin/FormDrink'
import { useContext, useEffect, useState } from 'react'
import drinkService from '../../services/drinks'
import AuthContext from '../../Context/AuthProvider'
import { useToastContext } from '../../hooks/useToastContext'

import { useDispatch, useSelector } from 'react-redux'
import { getPostsStatus, selectPostById, updateDrinks } from '../../features/drinks/drinkSlice'

export function UpdateDrink () {
  const { auth } = useContext(AuthContext)
  const { setToastSettings } = useToastContext()
  const { id } = useParams()

  const dispatch = useDispatch()

  const drink = useSelector((state) => selectPostById(state, id))

  const postStatus = useSelector(getPostsStatus)
  const [errorsImage, setErrorsImage] = useState(null)
  const [error, setError] = useState(null)
  if (error !== null) {
    setTimeout(() => {
      setError(null)
    }, 2000)
  }

  const [images, setImages] = useState(drink?.images || [])

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

  const handleSubmit = (event) => {
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

    data.append('id', drink?.id)

    images.forEach(item => {
      if (!item?.file?.name) {
        data.append('imageNoEdited', item)
      } else {
        data.append('imagesUpload', item?.file)
      }
    })

    dispatch(updateDrinks(data)).then(response => {
      setToastSettings(response.payload)
    })
    /* drinkService.updateDrink(data)
      .then(response => {
        if (response.status === 'ok') {
          dispatch(editDrink(response.data.mongodbResult))
        }
        setToastSettings(response)
      }).catch(e => {
        console.log(e)
      }) */
  }

  useEffect(() => {
    if (postStatus === 'succeeded') {
      setImages(drink?.images)
    }
  }, [postStatus, drink?.images])

  return (
    <>
      <h2>Update a Drink</h2>
      <FormDrink
        handleSubmit={handleSubmit}
        title={drink?.title}
        description={drink?.description}
        images={images}
        ingredients={drink?.ingredients || []}
        onChange={onChange}
        onError={onError}
        showError={error}
        errorsImage={errorsImage}
      />

    </>
  )
}
