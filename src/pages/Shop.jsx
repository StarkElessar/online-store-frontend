import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../components/ProductCard'
import { setSelectedType, setSelectedBrand } from '../redux/actions/filters'

const Shop = () => {
  const dispath = useDispatch()
  const state = useSelector(({ products, filters }) => ({
    items: products.items,
    selectedType: filters.selectedType.name,
    selectedBrand: filters.selectedBrand.name,
    allTypes: filters.allTypes,
    allBrands: filters.allBrands
  }))

  const { items, selectedType, selectedBrand, allTypes, allBrands } = state

  return (
    <div className='page__shop shop'>
      <div className='shop__container'>
        <aside className='shop__sidebar'>
          <nav className='shop__filters'>
            <ul className='shop__types'>
              {allTypes.map(({ id, name }) => {
                const onSelectType = () => dispath(setSelectedType(id, name))

                return (
                  <li
                    key={id}
                    onClick={onSelectType}
                    className={name === selectedType ? 'active' : ''}
                  >
                    {name}
                  </li>
                )
              })}
            </ul>

            <ul className='shop__brands'>
              {allBrands.map(({ id, name }) => {
                const onSelectBrand = () => dispath(setSelectedBrand(id, name))

                return (
                  <li
                    key={id}
                    onClick={onSelectBrand}
                    className={name === selectedBrand ? 'active' : ''}
                  >
                    {name}
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
        <main className='shop__content'>
          {items.map(({ id, imgUrl, brandId, title, rating, price }) => (
            <ProductCard
              key={id}
              id={id}
              imgUrl={imgUrl}
              brand={allBrands[brandId].name}
              title={title}
              rating={rating}
              price={price}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default memo(Shop)