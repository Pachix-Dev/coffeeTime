/* eslint-disable react/jsx-indent */
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import './main.css'
import { useEffect, useState } from 'react'
import { getSinglePost } from '../../services/getSinglePost'
import { beautifyURL, beautifyDate } from '../../util/util.js'
import { Helmet } from 'react-helmet'

export default function DetailPost () {
  const category = useLocation()
  const datosPost = useParams()

  const arrayDatos = (category.state === null
    ? []
    : [{
        id: category.state.id,
        title: category.state.title,
        image: category.state.image,
        excerpt: category.state.excerpt,
        body: category.state.body,
        datePublished: category.state.datePublished,
        tags: category.state.tags
      }])

  const [post, setPost] = useState(arrayDatos)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (category.state === null) {
      // There is not data call api
      getSinglePost({ idPost: datosPost.idPost })
        .then(post => {
          setPost(post)
        }).catch(err => {
          console.log(err)
          setIsError(true)
        })
    }
  }, [category])

  if (isError) return <Navigate to='/404' replace />

  return (
    <>

    {post.length !== 0
      ? post.map(post => {
        return (
          <div key={post.id} className='postsdetail mb-5'>
            <Helmet>
                  <title>{post.title} | coffee time</title>
                  <meta name='description' content={post.excerpt} />
            </Helmet>
            <h1>{post.title}</h1>
            <div className='tagsDetail mt-5 mb-5'>
            {post.tags.split(',').map(tag => {
              return (
                <Link key={tag} to={`/blog/tag/${tag}`}>{tag}</Link>
              )
            })}
            </div>

          <img src={post.image} className='w-100' alt={beautifyURL(post.title)} />
          <p className='mt-5'><strong>Publised on</strong> {beautifyDate(post.datePublished)}</p>
          <p>{post.body}</p>
          </div>
        )
      })

      : ''}
    </>
  )
}
