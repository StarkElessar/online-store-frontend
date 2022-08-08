import React from 'react'

const CreateBrand = ({ onHide }) => {
  return (
    <div className='create__modal'>
      <h2>Добавить новый бренд:</h2>
      <form>
        <input type="text" placeholder='Введите название бренда' />
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

export default CreateBrand