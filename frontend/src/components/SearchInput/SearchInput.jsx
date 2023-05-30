// SearchInput.jsx
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SearchInput.css'

import { MenuContext } from '../Context/MenuContext'
import { useKeywordEmphasis } from '../../hooks/useKeywordEmphasis'
import { ItemResult } from './ItemResult'

export function SearchInput () {
  const { keywordEmphasis, getDrinks } = useKeywordEmphasis(null)
  const navigate = useNavigate()
  const { setShow } = useContext(MenuContext)

  function handleChange (event) {
    getDrinks(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    const fields = new FormData(event.target)
    const searchword = fields.get('searchword')
    navigate(`/search/${searchword}`)
    document.getElementById('searchDrinks').reset()
    getDrinks('')
    setShow(false)
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
              const { id, replacetitle, replacedescription, newReplaceIngredients, title, description, ingredients, image } = filteredKeywords
              return (
                <ItemResult
                  key={id}
                  id={id}
                  replacetitle={replacetitle}
                  replacedescription={replacedescription}
                  newReplaceIngredients={newReplaceIngredients}
                  title={title}
                  description={description}
                  ingredients={ingredients}
                  image={image}
                />
              )
            })
            : '')
        }
      </div>
    </>
  )
}
