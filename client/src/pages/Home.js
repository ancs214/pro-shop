import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'

const Home = () => {
  //useDispatch returns a reference to the dispatch func from Redux store to dispatch actions
  const dispatch = useDispatch()

  //define productList by what we named our state in store.js
  const productList = useSelector((state) => state.productList)
  //destructure state obj (refer to productReducers.js)
  const { loading, error, products } = productList

  //on page load, dispatch our axios get requests through listProducts function
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {/* when we map through something to create a list, the element has to have a unique key */}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Home
