import { fetchBrands, fetchTypes } from "../../http/deviceAPI"
import { SET_TYPES, SET_BRANDS, SET_SELECTED_TYPE, SET_SELECTED_BRAND } from "../../utils/consts"

export const actionFetchTypes = () => (dispatch) => {
  fetchTypes().then((data) => dispatch(setTypes(data)))
}

export const actionFetchBrands = () => (dispatch) => {
  fetchBrands().then((data) => dispatch(setBrands(data)))
}

export const setTypes = (array) => ({
  type: SET_TYPES,
  payload: array
})

export const setBrands = (array) => ({
  type: SET_BRANDS,
  payload: array
})

export const setSelectedType = (id, name) => ({
  type: SET_SELECTED_TYPE,
  payload: { id, name }
})

export const setSelectedBrand = (id, name) => ({
  type: SET_SELECTED_BRAND,
  payload: { id, name }
})