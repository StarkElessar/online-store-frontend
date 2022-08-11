import React, { memo, useState } from 'react'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'
import CreateBrand from '../components/modals/CreateBrand'

const Admin = () => {
  const [typeModalVisible, setTypeModalVisible] = useState(false)
  const [brandModalVisible, setBrandModalVisible] = useState(false)
  const [deviceModalVisible, setDeviceModalVisible] = useState(false)

  return (
    <div className='page__admin admin'>
      <div className='admin__container'>
        <button
          className='admin__btn'
          onClick={() => setTypeModalVisible(true)}
        >
          Добавить тип
        </button>
        <button
          className='admin__btn'
          onClick={() => setBrandModalVisible(true)}
        >
          Добавить бренд
        </button>
        <button
          className='admin__btn'
          onClick={() => setDeviceModalVisible(true)}
        >
          Добавить товар
        </button>
      </div>

      {typeModalVisible && <CreateType onHide={setTypeModalVisible} />}
      {brandModalVisible && <CreateBrand onHide={setBrandModalVisible} />}
      {deviceModalVisible && <CreateDevice onHide={setDeviceModalVisible} />}
    </div>
  )
}

export default memo(Admin)