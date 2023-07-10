import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { IconsAnimate } from '../IconsAnimate/IconsAnimate'
import './ModalDetail.css'
import { useEffect } from 'react'

export function ModalDetail (props) {
  const baseUrl = window.location.origin + '/uploads/'

  useEffect(() => {
    const slider = document.querySelector('.gallery')
    let isDown = false
    let startX
    let scrollLeft

    if (slider) {
      slider.addEventListener('mousedown', e => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })
      slider.addEventListener('mouseleave', _ => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mouseup', _ => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mousemove', e => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const SCROLL_SPEED = 3
        const walk = (x - startX) * SCROLL_SPEED
        slider.scrollLeft = scrollLeft - walk
      })
    }

    return () => {
      window.removeEventListener('mousedown', slider)
      window.removeEventListener('mouseleave', slider)
      window.removeEventListener('mouseup', slider)
      window.removeEventListener('mousemove', slider)
    }
  })

  return (
    <Modal
      show={props?.show}
      onHide={props?.onHide}
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='modal-90w'
      centered
      className='modalTicket'
    >
      <Modal.Body className='p-5'>
        <IconsAnimate />
        <Row className='pt-5 position-relative' style={{ zIndex: 15 }}>
          <Col md={6} className='my-auto'>
            <div className='gallery'>
              {
                props?.images?.length > 0
                  ? props?.images.map((image, index) => {
                    return (
                      <div key={index} className='gallery_item'>
                        <img src={baseUrl + image} className='gallery_image' />
                      </div>
                    )
                  })
                  : props.images && <div className='gallery_item'><img src={baseUrl + props?.images} className='gallery_image' /></div>
              }
            </div>
          </Col>
          <Col md={6} className='my-auto'>
            <h1>{props?.title}</h1>
            <div className='pt-2'>
              <strong> <small>Ingredients:</small> </strong>
              {props?.ingredients?.length > 0 && props?.ingredients.map((ingredient, index) => <span key={index}>{ingredient}</span>)}
            </div>
            <p className='mt-3'>{props?.description} </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}
