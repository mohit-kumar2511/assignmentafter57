import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/details/:id' element={<ProductDetails/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App