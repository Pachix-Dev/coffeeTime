import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'

import { Link, useNavigate } from 'react-router-dom'
import drinkService from '../../services/drinks'

import { useDispatch, useSelector } from 'react-redux'
import { useContext, useEffect, useState } from 'react'
import { fetchDrinks, getPostsStatus, removeDrinks, selectAllPosts } from '../../features/drinks/drinkSlice'
import Button from 'react-bootstrap/esm/Button'
import { useToastContext } from '../../hooks/useToastContext'
import AuthContext from '../../Context/AuthProvider'

export function ListDrinks () {
  const navigate = useNavigate()
  const { setToastSettings } = useToastContext()
  const { auth } = useContext(AuthContext)

  const [deleteId, setDeleteId] = useState({})
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const drinks = useSelector(selectAllPosts)
  const postStatus = useSelector(getPostsStatus)

  const baseUrl = window.location.origin + '/uploads/'

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchDrinks())
    }
  }, [postStatus, dispatch])

  const updateDrink = (id) => {
    navigate(`/admin/update-drink/${id}`)
  }

  const handleClose = () => {
    setShow(false)
  }
  const handleClickDelete = (id, title) => {
    setDeleteId({ id, title })
    setShow(true)
  }

  const removeDrink = () => {
    drinkService.setToken(auth.token)

    dispatch(removeDrinks(deleteId.id))
      .then(response => {
        setToastSettings(response.payload)
      })

    /* drinkService.deleteDrink(deleteId.id)
      .then(response => {
        console.log(response)
        if (response.status === 'ok') {
          dispatch(deleteDrink(deleteId.id))
        }
        setToastSettings(response)
      }).catch(e => {
        console.log(e)
      })
    */
    setShow(false)
  }
  return (
    <>

      <div className='header-drinks'>
        <h2>Drinks</h2>
        <div className='action-create'>
          <Link to='/admin/create-drink' className='link-create-drink'>Add Drink</Link>
        </div>
      </div>

      <Table className='mt-3' striped hover variant='dark' responsive>
        <thead>
          <tr>
            <th>Drink Name</th>
            <th>Ingredients</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drinks.length > 0 &&
            drinks.map(drink => {
              const { id, title, ingredients, images, user } = drink || {}
              return (
                <tr key={id}>
                  <td>
                    <img src={baseUrl + images} className='img-drink' /> {title}
                  </td>
                  <td>{ingredients}</td>
                  <td><strong>{user?.name}</strong> <br />{user?.username}</td>
                  <td>
                    <Button
                      type='button'
                      variant='secondary'
                      aria-label='edit image'
                      className='m-2'
                      onClick={() => { updateDrink(id) }}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={20}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10' />
                      </svg>
                    </Button>
                    <Button
                      type='button'
                      className='m-2'
                      variant='danger'
                      aria-label='remove image'
                      onClick={() => handleClickDelete(id, title)}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={20}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                      </svg>
                    </Button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </Table>

      <Modal
        show={show} onHide={handleClose} className='modal-confirm' aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Do you want to delete <strong>{deleteId?.title}</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete  <strong>{deleteId?.title}</strong>? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger' onClick={removeDrink}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
