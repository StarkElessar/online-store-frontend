import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <div className='page__auth auth'>
      <div className="auth__container">
        <h2 className='auth__title'>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        <form className='auth__form'>
          <input
            className='auth__form-control'
            type="text"
            placeholder='Введите Ваш e-mail..'
          />
          <input
            className='auth__form-control'
            type="password"
            placeholder='Введите Ваш пароль..'
          />
          {
            isLogin
              ?
              <div className='auth__register'>
                Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся</Link>
              </div>
              :
              <div className='auth__register'>
                Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link>
              </div>
          }

          <button className="auth__btn">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default memo(Auth)