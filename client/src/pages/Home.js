import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* when we map through something to create a list, the element has to have a unique key */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
