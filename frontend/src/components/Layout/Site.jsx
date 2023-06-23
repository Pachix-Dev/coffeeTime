import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../../Context/AuthProvider.jsx'
import { MenuAdmin } from '../../components/Admin/MenuAdmin.jsx'
import './Site.css'
const Site = () => {
  return (
    <main className='App'>
      <AuthProvider>
        <MenuAdmin />
        <div className='dashboard-wrapper pt-5 mt-5 mb-5 pb-5'>
          <Outlet />
        </div>
      </AuthProvider>
    </main>
  )
}

export default Site
