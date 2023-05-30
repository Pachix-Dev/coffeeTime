import { useParams } from 'react-router-dom'
import { getPostsByTag } from '../services/getPostsByTag'
import { useState, useEffect } from 'react'

export function useTag () {
  const params = useParams()
  const tag = params.tag
  const [lisPostsByTag, setlisPostsByTag] = useState([])

  const postsBycategory = async (tag) => {
    const responsePosts = await getPostsByTag(tag)
    setlisPostsByTag(responsePosts)
  }
  useEffect(() => {
    postsBycategory(tag)
  }, [tag])
  return { lisPostsByTag, tag }
}
