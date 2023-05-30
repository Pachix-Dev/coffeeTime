import { Suspense, lazy } from 'react'
import useNearScreen from '../../hooks/useNearScreen'

const Footer = lazy(() => import('./Footer'))

export default function LazyFooter () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })
  return (
    <div className='footerweb' ref={fromRef}>
      <Suspense fallback={<p>cargando...</p>}>
        {isNearScreen ? <Footer /> : null}
      </Suspense>
    </div>
  )
}
