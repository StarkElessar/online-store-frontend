import { SET_SELECTED_TYPE, SET_SELECTED_BRAND } from "../../utils/consts"

export const setSelectedType = (id, name) => ({
  type: SET_SELECTED_TYPE,
  payload: { id, name }
})

export const setSelectedBrand = (id, name) => ({
  type: SET_SELECTED_BRAND,
  payload: { id, name }
})