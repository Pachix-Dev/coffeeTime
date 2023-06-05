import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function LoginForm ({ handleLogin, ...props }) {
  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='text'
            value={props.username}
            placeholder='Enter Username'
            name='Username'
            required
            onChange={props.handleUsernameChange}
          />
          <Form.Text className='text-muted'>
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={props.password}
            placeholder='Password'
            name='Password'
            required
            onChange={props.handlePasswordChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </>
  )
}
