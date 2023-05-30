
import Card from 'react-bootstrap/esm/Card'
import { useState } from 'react'
import { ModalDetail } from '../ModalDetail/ModalDetail'

export default function SearchResultCard ({ id, replacetitle, newReplaceIngredients, title, description, ingredients, image }) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>

      <Card className='searchCard h-100 text-black' onClick={() => setModalShow(true)}>
        <div className='cardImage' style={{ background: `url(${image}) center center no-repeat`, backgroundSize: 'cover' }} />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: replacetitle }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: newReplaceIngredients }} />
        </Card.Body>
      </Card>

      <ModalDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        description={description}
        ingredients={ingredients}
        image={image}
      />
    </>
  )
}
