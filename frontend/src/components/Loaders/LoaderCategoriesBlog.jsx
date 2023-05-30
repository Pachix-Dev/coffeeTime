import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderCategoriesBlog = (props) => (
  <ContentLoader
    speed={1.5}
    width={171}
    height={228}
    viewBox='0 0 171 228'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='3' y='201' rx='3' ry='3' width='127' height='9' />
    <rect x='2' y='184' rx='3' ry='3' width='77' height='9' />
    <rect x='2' y='4' rx='0' ry='0' width='171' height='171' />
  </ContentLoader>
)

export default LoaderCategoriesBlog
