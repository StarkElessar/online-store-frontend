import { SET_LOADED, SET_PRODUCTS, SET_PRODUCT_ONE } from '../../utils/consts'

const initialState = {
  items: [],
  currentItem: {},
  isLoaded: false
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload
      }
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    case SET_PRODUCT_ONE:
      return {
        ...state,
        currentItem: action.payload
      }
    default:
      return state
  }
}

export default products