import logocoffee from '../../assets/img/coffeeTimelogo2.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export function MenuAdmin () {
  const { username, logout } = useAuth()

  const [show, setShow] = useState()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Navbar bg='dark' expand='lg' fixed='top' className='menuweb'>
        <Container>
          <Navbar.Brand as={Link} to='/admin/dashboard'><img src={logocoffee} width={100} alt='logo-coffee-time' /></Navbar.Brand>
          <Navbar.Toggle onClick={handleShow} aria-controls='offcanvasMenuweb' />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose}>
              <Offcanvas.Title>
                {username}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='me-auto my-2 my-lg-0'>
                <NavLink to='dashboard' className='nav-link' onClick={handleClose}>DashBoard</NavLink>
                <NavLink to='listDrinks' className='nav-link' onClick={handleClose}>
                  Drinks
                </NavLink>
                <button
                  className='nav-link' onClick={() => {
                    logout()
                    handleClose()
                  }}
                >
                  Logout
                </button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
