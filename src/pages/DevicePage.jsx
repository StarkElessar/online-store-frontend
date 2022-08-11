import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { actionFetchProductOne } from '../redux/actions/products'

const DevicePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(actionFetchProductOne(id))
  }, [dispatch, id])

  const product = useSelector(({ products }) => products.currentItem)
  const description = [
    { id: 1, title: 'Оперативная память', description: '6 Гб', },
    { id: 2, title: 'Камера', description: '12 мп', },
    { id: 3, title: 'Процессор', description: 'Snapdragon 935G', },
    { id: 4, title: 'Кол-во ядер', description: '4', },
    { id: 5, title: 'Аккумулятор', description: '4000', },
  ]

  return (
    <div className='page__product product-page'>
      <div className='product-page__container'>
        <div className='product-page__img'>
          <img src={process.env.REACT_APP_API_URL + product.img} width={'100%'} alt={product.name} />
        </div>

        <div className='product-page__description'>
          <h2 className='product-page__title'>{product.name}</h2>
          <span className='product-page__price'>Цена: {product.price} Br</span>
          <div className='product-page__price'>Рейтинг: {product.rating} Br</div>

          <h3 style={{ marginTop: 20, marginBottom: 20, fontWeight: 700 }} className='product-page__spec'>Характеристики:</h3>
          <ul>
            {description.map(({ id, title, description }) => {
              return (
                <li key={id}>{title}: {description}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DevicePage