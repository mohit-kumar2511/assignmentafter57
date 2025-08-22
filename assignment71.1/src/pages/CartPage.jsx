import React, { useEffect, useState } from 'react'
import CartList from '../components/CartList'
import { getProductDetail } from '../components/api';
import Loading from '../components/Loading';

const CartPage = ({setCart,updateCart,data}) => {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const productIds=Object.keys(data);

  useEffect(function(){
    const myPromises = productIds.map(function(id){
      return getProductDetail(id);
    })
    Promise.all(myPromises).then(function(products){
      setProducts(products);
      setLoading(false);
    })

  }, [data]);

  if(products){
  useEffect(function(){
    let newTotal=0;
    for (let i = 0; i < products.length; i++) {
      const quantity = +data[products[i].data.id] || 0;
      newTotal += quantity * +(products[i].data.price);
    }
    setTotal(newTotal.toFixed(2));
  },[products,data]);
}

  if(loading){
    return <Loading/>
  }


  if(productIds.length === 0){
    return (
      <div className='flex items-center justify-center h-full'>
        <h1 className='text-2xl text-gray-500'>Your cart is empty</h1>
      </div>
    )
  }


  return (
    <div className='flex flex-col items-end bg-white my-6 mx-[10%] py-8 px-[5%]'>
        <CartList setCart={setCart} updateCart={updateCart} cart={data} data={products}/>
        <div className='border mt-4 border-gray-300 w-[30%]'>
            <h1 className='border-b bg-gray-50 text-sm font-bold px-2 py-1 border-gray-300'>Cart totals</h1>
            <div className='p-3 text-sm'>
                <div className='border-b py-1 px-2 border-gray-200 lg:pr-[35%] flex justify-between'>
                <span>Subtotal</span>
                <span>₹{total}</span>
                </div>
                <div className='border-b py-1 px-2 border-gray-200 flex lg:pr-[35%] justify-between'>
                <span>Total</span>
                <span>₹{total}</span>
                </div>
            <button className='bg-[#FF5151] text-[12px] mt-2 w-full text-white rounded px-4 py-2'>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default CartPage