import { useEffect, useState } from 'react'
import drinkService from '../services/drinks'

export function useUser () {
  const [user, SetUser] = useState()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedDrinkAppUser')
    if (loggedUserJSON) {
      const userLogged = JSON.parse(loggedUserJSON)
      SetUser(userLogged)
      drinkService.setToken(userLogged.token)
    }
  }, [])

  return { user }
}
