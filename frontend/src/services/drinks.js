import axios from 'axios'
const baseUrl = '/api/drinks/'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}
const config = {
  header: {
    Authorization: token
  }
}
const getAlldrinks = () => {
  try {
    const drinks = axios.get(baseUrl)
      .then((response) => {
        const { data } = response
        return data?.map(drink => ({
          id: drink.id,
          title: drink.title,
          description: drink.description,
          ingredients: drink.ingredients,
          image: drink.image
        }))
      })
    return drinks
  } catch (e) {
    console.log(e)
    throw new Error('Error searching drinks')
  }
}

const createDrink = (newObject) => {
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

export default { getAlldrinks, createDrink, setToken }
