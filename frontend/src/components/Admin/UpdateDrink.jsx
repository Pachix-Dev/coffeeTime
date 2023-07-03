import { useParams } from 'react-router-dom'
import { FormDrink } from '../../components/Admin/FormDrink'
import { useContext, useEffect, useState } from 'react'
import drinkService from '../../services/drinks'
import AuthContext from '../../Context/AuthProvider'
import { useValidate } from '../../hooks/useValidate'
import { useToastContext } from '../../hooks/useToastContext'

import { useDispatch, useSelector } from 'react-redux'
import { editDrink, getPostsStatus, selectPostById } from '../../features/drinks/drinkSlice'

export function UpdateDrink () {
  const { auth } = useContext(AuthContext)
  const { setToastSettings } = useToastContext()
  const { id } = useParams()

  const dispatch = useDispatch()

  const drink = useSelector((state) => selectPostById(state, id))

  const postStatus = useSelector(getPostsStatus)
  const [errorsImage, setErrorsImage] = useState(null)
  const { error, setError } = useValidate(null)

  const [images, setImages] = useState([])

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

    // if edit images for upload
    images.forEach(item => {
      data.append('imagesUpload', item?.file)
    })

    images.forEach(item => {
      data.append('imageNames', item?.file?.name || item)
    })

    drinkService.updateDrink(data)
      .then(response => {
        console.log(response)
        if (response.status === 'ok') {
          dispatch(editDrink(response.data.mongodbResult))
        }
        setToastSettings(response)
      }).catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (postStatus === 'succeeded') {
      setImages(drink.image)
    }
  }, [postStatus, drink?.image])

  return (
    <>
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
