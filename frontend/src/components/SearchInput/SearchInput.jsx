// SearchInput.jsx
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SearchInput.css'

import { MenuContext } from '../../context/MenuProvider'
import { useKeywordEmphasis } from '../../hooks/useKeywordEmphasis'
import { ItemResult } from './ItemResult'

import { useState, useContext } from 'react'
import { ModalDetail } from '../ModalDetail/ModalDetail'

export function SearchInput () {
  const { keywordEmphasis, getDrinks } = useKeywordEmphasis()
  const navigate = useNavigate()
  const { setShow } = useContext(MenuContext)

  const [showModalDetail, setShowModalDetail] = useState({ show: false, title: '', description: '', ingredients: '', images: '' })

  const handleChange = (event) => {
    if (event.target.value.startsWith(' ')) {
      return null
    }
    getDrinks(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new FormData(event.target)
    const searchword = fields.get('searchword')
    navigate(`/search/${searchword}`)
    document.getElementById('searchDrinks').reset()
    getDrinks('')
    setShow(false)
  }

  const handleDetail = (title, description, ingredients, images) => {
    setShowModalDetail({ show: true, title, description, ingredients, images })
  }

  return (
    <>

      <Form id='searchDrinks' className='d-flex' onSubmit={handleSubmit}>
        <Form.Control
          required
          name='searchword'
          type='search'
          placeholder='Search drink'
          className='me-2'
          aria-label='Search drink'
          pattern='^\S.*$'
          title='Invalid starting with space'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          maxLength={512}
          onChange={handleChange}
        />
        <Button type='submit'>Search</Button>
      </Form>
      <div id='resultCoincidences'>
        {
          (keywordEmphasis !== null
            ? keywordEmphasis.map(filteredKeywords => {
              const { id, replacetitle, replacedescription, replaceingredients, title, description, ingredients, images } = filteredKeywords
              return (
                <ItemResult
                  key={id}
                  id={id}
                  replacetitle={replacetitle}
                  replacedescription={replacedescription}
                  replaceingredients={replaceingredients}
                  title={title}
                  description={description}
                  ingredients={ingredients}
                  images={images}
                  handleDetail={handleDetail}
                />
              )
            })
            : '')
        }
      </div>

      <ModalDetail
        show={showModalDetail?.show}
        onHide={() => setShowModalDetail({ show: false })}
        title={showModalDetail?.title}
        description={showModalDetail?.description}
        ingredients={showModalDetail?.ingredients}
        images={showModalDetail?.images}
      />
    </>
  )
}
