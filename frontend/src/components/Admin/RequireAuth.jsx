import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const RequireAuth = () => {
  const { isLogged } = useAuth()
  const location = useLocation()

  return (
    isLogged
      ? <Outlet />
      : <Navigate to='/admin/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
