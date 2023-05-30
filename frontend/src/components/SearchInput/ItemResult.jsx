import { useState } from 'react'
import { ModalDetail } from '../ModalDetail/ModalDetail'

export function ItemResult ({ id, replacetitle, newReplaceIngredients, replacedescription, title, description, ingredients, image }) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <li key={id} className='coincidences-item' onClick={() => setModalShow(true)}>
        <div className='text-black'>
          <strong dangerouslySetInnerHTML={{ __html: replacetitle }} />
          <div>
            <p dangerouslySetInnerHTML={{ __html: newReplaceIngredients }} />
            <small dangerouslySetInnerHTML={{ __html: replacedescription }} />
          </div>
        </div>
      </li>
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
