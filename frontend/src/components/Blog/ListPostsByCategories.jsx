
import { useLocation } from 'react-router'
import { usePosts } from '../../hooks/usePosts'
import { Suspense, lazy } from 'react'
import Row from 'react-bootstrap/esm/Row'
import './main.css'
import LoaderPosts from '../../components/Loaders/LoaderPosts'
import { Helmet } from 'react-helmet'

const SinglePost = lazy(() => import('./SinglePost.jsx'))

export default function ListPostsByCategories () {
  const { lisPostsByCategory, titleCategory } = usePosts()
  const path = useLocation()
  return (
    <>
      <Helmet>
        <title>{titleCategory} | coffee time</title>
      </Helmet>
      <div className='LastestPosts mb-5'>
        <h1>{titleCategory} Posts</h1>
        <Row className='mt-3'>
          {Array.isArray(lisPostsByCategory)
            ? lisPostsByCategory.map(post => {
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
    </>
  )
}
