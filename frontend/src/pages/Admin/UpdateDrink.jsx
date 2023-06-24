import { useLocation, useNavigate } from 'react-router-dom'
import { FormDrink } from '../../components/Admin/FormDrink'
import { useContext, useEffect, useState } from 'react'
import drinkService from '../../services/drinks'
import AuthContext from '../../Context/AuthProvider'
import { useValidate } from '../../hooks/useValidate'
import { useToastContext } from '../../hooks/useToastContext'

export function UpdateDrink () {
  const { auth } = useContext(AuthContext)
  const { setToastSettings } = useToastContext()
  const { state } = useLocation()
  const navigate = useNavigate()

  const [errorsImage, setErrorsImage] = useState(null)

  const { error, setError } = useValidate(null)

  const [images, setImages] = useState(state?.image || [])

  useEffect(() => {
    if (state === null) {
      navigate('/admin/listDrinks')
    }
  }, [])

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
    data.append('id', state?.id)

    // if edit images for upload
    images.forEach(item => {
      data.append('images', item?.file)
    })

    // if not edit images
    const noEditedImages = images.map(image => image?.file?.name || image)

    noEditedImages.forEach(item => {
      data.append('noEditedImages', item)
    })

    drinkService.updateDrink(data)
      .then(response => {
        console.log(response)
        setToastSettings(response)
      }).catch(e => {
        console.log(e)
      })
  }

  return (
    <FormDrink
      handleSubmit={handleSubmit}
      title={state?.title}
      description={state?.description}
      images={images}
      ingredients={state?.ingredients || []}
      onChange={onChange}
      onError={onError}
      errorsImage={errorsImage}
      showError={error}
    />
  )
}
