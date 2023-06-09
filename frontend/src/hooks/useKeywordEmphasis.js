import { useEffect, useState } from 'react'
// import serviceDrinks from '../services/drinks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDrinks, getPostsStatus, selectAllPosts } from '../features/drinks/drinkSlice'

export function useKeywordEmphasis () {
  const [keywordEmphasis, setKeywordEmphasis] = useState([])

  const dispatch = useDispatch()
  const drinks = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchDrinks())
    }
  }, [postStatus, dispatch])

  const getDrinks = (search) => {
    if (search === '') {
      setKeywordEmphasis(null)
      return null
    }

    /* const responseDrinks = await serviceDrinks.getAlldrinks(search)

    if (responseDrinks === null || responseDrinks.length === 0) {
      setKeywordEmphasis(null)
      return null
    } */

    /* this my first option but .flatmap has better performance
      .filter((drink) => {
          return (
            drink.title.includes(search) ||
            drink.description.includes(search) ||
            drink.ingredients.some(ingredient => ingredient.includes(search))
          )
        }).map(filteredKeyword => {
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
    */

    const newkeywordEmphasis = drinks.flatMap(drink => {
      const { id, title, description, ingredients, images } = drink

      if (
        title.includes(search) ||
        ingredients.some(ingredient => ingredient.includes(search)) ||
        description.includes(search)
      ) {
        const replacetitle = title.replace(search, `<em>${search}</em>`)
        const replacedescription = description.replace(search, `<em>${search}</em>`)
        const replaceingredients = ingredients.map(ingredient => ingredient.replace(search, `<em>${search}</em>`))

        return (
          {
            id,
            replacetitle,
            replacedescription,
            replaceingredients,
            title,
            description,
            ingredients,
            images
          }
        )
      } else {
        return []
      }
    })

    setKeywordEmphasis(newkeywordEmphasis)
  }

  return { keywordEmphasis, getDrinks }
}
