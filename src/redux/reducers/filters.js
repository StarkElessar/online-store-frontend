import { SET_SELECTED_TYPE, SET_SELECTED_BRAND } from '../../utils/consts'

const initialState = {
  selectedType: { id: 0, name: 'Все'},
  selectedBrand: { id: 0, name: 'Все'},
  allTypes: [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Телевизоры' },
    { id: 2, name: 'Смартфоны' },
    { id: 3, name: 'Холодильники' },
    { id: 4, name: 'Мониторы' },
  ],
  allBrands: [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'LG' },
    { id: 3, name: 'Beko' },
    { id: 4, name: 'Xiaomi' },
    { id: 5, name: 'AOC' },
    { id: 6, name: 'Redmond`s' },
    { id: 7, name: 'Apple' },
    { id: 8, name: 'Huawei' },
    { id: 9, name: 'Lenovo' },
  ]
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
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