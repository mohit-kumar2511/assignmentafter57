import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import CartRow from './components/CartRow'
import CartList from './components/CartList'
import CartPage from './pages/CartPage'

const App = () => {

  const [cart,setCart] = useState({});
  const hanldeAddToCart = function(productId,count){
    count=+count;
    let oldCount = cart[productId] || 0;
    setCart({...cart, [productId]:oldCount+count});
  };
  const totalCount= Object.keys(cart).reduce(function (output,current){
    return output+cart[current];
  },0);
  console.log(totalCount);

  return (
    <div className='h-screen overflow-scroll gap-2 overflow-x-hidden flex flex-col'>
    <Header productCount={totalCount} />
    <div className='grow'>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/details/:id' element={<ProductDetails addToCart={hanldeAddToCart} />}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App