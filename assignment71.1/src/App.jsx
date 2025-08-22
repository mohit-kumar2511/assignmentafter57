import React, { useState } from 'react'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import PageNotFound from './components/PageNotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Forgot from './pages/Forgot'

const App = () => { 
    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart,setCart] = useState(savedData);
    const hanldeAddToCart = function(productId,count){
    count=+count;
    let oldCount = cart[productId] || 0;
    const newCart = {...cart, [productId]:oldCount+count};
    updateCart(newCart);
  };

  function updateCart(newCart){
    setCart(newCart);
    localStorage.setItem("my-cart", JSON.stringify(newCart));
  }



  const totalCount= Object.keys(cart).reduce(function (output,current){
    return output+cart[current];
  },0);
  console.log(cart);

  const isAuth= location.pathname === '/login' || location.pathname === '/signup';


  return (
    <div className='h-screen overflow-scroll gap-2 overflow-x-hidden flex flex-col'>
      { isAuth ?
      (<Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
      </Routes>) :
    (<>
    <Header productCount={totalCount} />
    <div className='grow'>
      <Routes>
      <Route path='/' element={<Main addToCart={hanldeAddToCart} />}/>
      <Route path='/details/:id' element={<ProductDetails addToCart={hanldeAddToCart} />}/>
      <Route path='/cart' element={<CartPage setCart={setCart} updateCart={updateCart} data={cart}/>}/>
      <Route path="/notfound" element={<PageNotFound/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    )}
    </div>
  )
}

export default App
