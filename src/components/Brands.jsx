import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSelectedBrand } from '../redux/actions/filters'

const Brands = () => {
  const dispath = useDispatch()
  const { allBrands, selectedBrand } = useSelector(({ filters }) => ({
    allBrands: filters.allBrands,
    selectedBrand: filters.selectedBrand.name
  }))
  const brandsArray = [{ id: 0, name: 'Все' }, ...allBrands]

  return (
    <ul className='shop__brands'>
      {brandsArray.map(({ id, name }) => {
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

  )
}

export default memo(Brands)