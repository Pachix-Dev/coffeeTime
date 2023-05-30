import { Link } from 'react-router-dom'
import { beautifyURL } from '../../util/util.js'
import './main.css'

export default function SingleCategory ({ id, title, categoryImage, categoryDesc }) {
  return (
    <Link to={`category/${id}/${beautifyURL(title)}`} state={{ id, title, categoryDesc }}>
      <img src={categoryImage} alt={beautifyURL(title)} />
      <div className='categorie-info'>
        <h5>{title}</h5>
        <span>{categoryDesc}</span>
      </div>
    </Link>

  )
}
