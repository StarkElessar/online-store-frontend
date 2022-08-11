import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSelectedType } from '../redux/actions/filters'

const Types = () => {
  const dispath = useDispatch()
  const { allTypes, selectedType } = useSelector(({ filters }) => ({
    allTypes: filters.allTypes,
    selectedType: filters.selectedType.name
  }))

  const typesArray = [{ id: 0, name: 'Все' }, ...allTypes]

  return (
    <ul className='shop__types'>
      {typesArray.map(({ id, name }) => {
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
  )
}

export default memo(Types)