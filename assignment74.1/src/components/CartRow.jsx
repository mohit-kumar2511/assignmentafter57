import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const CartRow = ({handleChange,handleRemove,cart,product}) => {


  const [noProduct, setNoProduct] = useState(cart[product.id] || 0);

  function onHandleRemove() {
    handleRemove(product.id);
  }

  function onHandleChange(e) {
    setNoProduct(+e.target.value);
    handleChange(+e.target.value, product.id);
  }
 

  return (
    <div className='flex justify-between items-center bg-white py-2 px-8 border-b border-gray-200'>
      <button onClick={(e)=>{onHandleRemove(+e.target.value)}} className='w-6 hover:cursor-pointer'><RxCross2 /></button>
      <img className='w-[50px] h-[50px]' src={product.thumbnail} alt='img' />
      <h1 className='w-1/3 text-orange-500 font-bold'>{product.title}</h1>
      <p className='w-[50px] text-sm font-bold'>{product.price}</p>
      <input onChange={onHandleChange} className='w-[50px] border border-gray-300 pl-1' type="number" value={noProduct} />
      <p className='w-[50px] text-sm font-bold'>{(cart[product.id] * product.price).toFixed(2)}</p>
    </div>
  );
};


export default CartRow