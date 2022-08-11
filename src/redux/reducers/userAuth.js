import { USER_LOGIN, USER_LOGOUT } from '../../utils/consts'

const initialState = {
  user: {},
  isAuth: false
}

const userAuth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false
      }
    default:
      return state
  }
}

export default userAuth