import React, { useState, useEffect } from 'react'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import PageNotFound from './components/PageNotFound'
import SignUp from './pages/SignUp'
import Forgot from './pages/Forgot'
import AuthRoute from './routes/AuthRoute'
import UserRoute from './routes/UserRoute'
import ImprovedLogin from './pages/Login'
import axios from 'axios';

const App = () => {
    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
    const [cart,setCart] = useState(savedData);
    const [user, setUser] = useState();

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

  const isAuth= location.pathname === '/' || location.pathname === '/signup';

  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUser(response.data);
    }); 
  }
}, []);


  return (
    <div className='h-screen overflow-scroll gap-2 overflow-x-hidden flex flex-col'>
    {token && <Header productCount={totalCount} setUser={setUser} />}
    <div className='grow'>
      <Routes>
      <Route path='/login' element={<AuthRoute user={user} ><ImprovedLogin setUser={setUser} /></AuthRoute>}/>
      <Route path='/signup' element={<AuthRoute user={user}><SignUp/></AuthRoute>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/' element={<UserRoute user={user} ><Main addToCart={hanldeAddToCart} /></UserRoute>}/>
      <Route path='/details/:id' element={<UserRoute user={user}><ProductDetails addToCart={hanldeAddToCart} /></UserRoute>}/>
      <Route path='/cart' element={<UserRoute user={user}><CartPage setCart={setCart} updateCart={updateCart} data={cart}/></UserRoute>}/>
      <Route path="/notfound" element={<PageNotFound/>}/>
      </Routes>
    </div>
    {token && <Footer/>}
    </div>
  )
}

export default App