
import { useLocation } from 'react-router'
import { useTag } from '../../hooks/useTag'
import { Suspense, lazy } from 'react'
import Row from 'react-bootstrap/esm/Row'
import './main.css'
import LoaderPosts from '../../components/Loaders/LoaderPosts'
import { Helmet } from 'react-helmet'

const SinglePost = lazy(() => import('./SinglePost.jsx'))

export default function ListPostsByTag () {
  const { lisPostsByTag, tag } = useTag()
  const path = useLocation()
  return (
    <div className='LastestPosts mb-5'>
      <Helmet>
        <title>{tag} | coffee time</title>
      </Helmet>
      <Row className='mt-3'>
        {Array.isArray(lisPostsByTag)
          ? lisPostsByTag.map(post => {
            const { id, title, body, excerpt, tags, image, category, imageOwnerName = {} } = post
            const datePublished = post.date_published
            return (
              <Suspense key={id} fallback={<LoaderPosts />}>
                <SinglePost
                  key={id}
                  id={id}
                  title={title}
                  body={body}
                  excerpt={excerpt}
                  tags={tags}
                  image={image}
                  category={category}
                  imageOwnerName={imageOwnerName}
                  datePublished={datePublished}
                  path={path.pathname}
                />
              </Suspense>
            )
          })
          : 'No hay datos para mostrar...'}
      </Row>
    </div>
  )
}
