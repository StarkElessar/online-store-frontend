import { combineReducers } from 'redux'

import userAuth from './userAuth'
import products from './products'
import filtersReducer from './filters'

const rootReducer = combineReducers({
  userAuth,
  products,
  filters: filtersReducer
})

export default rootReducer