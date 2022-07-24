import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from '../constants/productConstants'

//reducer takes in an initial state and an action
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    //product fetch req has been sent and is loading; product array will be emtpy
    case PRODUCT_LIST_REQUEST:
      //products will be an array
      return { loading: true, products: [] }
    //fetch req successful; product array will now contain data, which we send in the payload
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    //fetch req unsuccessful and we get error, send error in the payload
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    //default will return initial state of empty product array
    default:
      return state
  }
}

export const productDetailsReducer = (
  //single product will be an object and have a reviews array
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      //on request, set loading to true and add whatever else is in state
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
