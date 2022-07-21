import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

//reducer takes in an initial state and an action
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //product fetch req has been sent and is loading; product array will be emtpy
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    //fetch req successful; product array will now contain data, which we send in the payload
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload }
    //fetch req unsuccessful and we get error, send error in the payload
    case 'PRODUCT_LIST_FAIL':
      return { loading: false, error: action.payload }
    //default will return initial state of empty product array
    default:
      return state
  }
}
