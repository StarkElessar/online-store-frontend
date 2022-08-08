import React from 'react'

const DevicePage = () => {
  const product = {
    id: 1,
    imgUrl: '10310c15-34cc-480c-8a1b-8593ef9ca940.jpg',
    title: 'iPhone 12 Pro Max',
    rating: 0,
    price: 6000,
    typeId: 2,
    brandId: 7,
  }
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
          <img src={`http://localhost:3100/${product.imgUrl}`} width={500} height={500} alt='Product Icon' />
        </div>

        <div className='product-page__description'>
          <h2 className='product-page__title'>{product.title}</h2>
          <span className='product-page__price'>Цена: {product.price} Br</span>

          <h3 style={{ marginTop: 20, marginBottom: 20, fontWeight: 700}} className='product-page__spec'>Характеристики:</h3>
          <ul>
            {description.map(({id, title, description}) => {
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