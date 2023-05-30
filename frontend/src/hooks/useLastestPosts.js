import { getLastestPosts } from '../services/getLastestPosts'
import { useState, useEffect } from 'react'

export default function useLastestPosts () {
  const [listLastestPost, setlistLastestPost] = useState([])

  const lastestPosts = async () => {
    const responsePosts = await getLastestPosts()
    setlistLastestPost(responsePosts)
  }

  useEffect(() => {
    lastestPosts()
  }, [])

  return { listLastestPost }
}
