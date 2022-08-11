import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionFetchTypes, setSelectedType } from '../redux/actions/filters'
import BrandSkeleton from './skeletons/BrandSkeleton'

const Types = () => {
  const dispath = useDispatch()
  useEffect(() => dispath(actionFetchTypes()), [dispath])

  const { allTypes, selectedType, loading } = useSelector(({ filters }) => ({
    allTypes: filters.allTypes,
    selectedType: filters.selectedType.name,
    loading: filters.typesIsLoaded
  }))

  const typesArray = [{ id: 0, name: 'Все' }, ...allTypes]

  return (
    <ul className='shop__types' style={{paddingTop: 10}}>
      {(loading ? typesArray : [...Array(1)]).map((obj, index) => {
        const onSelectType = () => dispath(setSelectedType(obj.id, obj.name))

        return (
          loading
            ?
            <li
              key={obj.id}
              onClick={onSelectType}
              className={obj.name === selectedType ? 'active' : ''}
            >
              {obj.name}
            </li>
            : <BrandSkeleton key={index} />

        )
      })}
    </ul>
  )
}

export default memo(Types)