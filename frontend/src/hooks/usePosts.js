import { useParams } from 'react-router-dom'
import { getPostsByCategory } from '../services/getPostByCategory'
import { useState, useEffect } from 'react'

export function usePosts () {
  const params = useParams()
  const titleCategory = params.titleCategory
  const [lisPostsByCategory, setlisPostsByCategory] = useState([])

  const postsBycategory = async (categoryId) => {
    const responsePosts = await getPostsByCategory(categoryId)
    setlisPostsByCategory(responsePosts)
  }
  useEffect(() => {
    postsBycategory(params.idCategory)
  }, [params])
  return { lisPostsByCategory, titleCategory }
}
