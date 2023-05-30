import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './ErrorPage.css'
import Container from 'react-bootstrap/esm/Container'

export default function ErrorPage () {
  return (
    <div className='error-block mt-5'>
      <div className='error-fondo1 '>
        <div className='error-fondo2 pt-5'>
          <Container>
            <Row className='mt-5'>
              <Col xs={6} xl={6} className='mx-auto'>
                <h1>Time for Error</h1>
                <h4>404 </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 6, offset: 2 }} xl={{ span: 6, offset: 7 }}>
                <p>Sorry, the page not found</p>
                <Link to='/'>Back to Home</Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </div>
  )
}
