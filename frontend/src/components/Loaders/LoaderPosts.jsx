import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import ContentLoader from 'react-content-loader'

const LoaderPosts = (props) => (
  <Row>
    <Col>
      <ContentLoader
        speed={1.5}
        width='100%'
        height='100%'
        viewBox='0 0 400 220'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        {...props}
      >
        <rect x='221' y='96' rx='2' ry='2' width='140' height='10' />
        <rect x='221' y='118' rx='2' ry='2' width='140' height='50' />
        <rect x='10' y='46' rx='2' ry='2' width='200' height='200' />
        <rect x='222' y='176' rx='0' ry='0' width='90' height='12' />
      </ContentLoader>
    </Col>
  </Row>
)

export default LoaderPosts
