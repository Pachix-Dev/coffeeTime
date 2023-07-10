import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { useKeywordEmphasis } from '../../hooks/useKeywordEmphasis'
import './SearchResult.css'
import { useEffect, useRef, Suspense, lazy } from 'react'
import LoaderSearchResults from '../../components/Loaders/LoaderSearchResults'
import { Helmet } from 'react-helmet'

const SearchResultCard = lazy(() => delayForDemo(import('../../components/SearchResultCard/SearchResultCard')))

function delayForDemo (promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000)
  }).then(() => promise)
}

export function SearchResults () {
  const { keyword } = useParams()
  const { keywordEmphasis, getDrinks } = useKeywordEmphasis()
  const firstRender = useRef(true)

  useEffect(() => {
    getDrinks(keyword)
    if (firstRender.current) {
      firstRender.current = false
    }
  }, [keyword])

  return (
    <>
      <Helmet>
        <title>{keyword} | coffee time</title>
      </Helmet>
      <Container className='searchBlock  pt-5 pb-5'>
        <Row>
          {(keywordEmphasis.length > 0
            ? keywordEmphasis.map(filteredKeywords => {
              const { id, replacetitle, newReplaceIngredients, title, description, ingredients, images } = filteredKeywords
              return (
                <Col key={id} xs={12} md={6} lg={4} xl={3} className='pt-5'>
                  <Suspense key={id} fallback={<LoaderSearchResults />}>
                    <SearchResultCard
                      key={id}
                      id={id}
                      replacetitle={replacetitle}
                      newReplaceIngredients={newReplaceIngredients}
                      title={title}
                      description={description}
                      ingredients={ingredients}
                      images={images}
                    />
                  </Suspense>
                </Col>
              )
            })
            : firstRender.current ? '' : <p className='pt-5'> Sorry we couldn't find what you were looking for</p>)}
        </Row>
      </Container>
    </>
  )
}
