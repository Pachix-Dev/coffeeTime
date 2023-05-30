import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './ModalTicket.css'
import discount from '../../assets/img/Discount.png'
import { IconsAnimate } from '../IconsAnimate/IconsAnimate'
import { useMouseMove } from '../../hooks/useMouseMove'

function ModalVerticalCenter (props) {
  const { positionMinipoint } = useMouseMove()
  const { width, height } = document.body.getBoundingClientRect()
  const halfwidth = width / 2
  const halfheight = height / 2
  const rotateX = ((positionMinipoint.x - halfwidth) / halfwidth) * 10
  const rotateY = ((positionMinipoint.y - halfheight) / halfheight) * 10
  return (
    <Modal
      {...props}
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='modal-90w'
      centered
      className='modalTicket'
      style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      <Modal.Body className='p-5'>

        <IconsAnimate />
        <img src={discount} alt='discount-coffee-time' width={100} />
        <div className='text-center'>
          <h4>Voucher Discount</h4>
          <p>
            Enjoy exclusive discounts on coffee
          </p>
        </div>

      </Modal.Body>
    </Modal>
  )
}
export function ModalTicket () {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <Button className='mt-5' onClick={() => setModalShow(true)}>
        Get Voucher Now
      </Button>
      <ModalVerticalCenter
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}
