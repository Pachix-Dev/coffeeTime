export const searchDrinks = async (search) => {
  if (search === '') return null
  try {
    const resp = await fetch('https://yapura.com.mx/drinks', { mode: 'cors' })
    const respondeDrinks = await resp.json()
    return respondeDrinks?.map(drink => ({
      id: drink.id,
      title: drink.title,
      description: drink.description,
      ingredients: drink.ingredients,
      image: drink.image
    }))
  } catch (e) {
    throw new Error('Error searching drinks')
  }
}
