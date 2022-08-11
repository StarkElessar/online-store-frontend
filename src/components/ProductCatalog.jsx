import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import ProductCard from './ProductCard'
import ProductSkeleton from './skeletons/PoductSkeleton'

const ProductCatalog = () => {
  console.log('ProductCatalog Загрузился..')
  const { items, loading } = useSelector(({ products }) => {
    return {
      items: products.items.rows,
      loading: products.isLoaded
    }
  })

  console.log(loading)

  return (
    <main className='shop__content'>
      {(loading ? items : [...Array(8)]).map(({ id, img, name, rating, price }) => {
        // const brand = allBrands.filter((obj) => obj.id === brandId)

        return (
          loading
            ?
            <ProductCard
              key={id}
              id={id}
              imgUrl={img}
              brand={'brand[0].name'}
              title={name}
              rating={rating}
              price={price}
            />
            :
            <ProductSkeleton />
        )
      })}
    </main>
  )
}

export default memo(ProductCatalog)