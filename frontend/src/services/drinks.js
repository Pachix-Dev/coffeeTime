import axios from 'axios'
const baseUrl = '/api/drinks'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
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
      Authorization: token
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
  const { id } = newObject
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    const { data } = await axios.put(`${baseUrl}/${id}`, newObject, config)
    return data
  } catch (e) {
    console.log(e)
  }
}

export default { getAlldrinks, createDrink, updateDrink, setToken }
