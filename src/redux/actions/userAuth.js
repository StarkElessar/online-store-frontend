import { USER_LOGIN, USER_LOGOUT } from "../../utils/consts";

export const userLogin = (data) => ({
  type: USER_LOGIN,
  payload: data
})

export const userLogout = () => ({ type: USER_LOGOUT })