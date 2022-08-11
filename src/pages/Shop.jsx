import React, { memo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionFetchTypes, actionFetchBrands } from '../redux/actions/filters'
import { actionFetchProducts } from '../redux/actions/products'
import Types from '../components/Types'
import Brands from '../components/Brands'
import ProductCatalog from '../components/ProductCatalog'

const Shop = () => {
  const dispath = useDispatch()
  const state = useSelector(({ products, filters }) => ({
    rows: products.items.rows,
    loading: products.isLoaded,
    selectedType: filters.selectedType,
    selectedBrand: filters.selectedBrand
  }))

  const { rows, loading, selectedType, selectedBrand } = state

  useEffect(() => {
    dispath(actionFetchProducts(selectedBrand, selectedType))
    dispath(actionFetchTypes())
    dispath(actionFetchBrands())
  }, [dispath, selectedBrand, selectedType])


  if (!loading) {
    return <h1>Загрузка....</h1>
  }

  return (
    <div className='page__shop shop'>
      <div className='shop__container'>
        <aside className='shop__sidebar'>
          <nav className='shop__filters'>
            <Types />
            <Brands />
          </nav>
        </aside>
        {
          rows <= 0
            ?
            <h2
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: 60,
                fontSize: 32,
                fontWeight: 600,
                color: '#aaa'
              }}
            >
              Нет товаров удовлетворяющих вашим требованиям..
            </h2>
            :
            <ProductCatalog />
        }
      </div>
    </div>
  )
}

export default memo(Shop)