import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table'
import { useNavigate } from 'react-router-dom'

import serviceDrinks from '../../services/drinks'
import { useEffect, useState } from 'react'

export function ListDrinks () {
  const [drinks, setDrinks] = useState([])
  const navigate = useNavigate()

  const listDrink = async () => {
    const responseDrinks = await serviceDrinks.getAlldrinks()
    setDrinks(responseDrinks)
  }
  const updateDrink = (drink) => {
    navigate('/admin/updateDrink', {
      state: drink
    })
  }
  useEffect(() => {
    listDrink()
  }, [])

  return (
    <>
      <Container className='mt-5 pt-5'>
        <h1>List of Drinks</h1>
        <Table striped hover variant='dark' responsive>
          <thead>
            <tr>
              <th>
                <input type='checkbox' name='records' data-indeterminate='false' />
              </th>
              <th>Title</th>
              <th>Ingredients</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {
              drinks.map(drink => {
                const { id, title, ingredients, image, author } = drink
                return (
                  <tr key={id} className='my-auto' onClick={() => { updateDrink(drink) }}>
                    <td />
                    <td><img src={image} className='img-drink' /> {title}</td>
                    <td>{ingredients.join(', ')}</td>
                    <td><strong>{author.name}</strong> <br />{author.username}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}
