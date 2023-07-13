import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import { beautifyURL, beautifyDate } from '../../util/util.js'
import { motion } from 'framer-motion'

export default function SinglePost ({ id, title, body, excerpt, tags, image, datePublished, category, imageOwnerName, path = '' }) {
  return (
    <Col xs={12} md={4} className='mb-5'>
      <motion.div
        className='h-100'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true, amount: 'some' }}
      >
        <Link className='blog-image-post' to={`${path}/detail/${id}/${beautifyURL(title)}`} state={{ id, title, body, excerpt, tags, image, datePublished, category, imageOwnerName }}>
          <figure>
            <div>
              <span>
                <img
                  src={image}
                  className='w-100'
                  alt={beautifyURL(title)}
                  style={{ viewTransitionName: `post-${id}` }}
                />
              </span>
            </div>
          </figure>
          <div className='blog-info-post'>
            <h5>{title}</h5>
            <p>{excerpt}</p>
            <strong>{imageOwnerName ? imageOwnerName + ' |' : ''}  {beautifyDate(datePublished)}</strong>
          </div>
        </Link>
      </motion.div>
    </Col>
  )
}
