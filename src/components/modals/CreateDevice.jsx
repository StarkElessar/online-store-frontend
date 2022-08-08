import React from 'react'
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

  return (
    <div className='create__modal'>
      <h2>Добавить новое товар:</h2>
      <form>
        <h3>Выберите тип нового товара:</h3>
        <select name="type" id="">
          {allTypes.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <h3>Выберите бренд нового товара:</h3>
        <select name="brand" id="">
          {allBrands.map((brand) => (
            <option key={brand.id} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </select>
        <input type="text" placeholder='Введите название товара' />
        <input type="number" placeholder='Введите стоимость' />
        <input type="file" />
        <hr />
        <button
          onClick={addInfo}
        >
          Добавить свойство товара:
        </button>
        {info.map(({ number }) => {
          const onRemoveIndo = (e) => removeInfo(e, number)

          return (
            <div key={number} className='row'>
              <input type="text" placeholder='Введите название свойства' />
              <input type="text" placeholder='Введите описание свойства' />
              <button onClick={onRemoveIndo}>Удалить</button>
            </div>
          )
        })}
        <div className='row'>
          <button
            className='modal__btn close-btn'
            onClick={() => onHide(false)}
          >
            Закрыть окно
          </button>
          <button
            className='modal__btn add-btn'
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateDevice