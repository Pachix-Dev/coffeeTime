import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../../Context/AuthProvider.jsx'
import { MenuAdmin } from '../../components/Admin/MenuAdmin.jsx'
import './Site.css'
import { ToastProvider } from '../../context/ToastProvider.jsx'
const Site = () => {
  return (
    <main className='App'>
      <AuthProvider>
        <MenuAdmin />
        <ToastProvider>
          <div className='dashboard-wrapper pt-5 mt-5 mb-5 pb-5'>
            <Outlet />
          </div>
        </ToastProvider>
      </AuthProvider>
    </main>
  )
}

export default Site
