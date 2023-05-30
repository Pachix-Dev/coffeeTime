
import './Menu.css'
import logocoffee from '../../assets/img/coffeeTimelogo2.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, NavLink } from 'react-router-dom'
import { SearchInput } from '../SearchInput/SearchInput'
import { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext'

export function Menu () {
  const { show, setShow } = useContext(MenuContext)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Navbar bg='dark' expand='lg' sticky='top' className='menuweb'>
        <Container>
          <Navbar.Brand as={Link} to='/'><img src={logocoffee} width={100} alt='logo-coffee-time' /></Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose}>
              <Offcanvas.Title>
                Coffe Time
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='me-auto my-2 my-lg-0'>
                <NavLink to='/' className='nav-link' onClick={handleClose}>Home</NavLink>
                <NavLink to='/blog' className='nav-link' onClick={handleClose}>
                  Blog
                </NavLink>
                <NavLink to='/contact' className='nav-link' onClick={handleClose}>
                  Contact
                </NavLink>
              </Nav>
              <Nav style={{ position: 'relative' }}>
                <SearchInput />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
