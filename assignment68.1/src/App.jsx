import React from 'react'
import Login from './pages/Login'
import SignUP from './pages/SignUp'
import { Route, Routes } from 'react-router'
import Forgot from './pages/Forgot'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
        <Route path='/forgot' element={<Forgot />} />
      </Routes>
    </div>
  )
}

export default App