import Container from 'react-bootstrap/esm/Container'
import './Login.css'
import { LoginForm } from '../../components/Login/LoginForm'
import loginService from '../../services/login'
import { useEffect, useRef, useState } from 'react'
import drinkService from '../../services/drinks'
import { Notification } from '../../components/Notification'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, SetMessage] = useState('')
  const toastRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedDrinkAppUser')
    if (loggedUserJSON) {
      const userLogged = JSON.parse(loggedUserJSON)
      setUser(userLogged)
      console.log(userLogged)
      drinkService.setToken(userLogged.token)
      navigate('/admin/dashboard')
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userLogin = await loginService.login({
        username,
        password
      })
      window.localStorage.setItem(
        'loggedDrinkAppUser', JSON.stringify(userLogin)
      )

      drinkService.setToken(userLogin.token)
      setUser(userLogin)
      setUsername('')
      setPassword('')
      SetMessage('You are Login now')
      toastRef.current.tooggleVisibility({ bg: 'success' })
      navigate('/admin/dashboard')
    } catch (error) {
      console.log(error)
      SetMessage('invalid user or password')
      toastRef.current.tooggleVisibility({ bg: 'danger' })
    }
  }

  return (
    <div className='login-wrapper'>
      <Container className='pt-5 pb-5'>
        <h1 className='text-center'>Login</h1>
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleLogin={handleLogin}
        />
        <Notification
          ref={toastRef}
          message={message}
        />
      </Container>
    </div>
  )
}
