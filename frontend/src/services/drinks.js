import axios from 'axios'

const baseUrl = '/api/drinks'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const tokenExpired = () => {
  window.localStorage.removeItem('loggedDrinkAppUser')
  setTimeout(() => {
    window.location.replace('/coffeeTime/admin/login')
  }, 5000)
}

const ERROR_HANDLERDS = {
  'token expired': {
    status: 'fail',
    bg: 'warning',
    show: true,
    message: 'your session has expired please login again'
  },
  defaultError: {
    bg: 'danger',
    show: true,
    message: 'Something was wrong try later...'
  }
}

const getAlldrinks = () => {
  try {
    const drinks = axios.get(baseUrl)
      .then((response) => {
        const { data } = response
        return data.map(drink => ({
          id: drink.id,
          title: drink.title,
          description: drink.description,
          ingredients: drink.ingredients,
          images: drink.images,
          user: drink.user
        }))
      })
    return drinks
  } catch (e) {
    console.log(e)
    throw new Error('Error searching drinkss')
  }
}

const createDrink = async (newObject) => {
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    const { data } = await axios.post(baseUrl, newObject, config)
    const sucessSettings = {
      status: 'ok',
      data,
      bg: 'success',
      show: true,
      message: 'Request resolved successfully!'
    }
    return sucessSettings
  } catch (e) {
    console.log(e)
    if (e.response.data.error === 'token expired') {
      tokenExpired()
    }
    const errorSettings = (ERROR_HANDLERDS[e.response.data.error] || ERROR_HANDLERDS.defaultError)

    return errorSettings
  }
}

const updateDrink = async (newObject) => {
  const { id } = Object.fromEntries(newObject)
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    const { data } = await axios.put(`${baseUrl}/${id}`, newObject, config)
    const sucessSettings = {
      status: 'ok',
      data,
      bg: 'success',
      show: true,
      message: 'Request resolved successfully!'
    }
    return sucessSettings
  } catch (e) {
    console.log(e)
    if (e.response.data.error === 'token expired') {
      tokenExpired()
    }
    const errorSettings = (ERROR_HANDLERDS[e.response.data.error] || ERROR_HANDLERDS.defaultError)

    return errorSettings
  }
}

const deleteDrink = async (id) => {
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    await axios.delete(`${baseUrl}/${id}`, config)
    const sucessSettings = {
      status: 'ok',
      data: { id },
      bg: 'success',
      show: true,
      message: 'Request resolved successfully!'
    }
    return sucessSettings
  } catch (e) {
    console.log(e)
    if (e.response.data.error === 'token expired') {
      tokenExpired()
    }
    const errorSettings = (ERROR_HANDLERDS[e.response.data.error] || ERROR_HANDLERDS.defaultError)

    return errorSettings
  }
}
export default { getAlldrinks, createDrink, updateDrink, deleteDrink, setToken }
