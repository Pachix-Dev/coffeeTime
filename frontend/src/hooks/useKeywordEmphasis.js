import { useState } from 'react'
import { searchDrinks } from '../services/drinks'

export function useKeywordEmphasis () {
  const [keywordEmphasis, setKeywordEmphasis] = useState([])

  const getDrinks = async (search) => {
    const responseDrinks = await searchDrinks(search)
    if (responseDrinks === null) {
      setKeywordEmphasis(null)
      return null
    }
    const filteredKeywords = responseDrinks.filter((drink) => {
      return (
        drink.title.includes(search) ||
        drink.description.includes(search) ||
        drink.ingredients.includes(search)
      )
    })
    const newkeywordEmphasis = filteredKeywords.map(filteredKeyword => {
      const { id, title, description, ingredients, image } = filteredKeyword
      const replacetitle = title.replace(search, `<em>${search}</em>`)
      const replacedescription = description.replace(search, `<em>${search}</em>`)
      const replaceingredients = ingredients.map(ingredient => {
        const replaceingredient = ingredient.replace(search, `<em>${search}</em>`)
        return replaceingredient
      })
      const newReplaceIngredients = replaceingredients.join('-')
      return ({ id, replacetitle, newReplaceIngredients, replacedescription, title, description, ingredients, image })
    })
    setKeywordEmphasis(newkeywordEmphasis)
  }

  return { keywordEmphasis, getDrinks }
}
