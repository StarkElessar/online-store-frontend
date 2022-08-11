import React, { memo } from 'react'

import Types from '../components/Types'
import Brands from '../components/Brands'
import ProductCatalog from '../components/ProductCatalog'

const Shop = () => {
  return (
    <div className='page__shop shop'>
      <div className='shop__container'>
        <aside className='shop__sidebar'>
          <nav className='shop__filters'>
            <Types />
            <Brands />
          </nav>
        </aside>
        <ProductCatalog />
      </div>
    </div>
  )
}

export default memo(Shop)