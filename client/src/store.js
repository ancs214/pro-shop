// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const reducer = combineReducers({})

// const initialState = {}

// const middleware = [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store

import { configureStore } from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducers'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `productList`, handled by `productListReducer`
    productList: productListReducer,
  },
})

export default store
