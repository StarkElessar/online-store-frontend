import React from 'react'

const CreateType = ({ onHide }) => {
  const closeModal = () => onHide(false)
  const stopCloseModal = (event) => event.stopPropagation()

  return (
    <div className='create-modal' onClick={closeModal}>
      <h2 className='create-modal__title'>Добавить тип устройства:</h2>
      <form onClick={stopCloseModal} className='create-modal__form form-create'>
      <h3 className='form-create__title'>Добавьте новый тип товара:</h3>
        <input
          className='form-create__input'
          type="text"
          placeholder='Введите название типа'
        />
        <div className='row'>
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

export default CreateType