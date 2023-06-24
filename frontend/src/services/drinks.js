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
          image: drink.image,
          author: drink.user
        }))
      })
    return drinks
  } catch (e) {
    console.log(e)
    throw new Error('Error searching drinkss')
  }
}

const createDrink = (newObject) => {
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    axios.post(baseUrl, newObject, config)
      .then((response) => {
        const { data } = response
        return data
      })
  } catch (e) {
    console.log(e)
    throw new Error('Error searching drinks')
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
    console.log(data)
    const sucessSettings = {
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

export default { getAlldrinks, createDrink, updateDrink, setToken }
