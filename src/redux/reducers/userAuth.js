import { USER_LOGIN, USER_LOGOUT } from '../../utils/consts'

const initialState = {
  isAuth: false
}

const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isAuth: true
      }
    case USER_LOGOUT:
      return {
        isAuth: false
      }
    default:
      return state
  }
}

export default userAuth