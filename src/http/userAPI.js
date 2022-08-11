import { $authHost, $host } from "./index"
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
  const path = 'api/user/registration'
  const {data} = await $host.post(path, { email, password, role: 'ADMIN' })

  return jwt_decode(data.token)
}

export const login = async (email, password) => {
  const path = 'api/user/login'
  const { data } = await $host.post(path, { email, password })
  
  localStorage.setItem('token', data.token)

  return jwt_decode(data.token)
}

export const check = async () => {
  const path = 'api/user/auth'
  const { data } = await $authHost.get(path)

  localStorage.setItem('token', data.token)

  return jwt_decode(data.token)
}