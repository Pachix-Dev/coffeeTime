import Card from 'react-bootstrap/esm/Card'
export default function SearchResultCard ({ handleDetail, id, replacetitle, newReplaceIngredients, title, description, ingredients, images }) {
  const baseUrl = window.location.origin + '/uploads/'
  return (
    <>
      <Card className='searchCard h-100 text-black' onClick={() => handleDetail(title, description, ingredients, images)}>
        <div className='cardImage' style={{ background: `url(${encodeURI(baseUrl + images[0])}) center center no-repeat`, backgroundSize: 'cover' }} />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: replacetitle }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: newReplaceIngredients }} />
        </Card.Body>
      </Card>

    </>
  )
}
