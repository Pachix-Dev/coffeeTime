/* eslint-disable no-trailing-spaces */
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import { sendMessageService } from '../../services/SendMessageServicie'
import './contact.css'
import { motion } from 'framer-motion'
export function Contact () {
  const [validated, setValidated] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      const formData = Object.fromEntries(new window.FormData(event.target))
      sendMessageService(formData).then((resp) => {
        if (resp.$metadata.httpStatusCode === 200) {
          setMessage('Your message has been sent sucessfully!!')
        } else {
          setMessage('Sorry we couldn\'t send your message try again later')
        }
      }) 
    }
    setValidated(true)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}      
    >
      <header className='mt-5 pt-5'>
        <h1 className='text-center'>Contact Us</h1>
      </header>
      <Container className='contact-warpper mt-5 p-5'>
        {message
          ? <h1 className='text-center'>{message}</h1>
          : <Form id='form-contact' className='form-contact' noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationCustom01'>
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  name='fullname'
                  required
                  type='text'
                  placeholder='provide your full name'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>Please provide your full name.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='12' controlId='validationCustomUsername'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='example@domain.com'
                  aria-describedby='inputGroupPrepend'
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>Please provide your email</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='12' controlId='validationCustom03'>
                <Form.Label>Message</Form.Label>
                <Form.Control name='message' as='textarea' rows={3} placeholder='Leave your message here..' required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>Please provide a Message.</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Form.Group className='mb-3'>
              <Form.Check
                required
                label='Agree to terms and conditions'
                feedback='You must agree before submitting.'
                feedbackType='invalid'
              />
            </Form.Group>
            <Button type='submit'>Oh Yeah!!</Button>
          </Form>}
      </Container>
    </motion.main>
  )
}
