import React from 'react'
import { useNavigate } from 'react-router-dom'

import { DEVICE_ROUTE } from '../utils/consts'

const ProductCard = ({ imgUrl, id, brand, title, rating, price }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`${DEVICE_ROUTE}/${id}`)
  const imgPath = `${process.env.REACT_APP_API_URL}${imgUrl}`

  return (
    <article className='product-card' onClick={handleClick}>
      <div className="product-card__img">
        <img src={imgPath} alt="Product Icon" />
      </div>
      <span className='product-card__brand'>{brand}</span>
      <h3 className='product-card__title'>{title}</h3>
      <span className='product-card__rate'>Рейтинг: {rating}</span>
      <span className='product-card__price'>Цена: {price} Br</span>
      <button className='product-card__btn'>
        Добавить в корзину
      </button>
    </article>
  )
}

export default ProductCard