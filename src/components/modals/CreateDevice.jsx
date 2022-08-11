import React, { memo, useCallback } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const CreateDevice = ({ onHide }) => {
  const [info, setInfo] = useState([])
  const { allTypes, allBrands } = useSelector(({ filters }) => filters)

  const addInfo = (e) => {
    e.preventDefault()
    setInfo([...info, { title: '', desc: '', number: Date.now() }])
  }
  const removeInfo = (e, number) => {
    e.preventDefault()
    setInfo(info.filter((i) => i.number !== number))
  }
  const closeModal = useCallback(() => onHide(false), [onHide])
  const stopCloseModal = useCallback((event) => event.stopPropagation(), [])

  return (
    <div className='create-modal' onClick={closeModal}>
      <h2 className='create-modal__title'>Добавить новое товар:</h2>
      <form onClick={stopCloseModal} className='create-modal__form form-create'>
        <h3 className='form-create__title'>Выберите тип нового товара:</h3>
        <select name="type" id="">
          {allTypes.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <h3 className='form-create__title'>Выберите бренд нового товара:</h3>
        <select name="brand" id="">
          {allBrands.map((brand) => (
            <option key={brand.id} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </select>
        <input className='form-create__input' type="text" placeholder='Введите название товара' />
        <input className='form-create__input' type="number" placeholder='Введите стоимость' />
        <input className='form-create__input' type="file" />
        <hr />
        <button
          className='create-modal__btn create-btn'
          onClick={addInfo}
        >
          Добавить свойство товара:
        </button>
        {info.map(({ number }) => {
          const onRemoveIndo = (e) => removeInfo(e, number)

          return (
            <div key={number} className='form-create__row row'>
              <input className='form-create__input spec-input' type="text" placeholder='Введите название свойства' />
              <input className='form-create__input spec-input' type="text" placeholder='Введите описание свойства' />
              <button
                className='create-modal__btn delete-btn'
                onClick={onRemoveIndo}
              >
                Удалить
              </button>
            </div>
          )
        })}
        <div className='create-modal__row row'>
          <button
            className='create-modal__btn close-btn'
            onClick={closeModal}
          >
            Закрыть окно
          </button>
          <button
            className='create-modal__btn add-btn'
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  )
}

export default memo(CreateDevice)