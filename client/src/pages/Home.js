import { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      //response will have a data property...we destructure response to just get data
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }

    fetchProducts()
    //second argument in useEffect is a dependency - anything you want to trigger useEffect when it changes
  }, [])

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
