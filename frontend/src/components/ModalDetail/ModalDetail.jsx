import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { IconsAnimate } from '../IconsAnimate/IconsAnimate'

export function ModalDetail (props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby='contained-modal-title-vcenter'
      dialogClassName='modal-90w'
      centered
      className='modalTicket'
    >
      <Modal.Body className='p-5'>
        <IconsAnimate />
        <Row className='pt-5 position-relative' style={{ zIndex: 15 }}>
          <Col md={6} className='my-auto'>
            <img src={props.image} className='w-100 ' />
          </Col>
          <Col md={6} className='my-auto'>
            <h1 className='mt-3'>{props.title}</h1>
            <strong><small>Ingredients: {props.ingredients.join(' - ')} </small></strong>
            <p>{props.description} </p>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}
