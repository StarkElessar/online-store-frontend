import React, {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/AppRouter'
import { check } from './http/userAPI'
import { userLogin } from './redux/actions/userAuth'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then((data) => {
        dispatch(userLogin(data))
        console.log(data);
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) {
    return <h1>Загрузка ...</h1>
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
