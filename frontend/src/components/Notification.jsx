import { forwardRef, useImperativeHandle, useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import coffeeicon from '../assets/img/coffeicon.png'

const Notification = forwardRef(({ message }, ref) => {
  const [show, setShow] = useState(false)
  const [bg, SetBg] = useState(null)

  const tooggleVisibility = ({ bg }) => {
    setShow(!show)
    SetBg(bg)
  }

  useImperativeHandle(ref, () => {
    return {
      tooggleVisibility
    }
  })

  return (
    <ToastContainer
      className='pt-3'
    >
      <Toast bg={bg} onClose={() => setShow(false)} show={show} delay={5000} autohide>
        <Toast.Header>
          <img src={coffeeicon} width={25} className='rounded me-2' alt='' />
          <strong className='me-auto'>Coffee Time</strong>

        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
})

export { Notification }
