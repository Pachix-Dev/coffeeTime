import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderSearchResults = (props) => (
  <ContentLoader
    speed={1}
    width={293}
    height={490}
    viewBox='0 0 293 490'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='1' y='454' rx='3' ry='3' width='127' height='9' />
    <rect x='3' y='424' rx='3' ry='3' width='77' height='9' />
    <rect x='-3' y='5' rx='0' ry='0' width='293' height='400' />
  </ContentLoader>
)

export default LoaderSearchResults
