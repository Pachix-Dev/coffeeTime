import { useState } from 'react'
import { searchDrinks } from '../services/drinks'

export function useDrink () {
  const [drinks, setDrinks] = useState([])

  const getDrinks = async (idDetail) => {
    const responseDrinks = await searchDrinks(idDetail)
    if (responseDrinks === null) return null
    const filteredKeywords = responseDrinks.filter(drink => drink.id == idDetail)
    setDrinks(filteredKeywords)
  }

  return { drinks, getDrinks }
}
