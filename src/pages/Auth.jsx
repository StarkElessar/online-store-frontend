import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { userLogin } from '../redux/actions/userAuth'

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const singClick = async (e) => {
    try {
      e.preventDefault()

      const dataUser = isLogin
        ? await login(email, password)
        : await registration(email, password)
      
      dispatch(userLogin(dataUser))
      navigate(SHOP_ROUTE)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Введите Ваш e-mail..'
          />
          <input
            className='auth__form-control'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <button
            className="auth__btn"
            onClick={singClick}
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default memo(Auth)