export function ItemResult ({ id, replacetitle, replaceingredients, replacedescription, title, description, ingredients, images, handleDetail }) {
  return (
    <>
      <li key={id} className='coincidences-item' onClick={() => handleDetail(title, description, ingredients, images)}>
        <div className='text-black'>
          <strong dangerouslySetInnerHTML={{ __html: replacetitle }} />
          <div>
            <p dangerouslySetInnerHTML={{ __html: replaceingredients }} />
            <small dangerouslySetInnerHTML={{ __html: replacedescription }} />
          </div>
        </div>
      </li>

    </>
  )
}
