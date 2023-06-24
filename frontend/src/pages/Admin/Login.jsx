import Container from 'react-bootstrap/esm/Container'

import { LoginForm } from '../../components/Admin/Login/LoginForm'
import { useEffect, useState } from 'react'
import { Notification } from '../../components/Notification'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function Login () {
  const { isLogged, loading, login } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/admin/dashboard'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => {
        navigate(from, { replace: true })
      }, 1000)
    }
  }, [isLogged, navigate])

  const handleLogin = (event) => {
    event.preventDefault()
    login({ username, password })
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
          loading={loading}
        />
      </Container>
    </div>
  )
}
