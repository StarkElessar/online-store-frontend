import { $authHost, $host } from './index'

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type)

  return data
}

export const fetchTypes = async () => {
  const { data } = await $host.get('api/type')
  
  return data
}

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand)

  return data
}

export const fetchBrands = async () => {
  const { data } = await $host.get('api/brand')
  
  return data
}

export const createProduct = async (product) => {
  const { data } = await $authHost.post('api/device', product)

  return data
}

export const fetchProducts = async (path) => {
  const { data } = await $host.get(`api/device${path}`)
  
  return data
}

export const fetchProductOne = async (path) => {
  const { data } = await $host.get(`api/device/${path}`)
  
  return data
}