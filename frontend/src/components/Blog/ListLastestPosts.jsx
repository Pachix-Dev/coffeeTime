import { Suspense, lazy } from 'react'
import { useLocation } from 'react-router'
import Row from 'react-bootstrap/esm/Row'
import './main.css'
import LoaderPosts from '../../components/Loaders/LoaderPosts'
import useLastestPosts from '../../hooks/useLastestPosts'

const SinglePost = lazy(() => import('./SinglePost.jsx'))

export default function ListLastestPosts () {
  const { listLastestPost } = useLastestPosts()
  const path = useLocation()
  return (
    <div className='LastestPosts mb-5'>
      <h1>Lastest Posts</h1>
      <Row className='mt-3'>
        {listLastestPost.map(post => {
          const { id, title, body, excerpt, tags, image, category, imageOwnerName, datePublished } = post
          return (
            <Suspense key={id} fallback={<LoaderPosts />}>
              <SinglePost
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
        })}
      </Row>
    </div>
  )
}
