import { Outlet } from 'react-router-dom'
import { MenuProvider } from '../../context/MenuProvider'
import { Menu } from '../../components/Menu/Menu'
import { Mousefloow } from '../../components/Mousefollow'
import LazyFooter from '../../components/Footer/index'

const SiteFront = () => {
  return (
    <main className='App' style={{ cursor: 'none' }}>
      <Mousefloow />
      <MenuProvider>
        <Menu />
      </MenuProvider>
      <Outlet />
      <LazyFooter />
    </main>
  )
}

export default SiteFront
