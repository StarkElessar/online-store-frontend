import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionFetchBrands, setSelectedBrand } from '../redux/actions/filters'
import BrandSkeleton from './skeletons/BrandSkeleton'

const Brands = () => {
  const dispath = useDispatch()
  useEffect(() => dispath(actionFetchBrands()), [dispath])

  const { allBrands, selectedBrand, loading } = useSelector(({ filters }) => ({
    allBrands: filters.allBrands,
    selectedBrand: filters.selectedBrand.name,
    loading: filters.brandsIsLoaded
  }))
  const brandsArray = [{ id: 0, name: 'Все' }, ...allBrands]

  // if (!loading) {
  //   return <BrandSkeleton/>
  // }

  return (
    <ul className='shop__brands'>
      {(loading ? brandsArray : [...Array(1)]).map((obj, index) => {
        const onSelectBrand = () => dispath(setSelectedBrand(obj.id, obj.name))

        return (
          loading
            ?
            <li
              key={obj.id}
              onClick={onSelectBrand}
              className={obj.name === selectedBrand ? 'active' : ''}
            >
              {obj.name}
            </li>
            : <BrandSkeleton key={index} />

        )
      })}
    </ul>

  )
}

export default memo(Brands)