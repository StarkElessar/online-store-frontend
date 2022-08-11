import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchProducts } from '../redux/actions/products'

import ProductCard from './ProductCard'
import ProductSkeleton from './skeletons/PoductSkeleton'

const ProductCatalog = () => {
  const dispath = useDispatch()
  const { items, count, loading, selectedType, selectedBrand } = useSelector(({ products, filters }) => ({
    items: products.items.rows,
    count: products.items.count,
    loading: products.isLoaded,
    selectedType: filters.selectedType,
    selectedBrand: filters.selectedBrand
  }))

  useEffect(() => {
    dispath(actionFetchProducts(selectedBrand, selectedType))
  }, [dispath, selectedBrand, selectedType])

  return (
    <main className='shop__content' style={{ position: 'relative' }}>
      {count === 0 &&
        (<h1
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 36
          }}
        >
          Нет таких товаров....
        </h1>)}

      {(!loading ? [...Array(8)] : items).map((productObj, index) => {

        return (
          !loading
            ?
            <ProductSkeleton key={index} />
            :
            <ProductCard
              key={productObj.id}
              id={productObj.id}
              imgUrl={productObj.img}
              brand={'brand'}
              title={productObj.name}
              rating={productObj.rating}
              price={productObj.price}
            />
        )
      })}
    </main>
  )
}

export default memo(ProductCatalog)