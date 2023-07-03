import Container from 'react-bootstrap/esm/Container'
import { useAuth } from '../../hooks/useAuth'

export function Dashboard () {
  const { username } = useAuth()
  return (

    <Container className='pt-5 mt-5'>
      <h1>Welcome {username}</h1>
    </Container>

  )
}
