import { createContext, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import coffeeicon from '../assets/img/coffeicon.png'

const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
  const [toastSettings, setToastSettings] = useState({ show: false })

  return (
    <ToastContext.Provider value={{ setToastSettings }}>
      <ToastContainer
        className='pt-5 notification-system'
      >
        <Toast bg={toastSettings?.bg} onClose={() => setToastSettings({ show: false })} show={toastSettings?.show} delay={5000} autohide>
          <Toast.Header>
            <img src={coffeeicon} width={25} className='rounded me-2' alt='' />
            <strong className='me-auto'>Coffee Time</strong>
          </Toast.Header>
          <Toast.Body>{toastSettings?.message}</Toast.Body>
        </Toast>
      </ToastContainer>

      {children}

    </ToastContext.Provider>
  )
}

export default ToastContext
