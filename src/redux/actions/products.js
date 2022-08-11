import { fetchProducts, fetchProductOne } from "../../http/deviceAPI"
import { SET_PRODUCTS, SET_LOADED, SET_PRODUCT_ONE } from "../../utils/consts"

export const setLoaded = (bool) => ({
  type: SET_LOADED,
  payload: bool
})

export const actionFetchProducts = (brand, type) => (dispatch) => {
  const activeBrand = brand.name === 'Все' ? '' : `&brandId=${brand.id}` 
  const activeType = type.name === 'Все' ? '' : `&typeId=${type.id}`
  const url = `?limit=20${activeBrand}${activeType}`

  dispatch(setLoaded(false))
  fetchProducts(url).then((data) => dispatch(setProducts(data)))
}

export const actionFetchProductOne = (id) => (dispatch) => {
  fetchProductOne(id).then((data) => dispatch(setProductOne(data)))
}

export const setProducts = (array) => ({
  type: SET_PRODUCTS,
  payload: array
})

export const setProductOne = (obj) => ({
  type: SET_PRODUCT_ONE,
  payload: obj
})