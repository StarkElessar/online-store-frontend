import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { authRoutes, publicRoutes } from '../routes'
import Shop from '../pages/Shop'
import Header from './Header'

const AppRouter = () => {
  const { isAuth } = useSelector(({ userAuth }) => userAuth)

  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        {isAuth && authRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />
        })}
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} exact />
        })}
        <Route path='*' element={<Shop />} />
      </Routes>
    </div>

  )
}

export default AppRouter