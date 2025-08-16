import React from 'react'
import { RxCross2 } from "react-icons/rx";

const CartRow = () => {
  return (
    <div className='flex justify-between items-center bg-white py-2 px-8 border-b border-gray-200'>
      <div className='w-6'><RxCross2 /></div>
      <img className='w-[50px] h-[50px]' src="https://img.freepik.com/premium-photo/coffee-mug_920207-5709.jpg" alt='img' />
      <h1 className='w-1/3 text-orange-500 font-bold'>Black Printed Coffee Mug</h1>
      <p className='w-[80px] text-sm font-bold'>₹300</p>
      <input className='w-[80px] border border-gray-300 pl-1' type="number" defaultValue={2} />
      <p className='w-[80px] text-sm font-bold'>₹600</p>
    </div>
  );
};


export default CartRow