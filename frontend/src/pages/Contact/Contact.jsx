/* eslint-disable no-trailing-spaces */
import { useState, useRef } from 'react'
import Container from 'react-bootstrap/esm/Container'
import './contact.css'
import { motion } from 'framer-motion'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import ReCAPTCHA from 'react-google-recaptcha'

import axios from 'axios'
import { Notification } from '../../components/Notification'

export function Contact () {
  const captchaRef = useRef()
  const toastRef = useRef()
  const [validated, setValidated] = useState(false)
  const [message, setMessage] = useState(null)
  const [captcha, setCaptcha] = useState(false)
  
  const baseUrl = 'http://127.0.0.1:3001/api/recaptcha/'
  
  const onChange = () => {
    setCaptcha(true)    
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
      
    if (form.checkValidity() === false || captcha === false) {
      event.preventDefault()
      setValidated(true)
      event.stopPropagation()
    } else {
      event.preventDefault()
      const token = captchaRef.current.getValue()
      captchaRef.current.reset()
      setCaptcha(false)
      const formData = Object.fromEntries(new window.FormData(event.target))
      try {
        const res = await axios.post(baseUrl, { token, formData })        
        if (res.data.success) {
          setMessage('Your message has been sent!!')
          toastRef.current.tooggleVisibility({ bg: 'success' }) 
        } else {
          setMessage('Sorry we couldn\'t verify you are not robot')
          toastRef.current.tooggleVisibility({ bg: 'danger' })        
        }    
      } catch (error) {
        setMessage('Sorry service not available  try later ')   
        toastRef.current.tooggleVisibility({ bg: 'danger' })
      }
      document.getElementById('form-contact').reset()
      setValidated(false)
    }
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
        <Form id='form-contact' className='form-contact' noValidate validated={validated} onSubmit={handleSubmit}>
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
                autoComplete='true' 
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Please provide your email</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='12' controlId='validationMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control name='message' as='textarea' rows={3} placeholder='Leave your message here..' required />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>Please provide a Message.</Form.Control.Feedback>
            </Form.Group>
  
          </Row>
          <Form.Group className='mb-3' controlId='validationCheck'>
            <Form.Check
              required
              name='agree'
              label='Agree to terms and conditions'
              feedback='You must agree before submitting.'
              feedbackType='invalid'
            />
          </Form.Group>
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY}
            ref={captchaRef}   
            onChange={onChange}                     
          />
          {captcha ? '' : <div style={{ color: '#dc3545' }}>Please verify you are not a bot</div>}
          <Button type='submit'>Oh Yeah!!</Button>
        </Form>
        <Notification
          ref={toastRef}
          message={message}
        />
      </Container>
      
    </motion.main>
  )
}
