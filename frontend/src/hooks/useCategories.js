import { getCategories } from '../services/getCategories'
import { useState, useEffect } from 'react'

export default function useCategories () {
  const [categories, setCategories] = useState([])

  const allCategories = async () => {
    const responseCategories = await getCategories()
    // guardamos la id de category en el localStorage
    setCategories(responseCategories)
  }

  useEffect(() => {
    allCategories()
  }, [])

  return { categories }
}
