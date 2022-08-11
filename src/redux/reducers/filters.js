import { SET_SELECTED_TYPE, SET_SELECTED_BRAND, SET_TYPES, SET_BRANDS } from '../../utils/consts'

const initialState = {
  selectedType: { id: 0, name: 'Все'},
  selectedBrand: { id: 0, name: 'Все'},
  allTypes: [],
  allBrands: [],
  typesIsLoaded: false,
  brandsIsLoaded: false
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPES:
      return {
        ...state,
        allTypes: action.payload,
        typesIsLoaded: true
      }
    case SET_BRANDS:
      return {
        ...state,
        allBrands: action.payload,
        brandsIsLoaded: true
      }
    case SET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload
      }
    case SET_SELECTED_BRAND:
      return {
        ...state,
        selectedBrand: action.payload
      }
    default:
      return state
  }
}

export default filtersReducer