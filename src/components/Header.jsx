import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { userLogout } from '../redux/actions/userAuth'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuth } = useSelector(({ userAuth }) => userAuth)

  const userLoginHandler = () => navigate(LOGIN_ROUTE)
  const handleClickAdminPanel = () => navigate(ADMIN_ROUTE)

  const handleClickLogout = useCallback(() => {
    dispatch(userLogout())
    navigate(LOGIN_ROUTE)
    localStorage.removeItem('token')
  }, [dispatch, navigate])

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to={SHOP_ROUTE} className='header__logo'>Купилка#Стор</Link>
        {isAuth
          ? (
            <nav className='header__nav'>
              <button
                onClick={handleClickAdminPanel}
                className='header__user'
              >
                Админ панель
              </button>
              <button
                onClick={handleClickLogout}
                className='header__login'
              >
                Выйти
              </button>
            </nav>)
          : (
            <nav className='header__nav'>
              <button onClick={userLoginHandler} className='header__login'>Авторизация</button>
            </nav>)}
      </div>
    </header>
  )
}

export default Header