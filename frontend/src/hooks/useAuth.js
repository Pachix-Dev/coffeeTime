import { useCallback, useContext, useState } from 'react'
import AuthContext from '../Context/AuthProvider'
import loginService from '../services/login'
import drinkService from '../services/drinks'
import { useToastContext } from './useToastContext'

export function useAuth () {
  const { auth, setAuth } = useContext(AuthContext)
  const { setToastSettings } = useToastContext()
  const [state, setState] = useState(false)

  const login = useCallback(({ username, password }) => {
    setState(true)
    loginService.login({ username, password })
      .then(auth => {
        window.localStorage.setItem(
          'loggedDrinkAppUser', JSON.stringify(auth)
        )
        setAuth(auth)
        drinkService.setToken(auth.token)
        setState(true)
        setToastSettings({ bg: 'success', show: true, message: 'You are Login now' })
      }).catch(error => {
        window.localStorage.removeItem('loggedDrinkAppUser')
        setState(false)
        setToastSettings({ bg: 'danger', show: true, message: 'invalid user or password' })
        console.error(error)
      })
  }, [setAuth])

  const logout = useCallback(() => {
    setAuth(null)
    window.localStorage.removeItem('loggedDrinkAppUser')
    drinkService.setToken(null)
  }, [setAuth])

  return {
    username: auth?.username,
    isLogged: Boolean(auth),
    loading: state,
    login,
    logout
  }
}
