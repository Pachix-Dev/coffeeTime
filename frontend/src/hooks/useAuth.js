import { useCallback, useContext, useState } from 'react'
import AuthContext from '../Context/AuthProvider'
import loginService from '../services/login'
import drinkService from '../services/drinks'

export function useAuth () {
  const { auth, setAuth } = useContext(AuthContext)
  const [state, setState] = useState({ loading: false, message: '' })

  const login = useCallback(({ username, password }, toastRef) => {
    setState({ loading: true, message: '' })
    loginService.login({ username, password })
      .then(auth => {
        window.localStorage.setItem(
          'loggedDrinkAppUser', JSON.stringify(auth)
        )
        setAuth(auth)
        drinkService.setToken(auth.token)
        setState({ loading: true, message: 'You are Login now' })
        toastRef.current.tooggleVisibility({ bg: 'success' })
      }).catch(error => {
        window.localStorage.removeItem('loggedDrinkAppUser')
        setState({ loading: false, message: 'invalid user or password' })
        toastRef.current.tooggleVisibility({ bg: 'danger' })
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
    loading: state.loading,
    message: state.message,
    login,
    logout
  }
}
